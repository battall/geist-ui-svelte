<script>
  export let segment;
  let isMenuOpen = false;

  import { onMount, onDestroy } from "svelte";
  import { stores } from "@sapper/app";
  const { session } = stores();

  // Theme Initialization
  import "../../dist/geist-ui.css";
  onMount(() => {
    $session.theme = window.localStorage.getItem("theme");
    session.subscribe((data) => {
      window.localStorage.setItem("theme", data.theme);
      document.documentElement.setAttribute("data-theme", data.theme);
    });
  });

  import Nav from "../components/Nav.svelte";
  import Menu from "../components/Menu.svelte";
</script>

<Nav {segment} on:toggleMenu={() => (isMenuOpen = !isMenuOpen)} />
<Menu
  {segment}
  isOpen={isMenuOpen}
  on:changeTheme={() => {
    $session.theme === "dark"
      ? ($session.theme = "light")
      : ($session.theme = "dark");
  }}
/>

<main>
  <slot />
</main>

<style lang="scss">
  @import "../style/sizes.scss";

  main {
    position: relative;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0 4vw;
  }

  @media only screen and (min-width: $breakpoint-tablet) {
    main {
      padding: 0 calc((100vw - #{$breakpoint-tablet}) / 2 + 20px);
    }
  }
</style>
