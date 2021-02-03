const path = require("path");
const fs = require("fs");

const fetch = require("node-fetch");
const { JSDOM } = require("jsdom");
const SVGO = require("svgo/lib/svgo");
const SVGOConfigs = require("./svgo.config");

const sourceFile = path.join(__dirname, "source.html");
const outputPath = path.join(__dirname, "icons");

console.log("Done importing");

// Download File
fetch("https://vercel.com/design/icons")
  .then((res) => res.text())
  .then((html) => {
    console.log("Done downloading");
    fs.writeFileSync(sourceFile, html);
  })
  .then(() => {
    // Remove icons that generated before
    fs.readdirSync(outputPath).forEach((file) => {
      fs.unlinkSync(file);
    });
  })
  .then(() => {
    // Parse and generate icon files
    const html = fs.readFileSync(sourceFile, "utf8");
    const document = new JSDOM(html).window.document;

    const icons = document.querySelectorAll(".geist-list .icon");
    const svgo = new SVGO(SVGOConfigs);

    // Write components to files
    Array.from(icons).forEach(async (icon) => {
      const name = icon.querySelector(".geist-text").textContent;
      const componentName =
        name.charAt(0).toUpperCase() +
        name.slice(1).replace(/-(.)/g, (g) => g[1].toUpperCase());

      const svg = icon.querySelector("svg");
      const { data: optimizedSvgString } = await svgo.optimize(svg.outerHTML);
      const styles = parseStyles(svg.getAttribute("style"));

      let component = `<script>export let color = "currentColor"; export let size = 24;</script>`;
      component += `${parseSvg(optimizedSvgString, styles)}`;

      fs.writeFileSync(componentName + ".svelte", component);
    });

    // Create index.js file
    const definitions = Array.from(icons)
      .map((icon) => {
        const name = icon.querySelector(".geist-text").textContent;
        const componentName =
          name.charAt(0).toUpperCase() +
          name.slice(1).replace(/-(.)/g, (g) => g[1].toUpperCase());

        return `export { default as Icon${componentName} } from './${componentName}.svelte'`;
        // export { default as Button } from './components/Button.svelte';
      })
      .join(";\n");
    fs.writeFileSync("index.js", definitions, "utf8");
  })
  .catch((error) => {
    console.log(error);
  });

const parseSvg = (svg, styles) => {
  const getSpecifiedColorVar = (val, ident) => {
    if (!val) return '""';
    return val.includes(ident) ? "{color}" : '"var(--geist-icons-background)"';
  };

  svg = svg.replace(/-([a-z])(?=[a-z\-]*[=\s/>])/g, (g) => g[1].toUpperCase());
  svg = svg.replace(
    /<svg([^>]+)>/,
    '<svg$1 {...$$$props} height={size} width={size} style="color: {color};">'
  );

  const geistFillColor = getSpecifiedColorVar(
    styles["--geist-fill"],
    "current"
  );
  const geistStrokeColor = getSpecifiedColorVar(
    styles["--geist-stroke"],
    "current"
  );

  // With Geist UI
  // Refer to: https://github.com/geist-org/react/pull/139/files#diff-b174da32165cea69128b525762abb680R22
  svg = svg.replaceAll('"var(--geist-foreground)"', "{color}");
  svg = svg.replaceAll(
    '"var(--geist-background)"',
    '"var(--geist-icons-background)"'
  );

  // Reset dynamic colors
  // In a few icons, the semantics of 'fill' and 'stroke' are not correct,
  // they maybe forced to override by style.
  svg = svg.replaceAll('"var(--geist-fill)"', geistFillColor);
  svg = svg.replaceAll('"var(--geist-stroke)"', geistStrokeColor);
  return svg;
};

const parseStyles = (inlineStyle = "") =>
  inlineStyle.split(";").reduce((styleObject, stylePropertyValue) => {
    // extract the style property name and value
    let [property, value] = stylePropertyValue
      .split(/^([^:]+):/)
      .filter((val, i) => i > 0)
      .map((item) => item.trim().toLowerCase());

    styleObject[property] = value;
    return styleObject;
  }, {});
