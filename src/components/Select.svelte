<script>
  export let defaultValue = "";
  export let prefix = "";

  import { IconChevronUpDown } from "./icons/";
</script>

<div {...$$restProps} class="container">
  {#if !!prefix}
    <div class="prefix">
      <svelte:component this={prefix} size={16} />
    </div>
  {/if}
  <select {defaultValue} on:blur>
    <slot />
  </select>
  <div class="suffix">
    <IconChevronUpDown size={16} />
  </div>
</div>

<style lang="scss">
  .container {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--background);

    select {
      width: 100%;
      height: 32px;
      padding: 0 calc(1.5 * var(--gap));
      background-color: var(--background);
      border: 1px solid var(--accents-2);

      outline: none;
      appearance: none;
      text-rendering: auto;
    }

    .prefix,
    .suffix {
      display: inline-flex;
      position: absolute;
      pointer-events: none;
    }

    .prefix {
      left: var(--gap-half);
    }
    .suffix {
      right: var(--gap-half);
    }
  }
</style>
