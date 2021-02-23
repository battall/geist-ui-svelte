<script>
  export let href;
  export let color = false;
  export let icon = false;
  export let underline = false;
  export let block = false;
</script>

<a class="link" class:color class:underline class:block {href} {...$$restProps}>
  <slot />
  {#if icon}
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      class="icon"
    >
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14L21 3" />
    </svg>
  {/if}
</a>

<style>
  .link {
    display: inline-flex;
    align-items: baseline;
    line-height: inherit;
    color: inherit;
    text-decoration: none;
    width: fit-content;
    transition: background-color 200ms ease 0ms, color 200ms ease 0ms;
  }

  .link.color {
    color: var(--link);
  }
  .link.color:hover {
    color: var(--success-light);
  }

  .link.underline:hover,
  .link.underline:active,
  .link.underline:focus {
    text-decoration: underline;
  }

  .link.block {
    padding: calc(var(--gap-quarter) * 0.8) calc(var(--gap-quarter) * 1.7);
    border-radius: var(--radius);
  }
  .link.block:hover {
    background-color: rgba(var(--link-rgb), 0.1);
    color: var(--success-light);
  }

  .link .icon {
    margin: 0 5px;
    display: inline-flex;
    align-self: center;
    color: currentColor;
  }
</style>
