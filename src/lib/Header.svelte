<script>
    import { onMount } from "svelte";
    import "@material/web/iconbutton/outlined-icon-button";
    import "@material/web/icon/icon";

    let isMobile = false, media = null;

    onMount(() => {
        media = window.matchMedia("(max-width: 800px)");
        isMobile = !!media?.matches;

        media.onchange = _ => isMobile = !!media?.matches;
    });
</script>

<nav>
    <a class="navbar-brand" href="index.html">Cursed Creations</a>
    {#if isMobile}
    <md-outlined-icon-button
        class="toggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
    >
        <md-icon>menu</md-icon>
    </md-outlined-icon-button>
    {/if}
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        {#each [["/", "Home"], ["/downloads", "Mods"], ["/wiki", "Wiki"]] as [href, display]}
            <li><a {href}>{display}</a></li>
        {/each}
    </ul>
</nav>

<style>
    nav {
        display: flex;
        flex-wrap: inherit;
        align-items: center;
        justify-content: space-between;
        background: var(--md-sys-color-surface-container);
    }

    * {
        color: var(--md-sys-color-on-surface-container);
    }

    a {
        text-decoration: none;
    }
</style>
