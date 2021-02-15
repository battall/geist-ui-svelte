<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  import { Text, IconSliders } from "../../";
</script>

<nav>
  <div on:click={(event) => dispatch("toggleMenu", event)}>
    <IconSliders size={16} />
  </div>
  <Text style="font-size: 12px;">@GEIST-UI/SVELTE</Text>
</nav>

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

  @media only screen and (min-width: $breakpoint-tablet) {
    nav {
      padding: 0 calc((100vw - #{$breakpoint-tablet}) / 2 + 20px);
    }
  }
</style>
