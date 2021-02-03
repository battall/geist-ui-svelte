<script context="module">
  const getMargin = (num) => {
    return `calc(${num * 15.25}pt + 1px * ${num - 1})`;
  };
</script>

<script>
  export let x = 0;
  export let y = 2;
  export let type = "default";
  export let align = "center"; // left center right
  export let volume = 1;

  let top = y ? getMargin(y / 2) : 0;
  let left = x ? getMargin(x / 2) : 0;
</script>

<div
  role="separator"
  class={`divider ${type}`}
  style={`height: calc(${volume} * 1px); margin: ${top} ${left};`}
  {...$$restProps}
>
  {#if !!$$slots}
    <span class={`text ${align}`}><slot /></span>
  {/if}
</div>

<style lang="scss">
  .divider {
    width: auto;
    max-width: 100%;
    position: relative;
  }
  .divider.default {
    background-color: var(--border);
    .text {
      color: var(--foreground);
    }
  }
  .divider.secondary {
    background-color: var(--secondary);
    .text {
      color: var(--secondary);
    }
  }
  .divider.success {
    background-color: var(--success-light);
    .text {
      color: var(--success-light);
    }
  }
  .divider.warning {
    background-color: var(--warning-light);
    .text {
      color: var(--warning-light);
    }
  }
  .divider.error {
    background-color: var(--error-light);
    .text {
      color: var(--error-light);
    }
  }
  .divider.dark {
    background-color: var(--foreground);
    .text {
      color: var(--foreground);
    }
  }

  .text {
    position: absolute;
    left: 50%;
    top: 50%;
    min-height: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transform: translate(-50%, -50%);
    padding: 0 var(--gap);
    font-size: 1rem;
    font-weight: bold;
    text-transform: capitalize;
    background-color: var(--background);
    z-index: 10;
  }
  .text.left {
    transform: translateY(-50%);
    left: 7%;
  }
  .text.right {
    transform: translateY(-50%);
    left: auto;
    right: 7%;
  }
</style>
