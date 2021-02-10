<script>
  export let type = "default";
  export let size = "medium";
  export let htmlType = "text";
  export let placeholder = "";
  export let disabled = false;
  export let readOnly = false;
  export let width = 0;
  export let prefix = "";
  export let suffix = "";

  export let value = "";
  let handleInput = (e) => {
    value = e.target.value;
  };

  let hover = false;
</script>

<div
  class={`input-container ${type} ${size}`}
  class:hover
  class:disabled
  style={`${width ? `width: ${width};` : ""}`}
>
  <input
    type={htmlType}
    {placeholder}
    {disabled}
    {readOnly}
    on:input={handleInput}
    on:focus={() => (hover = true)}
    on:blur={() => (hover = false)}
    {...$$restProps}
  />
</div>

<style lang="scss">
  .input-container {
    box-sizing: border-box;
    -webkit-box-align: center;

    display: inline-flex;
    vertical-align: middle;
    align-items: center;
    user-select: none;
    border-radius: var(--radius);
    transition: border 0.2s ease 0s, color 0.2s ease 0s;
  }
  .input-container.disabled {
    background-color: var(--accents-1);
    border-color: var(--accents-2);
    cursor: not-allowed;
    input {
      cursor: not-allowed;
    }
  }

  // TYPES
  .input-container.default {
    border: 1px solid var(--border);
    &.hover {
      border-color: var(--accents-5);
    }

    input {
      color: var(--foreground);
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:active,
    input:-webkit-autofill:focus {
      box-shadow: 0 0 0 30px var(--background) inset !important;
      -webkit-box-shadow: 0 0 0 30px var(--background) inset !important;
      -webkit-text-fill-color: var(--foreground) !important;
    }
  }

  // SIZES
  .input-container.mini {
    height: calc(1.313 * var(--gap));
    font-size: 0.75rem;
  }
  .input-container.small {
    height: calc(1.5 * var(--gap));
    font-size: 0.75rem;
  }
  .input-container.medium {
    height: calc(1.687 * var(--gap));
    font-size: 0.875rem;
  }
  .input-container.large {
    height: calc(1.875 * var(--gap));
    font-size: 1rem;
  }

  input {
    margin: 4px 10px;
    padding: 0;
    box-shadow: none;
    background-color: transparent;
    border: none;
    outline: none;
    border-radius: 0;
    width: 100%;
    min-width: 0;
    -webkit-appearance: none;
  }
</style>
