<script>
  export let hideDivider = "";
  export let value = 0; // a.k.a current value
  // "_value" is current value too, but updated after class set
  // need this for removing old children's class
  let _value = 0;
  let tabs;

  const handleClick = (event) => {
    // Find tab's index, set new value
    let el = event.target;
    value = Array.prototype.indexOf.call(el.parentElement.children, el);
  };

  $: if (tabs) {
    // Here runs when "value" changed
    // Remove active from old Tab, TabContent
    // Add active to new Tab, TabContent
    tabs.children[0].children[_value].classList.remove("active");
    tabs.children[1].children[_value].classList.remove("active");
    tabs.children[0].children[value].classList.add("active");
    tabs.children[1].children[value].classList.add("active");
    _value = value;
  }
</script>

<div bind:this={tabs} class="tabs" {...$$restProps}>
  <header class:hide-divider={hideDivider} on:click={handleClick}>
    <slot />
  </header>
  {#if $$slots.content}
    <slot name="content" />
  {/if}
</div>

<style>
  .tabs {
    width: initial;
  }

  .tabs > header {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    border-bottom: 1px solid var(--border);
    overflow: scroll;
    scrollbar-width: none;
    pointer-events: none;
  }
  .tabs > header.hide-divider {
    border-bottom: none;
  }
  .tabs > header::-webkit-scrollbar {
    display: none;
  }
</style>
