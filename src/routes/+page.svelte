<script lang="ts">

    export let isMenuOpen: boolean;

    const firstName = "Vincent"
    const lastName = "JOURDAN"
    const subTitle = "Développeur Applications Web & Mobiles";
 
</script>

<section>

    <div class="hero" >
        <h1><strong>{firstName}</strong><strong class="lastName">{` ${lastName}`}</strong></h1>
        <h2>{subTitle}</h2>
        <a aria-label="me contacter" href='https://www.linkedin.com/in/VincentJourdan' target="_blank" rel="noreferrer">Contactez-moi</a>
    </div>

</section>

<style>

    section {
        background-image: url(/images/svg/section/home.svg);
        background-size: contain;
        background-size: 100%;
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-position-y: 40%;
        box-sizing: border-box;
        width: 100%;
    }

    .hero {
        width: 90%;
        margin-inline: auto;
        box-sizing: border-box;
    }

    h1 {
        color: #eee;
        font-size: 5.5rem;
        line-height: 5.6rem;
        margin: 0;
    }

    h2 {
        color: #E14242;
        font-size: 2.35rem;
        line-height: 2.4rem;
        margin: 0;
        margin-bottom: 20px;
    }

    a {
        text-decoration: none;
        backdrop-filter: blur(20px);
        background-color: transparent;
        color: #fff;
        font-size: 1.2rem;
        padding-inline: 16px;
        padding-top: 4px; padding-bottom: 4px;
        border: 1px solid #E14242;
    }

    a:hover {
        color: #fff;
        border: 1px solid #fff;
        box-shadow: inset 5px 5px 20px 5px #E1424250;
    }

    @media (max-width: 767px ) { 
        .hero {
            width: 100%;
            padding-left: 4%;
        }
        h1 {
            font-size: 40px;
            line-height: 42px;
            margin: 0;
        }

        h2 {
            font-size: 17px;
            line-height: 20px;
            /* margin: 0; */
        }
        a {
            font-size: 0.8rem;
        }
    }

    @media (min-width: 768px) {

        section {
            padding: 0px 0px 10px 12px;   
            max-width: 900px;
            margin-inline: auto;
        }
    }

    @media (min-width: 1200px) {

        section {  
            max-width: 1400px;
        }
    }


</style>
