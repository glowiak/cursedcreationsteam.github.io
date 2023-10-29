<script>
    import Header from "$lib/Header.svelte";
</script>

<Header />
<slot />

<style>
    :global(body) {
        background: var(--md-sys-color-background);
        color: var(--md-sys-color-on-background);
    }
</style>