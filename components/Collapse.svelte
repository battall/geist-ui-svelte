<script>
  export let title = "";
  export let subtitle = "";
  export let size = "";
  export let shadow = false;
  let isOpen = false;

  // For expand use svelte built-in transition
  import { slide } from "svelte/transition";

  // To make accordion work, create index and inform parent collapse-group if exists
  import { getContext } from "svelte";
  let groupContext = getContext("collapse");

  let handleToggle = () => {
    isOpen = !isOpen;

    // means collapse is in a group
    if (groupContext) {
      // If opened by click (is there any other way? nevermind)
      // If opened by click set closeFunction
      // If closed by click remove closeFunction so it doesn't gonna close self when user retried to open, ex;
      // 1) user opens collapse1
      // 2) user close collapse1
      // 3) user tries to open collapse1 but because latest close function is collapse1 so it closes self
      // and collapse1 doesn't open, stuck in a close loop, when clicked collapse2 it works fine and go on
      // 21.02.21: you dumb Battal, you tried to add ids and etc and overengineering solution.
      // please be more genius so do it like this, like a genius.
      isOpen
        ? groupContext.setCurrentCloseFunction(() => (isOpen = false))
        : groupContext.setCurrentCloseFunction(() => {});
    }
  };
</script>

<div class={`collapse ${size}`} class:shadow {...$$restProps}>
  <div class="view" role="button" on:click={handleToggle}>
    <div class="title">
      <h3>{title}</h3>
      <svg
        class:isOpen
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
        shape-rendering="geometricPrecision"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>
    {#if subtitle}
      <div class="subtitle">{subtitle}</div>
    {/if}
  </div>
  {#if isOpen}
    <div class="slider" transition:slide>
      <slot />
    </div>
  {/if}
</div>

<style lang="scss">
  .collapse {
    padding: var(--gap) 0;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);

    .view {
      cursor: pointer;
      outline: none;

      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--foreground);

        h3 {
          margin: 0;
        }
        svg {
          color: currentColor;
          transition: transform 200ms ease;
          &.isOpen {
            transform: rotateZ(-180deg);
          }
        }
      }
      .subtitle {
        color: var(--accents-5);
        margin: 0;

        & > :global(*) {
          margin: 0;
        }
      }
    }

    .slider {
      // Svelte have problems (bug maybe), border is needed...
      border: 1px solid rgba(0, 0, 0, 0);
    }

    &.small {
      padding: var(--gap-half) 0;
      .view {
        .title {
          h3 {
            font-size: 1rem;
            letter-spacing: -0.01125rem;
          }
        }
      }
    }

    &.shadow {
      box-shadow: var(--expressiveness-shadow-small);
      border: none;
      border-radius: var(--radius);
      padding: var(--gap);
    }
  }
</style>
