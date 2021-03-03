<script>
  // Not used by props  but to disable warning
  // Used by tabs.svelte, manually added via dom (tab.classList.add("active"))
  export let active = false;
  export let disabled = false;
</script>

<div class="tab" class:active class:disabled role="button"><slot /></div>

<style>
  .tab {
    position: relative;
    display: flex;
    align-items: center;

    padding: var(--gap-quarter) calc(0.65 * var(--gap-quarter));
    margin: 0 calc(0.8 * var(--gap-half));
    outline: 0;
    border-bottom: 2px solid transparent;
    color: var(--accents-6);
    font-size: 1rem;
    white-space: nowrap;
    line-height: 1.25rem;
    user-select: none;
    cursor: pointer;
    pointer-events: auto;

    transition: border-bottom 200ms ease;
  }

  .tab.active {
    color: var(--foreground);
    border-bottom: 2px solid var(--foreground);
  }
  .tab.disabled {
    color: var(--accents-3);
    cursor: not-allowed;
  }

  .tab:first-of-type {
    margin-left: 0;
  }
  .tab :global(svg) {
    max-height: 1em;
    margin-right: 5px;
  }
</style>
