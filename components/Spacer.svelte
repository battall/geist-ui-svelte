<script context="module">
  const getMargin = (num) => {
    return `calc(${num * 15.25}pt + 1px * ${num - 1})`;
  };
</script>

<script>
  export let x = 1;
  export let y = 1;
  export let inline = false;

  let left = getMargin(x);
  let top = getMargin(y);
</script>

<span
  style={`display: ${inline ? "inline-block" : "block"}; 
  margin-left: ${left}; margin-top: ${top};`}
  {...$$restProps}
/>

<style>
  span {
    height: 1px;
    width: 1px;
  }
</style>
