<script lang="ts">

    // PROPS
    export let state:string;
    export let message: string;
    export let overview: string;
    export let time:number;

    //
    let isOpen:boolean = true;

    //
    import { onMount } from 'svelte';

    onMount(() => {
        setTimeout(()=> isOpen = false, time)
	});

    

</script>

{#if isOpen }
    <div class={"toast " + state}>
        <h1>{state}</h1>
        <p>{message}</p>
    </div>
{/if}

<style lang="css">

    .toast {
        position: absolute;
        bottom: 70px;
        left: 5%;
        right: 5%;
        background-color: #fff1;
        backdrop-filter: blur(10px);
        border-radius: 5px;
        padding: 12px 24px 12px 24px;
    }

    .success {
        border: 1px solid green;
        box-shadow: inset 2px 2px 80px 2px green;
    }

    .error {
        border: 1px solid orange;
        box-shadow: inset 2px 2px 80px 2px orange;
    }

    h1 {
        font-size: 1.6rem; 
        margin-bottom: 8px;
    }
    
    p {
        color: #ccc;
    }

</style>