<script>
  export let value = "";
  export let prefix = "";
  let option;

  import { onMount, getContext } from "svelte";

  // Change prefix... so much work but worth it i think
  let { prefix: selectPrefix, setPrefix } = getContext("select");

  // Don't handle <option /> prefix if <select /> already have prefix
  if (!selectPrefix) {
    onMount(() => {
      let select = option.parentElement;
      let onChange = () => {
        select.value === value && setPrefix(prefix);
      };
      onChange(); // run when first mounted, which prefix is undefined
      select.addEventListener("change", onChange);
    });
  }
</script>

<option {value} bind:this={option} {...$$restProps}><slot /></option>
