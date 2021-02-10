const fs = require("fs");
const path = require("path");

let definitions = ``;

let components = fs.readdirSync(path.join(__dirname, "../components/"));
let icons = fs.readdirSync(path.join(__dirname, "../icons/"));

components.forEach((component) => {
  let name = component.split(".")[0];
  definitions += `export { default as ${name} } from "./components/${component}"\n`;
});
icons.forEach((icon) => {
  let name = icon.split(".")[0];
  definitions += `export { default as Icon${name} } from "./icons/${icon}"\n`;
});

fs.writeFileSync(path.join(__dirname, "../index.js"), definitions);
