<script lang="ts">

   // REACTIVE
   import { page } from '$app/stores';

   // SVG FOOTER ICONS
   import GithubSvg from "../svg/footer/github.svg.svelte";
   import LinkedinSvg from "../svg/footer/linkedin.svg.svelte";
   import EmailSvg from "../svg/footer/Email.svg.svelte";

   // SVG MENU ICONS
   import TagSvg from '../svg/menu/Tag.svg.svelte';
	import AboutSvg from '../svg/menu/About.svg.svelte';
   import ComputerSvg from '../svg/menu/Computer.svg.svelte';
   import ProgressSvg from '../svg/menu/Progress.svg.svelte'
   import ExperienceSvg from '../svg/menu/Experience.svg.svelte';
   import SkillSvg from '../svg/menu/Skill.svg.svelte';
   import ContactSvg from '../svg/menu/Contact.svg.svelte';

   // PATH
   import { base } from '$app/paths';
   
   // ROUTES
   export const allRoutes = [ 
      { name: 'Accueil', link: `${base}/`, }
      { name: 'A Propos de moi', link: `${base}/about`, },
      { name: 'Réalisations Web & Mobile', link: `${base}/project`, },
      { name: 'Expériences & Formations', link: `${base}/experience`, },
      { name: 'Languages & Frameworks', link: `${base}/skill`, },
      { name: 'Contact', link: `${base}/contact`, },
   ]

   // NAVBAR
   let isMenuOpen: boolean = false;
   $: toggleMenu = () => isMenuOpen = !isMenuOpen

   // ICONS
   let x: number;
   $: linkIconSize = x >= 768 && x < 1200 ? 30 : x >= 1200 ? 38 : 24
   $: footerIconSize = x >= 768 && x < 1200 ? 20 : x >= 1200 ? 22 : 16

</script>

<svelte:window bind:innerWidth={x} />

<button class="menu-button" aria-label="ouvrir menu" on:click={toggleMenu}>
   <TagSvg size={linkIconSize} color={isMenuOpen ? '#777' : '#e02424'} />
</button>

<nav 
   class="menu" 
   style="width: {x}; height: {isMenuOpen ? '100%' : '0'}; z-index: {isMenuOpen ? '10' : '-1'}; background-color: {isMenuOpen ? '#000b' : '#0000'}; backdrop-filter: {isMenuOpen ? 'blur(8px)' : 'blur(0px'}"
   >

   <div class="hero" style="opacity: {isMenuOpen ? '1' : '0'}">
      <h1>
         <strong>Vincent JOURDAN</strong>
      </h1>
      <h2>
         <strong>Développeur Applications Web & Mobiles</strong>
      </h2>
   </div>

   <div class="menu-list" style="opacity: {isMenuOpen ? '1' : '0'}">
      {#each allRoutes as single}
         <a 
            href={single.link} 
            style="opacity: {isMenuOpen ? '1' : '0'}; "
            class={$page.url.pathname == single.link ? "menu-item active" : "menu-item"} 
            on:click={toggleMenu}
         >
            <span class="icon">
               {#if single.link === '/'} <TagSvg size={linkIconSize} color={'#E14242'}/>
               {:else if single.link === '/about'} <AboutSvg size={linkIconSize} color={'#E14242'}/>
               {:else if single.link === '/project'} <ComputerSvg size={linkIconSize} color={'#E14242'}/>
               {:else if single.link === '/skill'} <SkillSvg size={linkIconSize} color={'#E14242'}/>
               {:else if single.link === '/experience'} <ExperienceSvg size={linkIconSize} color={'#E14242'}/>
               {:else if single.link === '/contact'} <ContactSvg size={linkIconSize} color={'#E14242'}/>
               {/if}
            </span>
            <span class="link">{single.name}</span>
         </a>
      {/each}
   </div>

   <div class="footer" style="opacity: {isMenuOpen ? '1' : '0'}">
      <div>
         <a href='https://github.com/JOURDANVincent' target="_blank" rel="noreferrer">
            <GithubSvg size={footerIconSize} color={'#777'} />
         </a>
         <a href='https://www.linkedin.com/in/VincentJourdan.' target="_blank" rel="noreferrer">
            <LinkedinSvg size={footerIconSize} color={'#777'} />
         </a>
         <!-- <a href='/contact' rel="noreferrer" on:click={toggleMenu}>
            <EmailSvg size={footerIconSize} color={'#777'} />
         </a> -->
      </div>
      <div>développé avec <span class="svelte">Svelte JS</span></div>
   </div>

</nav>

<style>

   .menu-button {
      position: fixed;
      z-index: 998;
      right: 12px;
      top: 24px;
      background-color: transparent !important;
      border: none !important;
      outline: none !important;
      transition: 0.5s;
   }

   nav {
      z-index: 999;
      box-sizing: border-box;
      width: 100%;
      position: fixed; 
      top: 0; left: 0; right: 0; bottom: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: 0.5s;
   }

   .hero {
      padding-left: 16px;
      margin-top: 12px;
      box-sizing: border-box;
      transition: 0.5s;
   }

   .hero h1, .hero h2 {
      margin: 0; padding: 0;
   }

   .hero h1 {
      font-size: 1.66rem;
   }

   .hero h2 {
      font-size: 0.7rem;
      font-weight: normal;
   }

   .menu-list {
      width: 100%;
      max-width: 800px;
      box-sizing: border-box;
      padding-inline: 16px;
      margin-inline: auto;
      display: flex;
      flex-direction: column;
   }

   .menu-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      text-decoration: none;
      padding: 6px;
      padding-top: 10px;
      /* margin-bottom: 3px; */
      box-sizing: border-box;
      border-bottom: 1px solid #fff2;
      transition: 0.5s;
   }
   .menu-item:last-of-type {
      border-bottom: 1px solid transparent;
   }
   .menu-item:hover {
      background-color: #fff2;
   }

   .active {
      background-color: #fff2;
      /* border-bottom: 1px solid #fff; */
      /* border-bottom: 1px solid #fff; */
      padding-left: 16px;
      /* box-shadow: inset 2px 2px 5px 2px #0008; */
      border-bottom: 1px solid transparent;
      transition: 0.5s;
   }

   .icon {
      padding-right: 16px;
   }

   .link {
      color: #eee;
      font-size: 1.4rem;
      padding-bottom: 5px;
   }

   .footer {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding-inline: 16px;
      margin-bottom: 8px;
      box-sizing: border-box;
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

   @media (min-width: 768px ) { 

      .menu-button {
         right: 36px;
         top: 36px;
      }

      .hero {
         padding-left: 50px;
         margin-top: 36px;
      }

      .hero h1 {
         font-size: 2.8rem;
      }

      .hero h2 {
         font-size: 1.2rem;
      }

      .menu-item {
         padding-left: 24px;
      }

      .link {
         font-size: 2rem;
      }

      .icon {
         padding-right: 24px;
      }

      .footer {
         padding-inline: 50px;
         margin-bottom: 24px;
      }

      .footer > div {
         font-size: 1.2rem;
      }

   }

   @media (min-width: 1200px ) { 

      .link {
         font-size: 2.2rem;
      }
   }

</style>
