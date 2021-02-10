<script>
  import "../../dist/geist-ui.css";

  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<Nav {segment} />

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
