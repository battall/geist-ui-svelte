<script>
  export let title = "Default";
  export let desc = "";
  // export let code;

  import { Spacer } from "../../";
</script>

<div class="playground">
  <h3>{title}</h3>
  {#if desc}
    <p>{desc}</p>
  {/if}
  <div class="editor">
    <div class="wrapper">
      <slot />
    </div>
  </div>
  <Spacer y={3.5} />
</div>

<style>
  .playground .editor {
    width: 100%;
    border-radius: var(--radius);
    border: 1px solid var(--accents-2);
  }

  .playground .editor .wrapper {
    width: 100%;
    padding: var(--page-margin);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }
</style>
