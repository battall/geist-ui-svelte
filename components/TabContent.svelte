<script>
  export let active = false;
</script>

<div class="tab-content" class:active>
  <slot />
</div>

<style>
  .tab-content {
    display: none;
  }
  .tab-content.active {
    display: block;
  }
</style>
