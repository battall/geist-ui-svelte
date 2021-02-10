<script>
  export let type = "";
</script>

<span class={`text ${type}`} {...$$restProps}>
  <slot />
</span>

<style>
  .text {
  }
  .text.error {
    color: var(--error);
  }
</style>
