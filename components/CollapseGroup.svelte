<script>
  export let accordion = true;

  // 21.02.21: I know i know... i am genius

  // Close function of current opened accordion
  let closeFunction = () => {};
  // to make accordion work use context, when one collapse opened close others
  import { setContext } from "svelte";
  if (accordion) {
    setContext("collapse", {
      setCloseFunction: (nextCloseFunction) => {
        closeFunction();
        closeFunction = nextCloseFunction;
      },
    });
  }
</script>

<div class={`collapse-group`} {...$$restProps}>
  <slot />
</div>

<style>
  .collapse-group {
    width: auto;
    padding: 0 var(--gap-half);
  }
  .collapse-group > :global(div + div) {
    border-top: none !important;
  }
</style>
