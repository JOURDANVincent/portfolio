<script lang="ts">

    import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

    // PATH
    import { base } from '$app/paths';

    export let title:string;
    export let src:string;
    export let level: number;

    const progress = tweened(0, {
		duration: 1000,
		easing: cubicOut
	});

</script>

<div class="item" on:click={() => progress.set(level)} aria-roledescription="show level">

    <img src={base + src} alt={src}>
    
    <div class="content">

        <div class="text-block">
            <h3>{title}</h3>
            <p>{$progress != 0 ? Math.round($progress) + ' %': ''}</p>
        </div>

        <div class="progress-item">
            <div class="progress-bar" style="width: {$progress}%"></div>
            <div class="progress-track" ></div>
        </div>  
    </div>
    
</div>

<style lang="css">

    .item {
        width: 100%;
        max-width: 375px;
        min-height: 46px;
        backdrop-filter: blur(8px);
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 3px;
        padding-inline: 16px;
        padding-bottom: 2px;
        /* padding-right: 3px; */
        /* padding: 8px 3px 8px 12px; */
        box-shadow:  1px 1px 5px 2px #fff2;
        border: 1px solid #000;
        box-sizing: border-box;
        border-radius: 5px;
    }

    img {
        /* padding-right: 5px; */
    }

    .content {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* padding-left: 6px; */
        /* padding-right: 6px; */
        margin-left: 12px;
        box-sizing: border-box;
    }

    img {
        height: 28px;
        width: 28px;
    }

    .text-block {
        display: inline-flex;
        align-items: flex-end;
        justify-content: space-between;
    }

    .text-block > p {
        font-size: 1.2rem; 
        color: #aaa;
        margin: 0;
    }

    h3 {
        font-size: 1.2rem; 
        color: #fff;
        font-weight: normal; 
        margin: 0;
    }

    .progress-item {
        width: 100%;
        z-index: 0;
    }

    .progress-bar {
        z-index: 1;
        position: relative;
        bottom: 0px;
        height: 3px;
        width: 0;
        background-color: #E14242;
        border-radius: 1px;
        box-sizing: border-box;
    }
    .progress-bar:last-of-type {
        border-right: none;
    }

    .progress-track {
        z-index: 0;
        position: relative;
        bottom: 2px;
        height: 1px;
        width: 100%;
        background-color: #aaa5;
        border-radius: 1px;
        box-sizing: border-box;
    }

    @media (min-width: 768px) {
        
        .item {
            /* padding: 6px 3px 6px 12px; */
        }

        img {
            height: 100%;
            width: 28px;
            /* padding-right: 5px; */
        }

        .content {
            padding: 5px 6px 5px 6px;
        }

        h3 {
            font-size: 1.6rem; 
        }
    }

    @media (min-width: 768px) and (max-width: 991px) {

        .item {
            margin-right: 3px;
            min-width: calc(50% - 3px);
            max-width: calc(50% - 3px);
        }
    }  

    @media (min-width: 992px) {

        .item {
            margin-right: 3px;
            min-width: calc(33.3% - 3px);
            max-width: calc(33.3% - 3px);
        }
    }

</style>