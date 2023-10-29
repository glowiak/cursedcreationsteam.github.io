<script>
    import Header from "$lib/Header.svelte";
</script>

<Header />
<main><slot /></main>

<style>
    :global(body) {
        background: var(--md-sys-color-background);
        color: var(--md-sys-color-on-background);
    }

    :global(a) {
        color: var(--md-sys-color-primary);
    }
</style>
