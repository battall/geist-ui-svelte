<script>
  export let segment;
  export let isOpen = false;

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  import { stores } from "@sapper/app";
  const { session } = stores();

  import { Button, Link, IconMoon, IconSun } from "../../";

  $: if (process.browser) {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }
  $: segment, (isOpen = false);
</script>

<aside class:isOpen>
  <div class="widgets">
    <Button
      type="abort"
      auto
      on:click={(event) => dispatch("changeTheme", event)}
    >
      {#if $session.theme === "dark"}
        <IconSun size={16} />
      {:else}
        <IconMoon size={16} />
      {/if}
    </Button>
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

<style lang="scss">
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

    display: none;
    &.isOpen {
      display: block;
    }

    .widgets {
      height: 40px;

      display: flex;
      align-items: center;
      &::before {
        content: "";
        display: inline-block;
        height: 1.25rem;
        width: 0.3125rem;
        background-color: var(--accents-2);
      }

      :global(button) {
        width: 2.5rem !important;
        height: 2.5rem !important;
        padding: 0 !important;
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
      }
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
</style>
