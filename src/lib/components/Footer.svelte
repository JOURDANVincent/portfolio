<script lang="ts">

    // PATH
    import { base } from '$app/paths';
 
    // SVG FOOTER ICONS
    import GithubSvg from "$lib/assets/svg/footer/github.svg.svelte";
    import LinkedinSvg from "$lib/assets/svg/footer/linkedin.svg.svelte";
    import EmailSvg from "$lib/assets/svg/footer/Email.svg.svelte";

    export let footerIconSize = 18;

</script>

<footer class="footer">
    <div>
        <a href='https://github.com/JOURDANVincent' target="_blank" rel="noreferrer">
            <GithubSvg size={footerIconSize} color={'#777'} />
        </a>
        <a href="{base}/" target="_blank" rel="noreferrer">
            <LinkedinSvg size={footerIconSize} color={'#777'} />
        </a>
        <a href="{base}/contact" rel="noreferrer">
            <EmailSvg size={footerIconSize} color={'#777'} />
        </a>
    </div>
    <!-- <div>Vincent <span class="svelte">JOURDAN</span></div> -->
    <div>développé avec <span class="svelte">Svelte JS</span></div>
</footer>

<style>

    .footer {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        /* padding-inline: 16px; */
        padding-top: 12px;
        margin-top: 36px;
        margin-bottom: 8px;
        box-sizing: border-box;
        border-top: 2px solid #fff2;
    }

    .footer a {
        height: 100%;
        width: 40px;
        padding-right: 12px;
    }

    .footer > div {
        font-weight: bold;
        font-size: 1rem;
        color: #444;
    }

    .svelte {
        font-weight: bold;
        color: #E14242;
    }

</style>