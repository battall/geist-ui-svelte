<script>
  export let segment;

  import { Text, IconSliders } from "../../";
</script>

<nav>
  <IconSliders size={16} />
  <Text style="font-size: 12px;">@GEIST-UI/SVELTE</Text>
</nav>

<style lang="scss">
  @import "../style/sizes.scss";

  nav {
    position: sticky;
    top: 0;
    height: 64px;
    margin: 0 auto;
    padding: 0 8vw;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: var(--background);
    box-shadow: 0 -2px 6px rgba(var(--foreground-rgb), 0.2);
  }

  @media only screen and (min-width: $breakpoint-tablet) {
    nav {
      padding: 0 calc((100vw - #{$breakpoint-tablet}) / 2 + 20px);
    }
  }
</style>
