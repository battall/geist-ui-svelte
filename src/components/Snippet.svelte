<script context="module">
  export const textArrayToString = (text) => {
    return text.reduce((pre, current) => {
      if (!current) return pre;
      return pre ? `${pre}\n${current}` : current;
    }, "");
  };
</script>

<script>
  export let text = "";
  export let symbol = "$";
  export let showCopyIcon = false;
  $: isMultiLine = text && Array.isArray(text);
  export let style = "";

  // import SnippetIcon from "icons/SnippetIcon.svelte";
</script>

<div class="snippet" style="--symbol: '{symbol} '; {style}">
  {#if isMultiLine}
    {#each text as t, index}
      <pre>{t}</pre>
    {/each}
  {:else}
    <pre>text</pre>
  {/if}
  {#if showCopyIcon}
    <div class="copy" on:click>
      <SnippetIcon />
    </div>
  {/if}
</div>

<style lang="scss">
  .snippet {
    position: relative;
    max-width: 100%;
    padding: var(--gap-half);
    padding-right: calc(2 * var(--gap));
    color: var(--foreground);
    background-color: var(--background);
    border: 1px solid var(--accents-2);
    border-radius: var(--radius);
  }

  pre {
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
    color: var(--foreground);
    font-size: 0.8125rem;

    &::before {
      content: var(--symbol);
      user-select: none;
    }
  }

  .copy {
    position: absolute;
    right: 0;
    top: -2px;
    transform: translateY(50%);
    background-color: var(--background);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: calc(2 * var(--gap));
    color: inherit;
    transition: opacity 0.2s ease 0s;
    border-radius: var(--radius);
    cursor: pointer;
    user-select: none;

    &:hover {
      opacity: 0.7;
    }
  }
</style>
