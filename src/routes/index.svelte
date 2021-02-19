<script>
  import { onMount } from "svelte";
  import { goto } from "@sapper/app";
  onMount(() => goto("/introduction", { replaceState: true }));
</script>
