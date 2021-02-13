<script>
  export let segment;
  let menuOpen = true;

  import { Text, Link, IconSliders } from "../../";

  $: if (process.browser) {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }
  $: segment, (menuOpen = false);
</script>

<nav>
  <div on:click={() => (menuOpen = !menuOpen)}>
    <IconSliders size={16} />
  </div>
  <Text style="font-size: 12px;">@GEIST-UI/SVELTE</Text>
</nav>

{#if menuOpen}
  <aside>
    <div class="widgets">
      <button />
    </div>
    <span>GETTING STARTED</span>
    <ul>
      <li><Link href="/introduction">Introduction</Link></li>
      <li><Link href="/installation">Installation</Link></li>
    </ul>
    <span>CUSTOMIZATION</span>
    <ul>
      <li><Link href="/themes">Themes</Link></li>
      <li><Link href="/colors">Colors</Link></li>
      <li><Link href="/icons">Icons</Link></li>
    </ul>
    <span>Components</span>
    <ul>
      <li><Link href="/button">Button</Link></li>
      <li><Link href="/collapse">Collapse</Link></li>
      <li><Link href="/divider">Divider</Link></li>
      <li><Link href="/dot">Dot</Link></li>
      <li><Link href="/input">Input</Link></li>
      <li><Link href="/link">Link</Link></li>
      <li><Link href="/select">Select</Link></li>
      <li><Link href="/snippet">Snippet</Link></li>
      <li><Link href="/spacer">Spacer</Link></li>
      <li><Link href="/tabs">Tabs</Link></li>
      <li><Link href="/text">Text</Link></li>
      <li><Link href="/window">Window</Link></li>
    </ul>
  </aside>
{/if}

<style lang="scss">
  @import "../style/sizes.scss";

  nav {
    position: sticky;
    top: 0;
    height: 64px;
    padding: 0 8vw;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: var(--background);
    box-shadow: 0 -2px 6px rgba(var(--foreground-rgb), 0.2);

    div {
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  aside {
    box-sizing: border-box;
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    padding: 0 8vw;

    overflow: hidden auto;

    background-color: var(--background);

    .widgets {
      height: 40px;
    }

    span {
      color: var(--secondary);
      line-height: calc(var(--gap) * 2);
    }

    ul {
      margin: 0 0 var(--gap) 0;
      li {
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid var(--accents-2);
        &::before {
          content: none;
        }

        :global(a) {
          width: 100% !important;
        }
      }
    }
  }

  @media only screen and (min-width: $breakpoint-tablet) {
    nav {
      padding: 0 calc((100vw - #{$breakpoint-tablet}) / 2 + 20px);
    }
  }
</style>
