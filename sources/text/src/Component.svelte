<script>
  export let color;
  export let fontSize;
  export let text;
</script>

<div class="component">
  <p style={`color: ${color}; font-size: ${fontSize}px;`}>{text}</p>
</div>

<style>
  .component {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  p {
    margin: 0;
  }
</style>
