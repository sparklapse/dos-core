<script>
  export let src;
  export let fit;

  $: error = !["cover", "fill", "contain", "scale-down", "none"].includes(fit)
    ? "Fit must be either; cover, fill, contain, scale-down, or none."
    : undefined;
</script>

{#if !error}
  <!-- svelte-ignore a11y-missing-attribute -->
  <img class="component" {src} style:object-fit={fit} />
{:else}
  <div class="component error">
    <p>{error}</p>
  </div>
{/if}

<style>
  .component {
    width: 100%;
    height: 100%;
  }

  .error {
    background-color: darkred;
    color: white;
  }

  .error p {
    margin: 0;
    font-size: 2rem;
  }
</style>
