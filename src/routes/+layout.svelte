<script>
    import Header from "$lib/Header.svelte";
</script>

<Header />
<main><slot /></main>

<style>
    main {
        padding: 2ch;
    }

    :global(p) {
        max-inline-size: 75ch;
    }

    :global(code) {
        background: var(--md-sys-color-surface-container-highest);
        color: var(--md-sys-color-on-surface);
        padding: 0 0.25ch;
    }

    :global(body) {
        background: var(--md-sys-color-background);
        color: var(--md-sys-color-on-background);
    }

    :global(a) {
        color: var(--md-sys-color-primary);
    }
</style>
