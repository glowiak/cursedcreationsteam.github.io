<script>
    import "@material/web/iconbutton/outlined-icon-button";
    import "@material/web/icon/icon";

    let navShown = false;
</script>

<header>
    <nav>
        <a class="brand" href="/">Cursed Creations</a>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <md-outlined-icon-button class="menu" aria-label="Toggle navigation" on:click={(_) => (navShown = !navShown)}>
            <md-icon>menu</md-icon>
        </md-outlined-icon-button>
        <ul class="links" class:shown={navShown}>
            {#each [["/", "Home"], ["/downloads", "Mods"], ["/wiki", "Wiki"]] as [href, display]}
                <li><a {href}>{display}</a></li>
            {/each}
        </ul>
    </nav>
</header>

<style lang="scss">
    $space: 4ch;

    header {
        display: contents;
    }

    nav {
        display: grid;
        align-items: center;
        column-gap: $space;
        padding: #{$space * 0.5};
        background: var(--md-sys-color-surface-container);
        min-height: 5svh;

        grid-template: {
            areas: "brand links .";
            columns: auto auto 1fr;
        }

        * {
            color: var(--md-sys-color-on-surface);
        }

        a {
            text-decoration: none;

            &:hover,
            &:focus,
            &:focus-within,
            &:focus-visible {
                color: var(--md-sys-color-on-surface-variant);
            }
        }

        :global(.menu) {
            display: none;
        }

        @each $area in ("brand", "menu", "links") {
            :global(& .#{$area}) {
                grid-area: unquote($area);
            }
        }
    }

    .brand {
        font-weight: bolder;
        font-size: 1.4rem;
    }

    .menu {
        justify-self: end;
    }

    .links {
        list-style-type: none;
        display: flex;
        padding: 0;
        column-gap: $space;

        li {
            display: contents;
        }
    }

    @media (max-width: 800px) {
        nav {
            grid-template: {
                areas: "brand menu" "links links";
                columns: 1fr 1fr;
                rows: auto min-content;
            }
        }

        .menu {
            display: revert-layer;
        }

        .links {
            flex-direction: column;
            row-gap: #{$space * 0.5};

            &:not(.shown) {
                display: none;
            }
        }
    }
</style>
