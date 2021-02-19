<script>
  export let type = "default";
  export let size = "medium";
  export let auto = false;
  export let htmlType = "";
  export let disabled = false;
  export let prefix = "";
  export let suffix = "";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let ripples = [];

  const handleClick = (event) => {
    dispatch("click", event); // Emit "click" event to parent

    return;
    // ANANI SİKEYİM DRIP/RIPPLE. 15.02.21
    // TTEN
    // https://svelte.dev/repl/dbf681d6ba014f1d9cfc919f1bc59481?version=3.19.2
    // https://codepen.io/takaneichinose/pen/KJVLqm
    let el = event.target;
    let pos = el.getBoundingClientRect();

    const limitX = Math.max(event.offsetX, pos.width - event.offsetX);
    const limitY = Math.max(event.offsetY, pos.height - event.offsetY);
    const limit = Math.max(limitX, limitY);
    const scale = limit / 9;

    let ripple = {
      id: Math.random().toString().slice(2),
      x: Math.floor(event.clientX - pos.left),
      y: Math.floor(event.clientY - pos.top),
      scale,
    };
    ripples = [...ripples, ripple];
    setTimeout(() => {
      ripples = ripples.filter((r) => r.id !== ripple.id);
    }, 1250);
  };
</script>

<button
  class={`button ${type} ${size}`}
  class:auto
  type={htmlType}
  {disabled}
  on:click={handleClick}
  {...$$restProps}
>
  <slot />
  {#each ripples as ripple}
    <div
      class="ripple"
      style={`top: ${ripple.x}px; left: ${ripple.y}px; translate(-50%, -50%) scale(${ripple.scale});`}
    />
  {/each}
</button>

<style>
  .button {
    box-sizing: border-box;
    display: inline-block;
    border-radius: var(--radius);
    font-weight: 400;
    user-select: none;
    outline: none;
    text-transform: capitalize;
    justify-content: center;
    text-align: center;
    white-space: nowrap;
    transition: background-color 200ms ease 0ms, box-shadow 200ms ease 0ms,
      border 200ms ease 0ms, color 200ms ease 0ms;
    position: relative;
    overflow: hidden;

    cursor: pointer;
    pointer-events: auto;
  }

  .button:hover,
  .button:focus {
    cursor: pointer;
    pointer-events: auto;
    box-shadow: "none";
    transform: translate3d(0px, 0px, 0px);
  }

  .button.default {
    color: var(--accents-5);
    background-color: var(--background);
    border: 1px solid var(--border);
  }
  .button.default:hover,
  .button.default:focus {
    background-color: var(--background);
    border-color: var(--foreground);
  }
  .button.secondary {
    color: var(--background);
    background-color: var(--foreground);
    border: 1px solid var(--foreground);
  }
  .button.secondary:hover,
  .button.secondary:focus {
    color: var(--foreground);
    background-color: var(--background);
  }
  .button.success {
    color: #fff;
    background-color: var(--success);
    border: 1px solid var(--success);
  }
  .button.success:hover,
  .button.success:focus {
    color: var(--success);
    background-color: var(--background);
  }
  .button.warning {
    color: #fff;
    background-color: var(--warning);
    border: 1px solid var(--warning);
  }
  .button.warning:hover,
  .button.warning:focus {
    background-color: var(--background);
  }
  .button.error {
    color: #fff;
    background-color: var(--error);
    border: 1px solid var(--error);
  }
  .button.error:hover,
  .button.error:focus {
    background-color: var(--background);
  }
  .button.abort {
    color: var(--accents-5);
    background-color: transparent;
    border: 1px solid transparent;
  }

  .button.mini {
    height: 1.5rem;
    line-height: 1.5rem;
    width: initial;
    min-width: 5.25rem;
    padding: 0 1.375rem;
    font-size: 0.75rem;
  }
  .button.small {
    height: 2rem;
    line-height: 2rem;
    width: initial;
    min-width: 9.375rem;
    padding: 0 1.25rem;
    font-size: 0.875rem;
  }
  .button.medium {
    height: 2.5rem;
    line-height: 2.5rem;
    width: initial;
    min-width: 12.5rem;
    padding: 0 1.375rem;
    font-size: 0.875rem;
  }
  .button.large {
    height: 2.75rem;
    line-height: 2.75rem;
    width: initial;
    min-width: 15.625rem;
    padding: 0 1.875rem;
    font-size: 1rem;
  }
  .button.auto {
    min-width: min-content;
    width: auto;
  }
  .button.auto.mini {
    padding: 0 0.625rem;
  }
  .button.auto.small {
    padding: 0 0.9375rem;
  }
  .button.auto.medium {
    padding: 0 1.25rem;
  }
  .button.auto.large {
    padding: 0 1.5625rem;
  }

  .button.shadow {
    box-shadow: var(--expressiveness-shadow-small);
  }
  .button.shadow:hover,
  .button.shadow:focus {
    box-shadow: var(--expressiveness-shadow-medium);
    transform: translate3d(0px, -1px, 0px);
  }

  .button .text {
    position: relative;
    z-index: 1;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: inherit;
  }
  .button .text .left {
    padding-left: 0;
  }
  .button .text .right {
    padding-right: 0;
  }
  :global(.button .text p),
  :global(.button .text pre),
  :global(.button .text div) {
    margin: 0;
  }

  .button .ripple {
    position: absolute;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.25);
    animation: ripple 1.25s ease-out;
  }
  @keyframes ripple {
    to {
      transform: scale(50);
      opacity: 0;
    }
  }
</style>
