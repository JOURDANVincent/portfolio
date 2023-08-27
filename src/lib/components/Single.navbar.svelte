<script lang="ts">

   // REACTIVE
   import { page } from '$app/stores';

   // SVG MENU ICONS
   import TagSvg from '$lib/svg/menu/Tag.svg.svelte';
	import AboutSvg from '$lib/svg/menu/About.svg.svelte';
   import ComputerSvg from '$lib/svg/menu/Computer.svg.svelte';
   import ExperienceSvg from '$lib/svg/menu/Experience.svg.svelte';
   import SkillSvg from '$lib/svg/menu/Skill.svg.svelte';
   import ContactSvg from '$lib/svg/menu/Contact.svg.svelte';
   
   // SVG FOOTER ICONS
   import GithubSvg from "$lib/svg/footer/github.svg.svelte";
   import LinkedinSvg from "$lib/svg/footer/linkedin.svg.svelte";

   // PATH
   import { base } from '$app/paths';
   
   // ROUTES & PATH
   const allRoutes = [ 
      { name: 'A Propos de moi', path: `${base}/about`, svg: AboutSvg},
      { name: 'Réalisations Web & Mobile', path: `${base}/project`, svg: ComputerSvg},
      { name: 'Expériences & Formations', path: `${base}/experience`, svg: ExperienceSvg},
      { name: 'Languages & Framworks', path: `${base}/skill`, svg: SkillSvg},
   ]
   $: currentPathName = $page.url.pathname

   // NAVBAR GESTURE
   export let isMenuOpen: boolean;
   export let toggleMenu: any;

   // ICONS SIZE
   let x: number;
   $: linkIconSize = x >= 768 && x < 1200 ? 30 : x >= 1200 ? 38 : 24
   $: footerIconSize = x >= 768 && x < 1200 ? 20 : x >= 1200 ? 22 : 16

   // DYNAMIC STYLE
   $: elementDisplay = isMenuOpen ? 'flex' : 'none';

</script>

<svelte:window bind:innerWidth={x} />

<!-- style:width={isMenuOpen || x <= 768 ? '100%' : '320px'} -->
<nav 
   class="menu" 
   style:height={isMenuOpen ? '100%' : '50px'}
   style:width={'100%'}
   style:background-color={isMenuOpen ? '#0009' : '#0000'}
>

   <div class="header">
      <div class="hero">
         {#if currentPathName != (base || '/' || '')}
            <h1><strong>Vincent JOURDAN</strong></h1>
            <h2><strong>Développeur Applications Web & Mobiles</strong></h2>
         {/if}
      </div>
      <button class="menu-button" aria-label="ouvrir menu" on:click={toggleMenu}>
         <TagSvg size={linkIconSize} color={isMenuOpen ? '#777' : '#e02424'} />
      </button>
   </div>

   <div 
      class="menu-list" 
      style:z-index={isMenuOpen ? '10' : '-1'}
      style:display={elementDisplay}
   >
      {#each allRoutes as route}
         <a 
            href={route.path} 
            class="menu-item"
            class:active={currentPathName === route.path}
            
            on:click={toggleMenu}
         >
            <span class="icon"><svelte:component this={route.svg} size={linkIconSize} color={'#E14242'}/></span>
            <span class="link">{route.name}</span>
         </a>
      {/each}
      <a 
         href='https://www.linkedin.com/in/VincentJourdan' target="_blank" rel="noreferrer"
         class="menu-item contact"
      >
         <span class="icon"><ContactSvg size={linkIconSize} color={'#E14242'}/></span>
         <span class="link">Contact</span>
      </a>
   </div>

   <div class="footer" style:display={elementDisplay}>
      <div>
         <a href='https://github.com/JOURDANVincent' target="_blank" rel="noreferrer">
            <GithubSvg size={footerIconSize} color={'#777'} />
         </a>
         <a href='https://www.linkedin.com/in/VincentJourdan' target="_blank" rel="noreferrer">
            <LinkedinSvg size={footerIconSize} color={'#777'} />
         </a>
      </div>
      <div>développé avec <span class="svelte">Svelte JS</span></div>
   </div>

</nav>

<style>

   .menu-button {
      background-color: transparent !important;
      padding: 0;
      border: none !important;
      outline: none !important;
      transition: 0.5s;
   }

   nav {
      z-index: 10;
      position: fixed; 
      top: 0; left: 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      backdrop-filter: blur(8px);
      box-sizing: border-box;
      border-bottom: 1px solid #4445;
      box-shadow: 0px 1px 10px 1px #0005;
      transition: 0.5s;
   }

   .header {
      display: inline-flex;
      justify-content: space-between;
      padding-top: 10px;
      padding-inline: 16px;
      box-sizing: border-box;
   }

   .hero h1, .hero h2 {
      margin: 0; padding: 0;
   }

   .hero h1 {
      color: #fff;
      font-size: 1.2rem;
   }

   .hero h2 {
      color: #E14242;
      font-size: 0.51rem;
   }

   .menu-list {
      width: 100%;
      max-width: 800px;
      box-sizing: border-box;
      padding-inline: 16px;
      margin-inline: auto;
      flex-direction: column;
      overflow: hidden;
   }

   .menu-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      text-decoration: none;
      padding: 6px;
      padding-top: 10px;
      box-sizing: border-box;
      border-bottom: 1px solid #fff2;
      transition: 0.3s;
   }
   .menu-item:last-of-type {
      border-bottom: 1px solid transparent;
   }
   .menu-item:hover {
      background-color: #fff1;
   }

   /* .contact:hover {
      background-color: transparent !important;
   } */

   .active {
      background-color: #fff2;
      padding-left: 16px;
      border-bottom: 1px solid transparent;
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
      padding-bottom: 8px;
      /* margin-bottom: 8px; */
      box-sizing: border-box;
      transition: 0.3s;
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

      nav {
         min-height: 70px;
      }

      .header {
         padding-inline: 36px;
      }

      .hero h1 {
         font-size: 1.6rem;
      }

      .hero h2 {
         font-size: 0.69rem;
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

      .active {
         padding-left: 36px;
      }

      .footer {
         padding-inline: 36px;
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
