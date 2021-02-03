<script>
  export let type = "";
</script>

<p class={`text ${type}`}>
  <slot />
</p>

<style>
  .text {
  }
  .text.error {
    color: var(--error);
  }
</style>
