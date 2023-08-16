<script lang="ts">
    export let date:string;
    export let title:string;
    export let place:string;
    export let desc:string[];
    export let techno:any;
</script>

<div class="card">
    
    <h2>
        {title}
    </h2>

    <div class="sub-header">
        
        <div class="date">
            {date}
        </div>
        <h3>
            {place}
        </h3>
    </div>

    <div class="desc">
        {#each desc as desc}
            <p>{desc}</p>
        {/each}
    </div>

    <div class="techno-block">
        <p class="techno">
            <span>WEB</span>
            <strong>{techno.web}</strong>
        </p>
        <p class="techno">
            <span>MOBILE</span>
            <strong>{techno.mobile}</strong>
        </p>
        <p class="techno">
            <span>DESKTOP</span>
            <strong>{techno.desktop}</strong>
        </p>
    </div>

</div>

<style lang="css">

    .card {
        display: flex; 
        flex-direction: column; 
        justify-content: center;
        height: 100%;
        background-color: #fff2;
        backdrop-filter: blur(8px);
        color: #fff; 
        text-align: initial;
        padding-inline: 24px;
        margin-bottom: 8px;
        box-sizing: border-box;
        box-shadow: 2px 2px 10px 1px #0008;
    }

    .sub-header {
        display: inline-flex;
        align-items: flex-end;
        padding: 0;
        font-size: 2rem;
    }

    .date {
        font-weight: bold;
        color: #E14242;
        margin-right: 10px;
        padding-right: 10px;
    }

    h2 {
        font-size: 1.8rem; 
    }

    h3 {
        font-size: 2rem; font-weight: normal; 
    }
    
    p {
        color: #aaa;
        font-weight: bold;
        margin-bottom: 4px;
        font-size: 1.3rem;
    }

    .desc p {
        color: #ddd;
        font-weight: initial;
    }

    .techno-block {
        margin-top: 12px;
    }

    .techno {
        width: 100%;
        font-size: 1.1rem;
        font-style: italic;
        display: inline-flex; justify-content: center;
    }

    .techno > span {
        width: 60px;
        font-style: normal; font-weight: bold;
        text-align: right;
        padding-right: 10px;
        color: #eee;
        border-right: 1px solid #444;
    }

    .techno > strong {
        flex: 1;
        color: #000; 
        font-weight: bold;
        padding-left: 10px;
    }

    @media (max-width: 767px) {
        .card {
            padding: 18px;
        }
        h2 {
            font-size: 1.6rem;
            margin-bottom: 8px;
        }
        .sub-header {
            font-size: 1.3rem;
            margin-bottom: 8px;
        }
        h3 {
            font-size: 1.3rem;
        }
        p { font-size:  0.9rem;}
    }

    @media (min-width: 768px) {

        h2 {
            font-size: 1.6rem;
            margin-bottom: 8px;
        }
        .sub-header {
            font-size: 1.3rem;
            margin-bottom: 8px;
        }
        h3 {
            font-size: 1.3rem;
        }
        p { font-size:  1rem;}
    }

    @media (min-width: 992px) {

        h2 {
            font-size: 2.2rem;
            margin-bottom: 8px;
        }
        .sub-header {
            font-size: 1.8rem;
            margin-bottom: 8px;
        }
        h3 {
            font-size: 1.8rem;
        }
    }

    @media (min-width: 1180px) {

        h2 {
            font-size: 2.6rem;
        }
        .sub-header {
            font-size: 1.6rem;
            margin-bottom: 8px;
        }
        h3 {
            font-size: 1.6rem;
        }
    }


</style>