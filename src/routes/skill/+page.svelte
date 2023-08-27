<script lang="ts">

   /** @type {import('./$types').PageData} */
   export let data: any;

   // COMPONENTS
   import SkillItem from "$lib/components/Skill.item.svelte";

   let filter: string = 'all';
   $: filterType = (type: string) => {
      window.scrollTo(0,0)
      filter = type
   }

   // DEVICE SIZE
   let x: number;

</script>

<svelte:window bind:innerWidth={x} />

<section class="skill_section">

   <div class="filter-block" style:top={x >= 768 ? '76px' : '56px'}>
      <button class={`filter-button ${filter === 'all' ? "active" : ""}`} on:click={() => filterType('all')}>Tout</button>
      <button class={`filter-button ${filter === 'mobile' ? "active" : ""}`} on:click={() => filterType('mobile')}>Mobile</button>
      <button class={`filter-button ${filter === 'frontend' ? "active" : ""}`} on:click={() => filterType('frontend')}>Front</button>
      <button class={`filter-button ${filter === 'backend' ? "active" : ""}`} on:click={() => filterType('backend')}>Back</button>
      <button class={`filter-button ${filter === 'database' ? "active" : ""}`} on:click={() => filterType('database')}>Database</button>
   </div>
   
   <div style="display: {(filter === 'all' || filter === 'frontend') ? 'block' : 'none'}">
      <h2>
         <strong>Front-end</strong>
      </h2>
      <div class="skill_box">
         {#each data.frontend as front}
            <SkillItem {...front} />
         {/each}   
      </div>
   </div>

   <div style="display: {(filter === 'all' || filter === 'backend') ? 'block' : 'none'}">
      <h2>
         <strong>Back-end</strong>
      </h2>
      <div class="skill_box">
         {#each data.backend as back}
            <SkillItem {...back} />
         {/each}   
      </div>
   </div>

   <div style="display: {(filter === 'all' || filter === 'mobile') ? 'block' : 'none'}">
      <h2>
         <strong>Mobile</strong>
      </h2>
      <div class="skill_box">
         {#each data.mobile as mobile}
            <SkillItem {...mobile} />
         {/each}   
      </div>
   </div>

   <div style="display: {(filter === 'all' || filter === 'database') ? 'block' : 'none'}">   
      <h2>
         <strong>Database</strong>
      </h2>
      <div class="skill_box">
         {#each data.database as database}
            <SkillItem {...database} />
         {/each}   
      </div>
   </div>

</section>

<style lang="css">

   section {
      background-image: url(/images/svg/section/skill.svg);
   }

   .filter-block {
      z-index: 1;
      position: sticky;
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      font-size: 1.8rem;
   }

   .filter-button {
      height: 22px;
      display: inline-flex;
      align-items: center;
      background-color: #fff2;
      backdrop-filter: blur(12px);
      color: #000;
      font-weight: bold;
      padding-inline: 16px;
      margin-right: 2px;
      margin-bottom: 6px;
      box-sizing: border-box;
      border: none;
   }

   .active {
      background-color: #000;
      color: #fff;
      font-weight: bold;
   }

   h2 {
      color: #E14242;
      color: #555;
      font-size: 1.6rem; 
      font-weight: bold;
      width: 100%;
   }

   .skill_box {
      margin-bottom: 16px;
   }

   @media (min-width: 768px) {

      section {
         padding-top: 42px;
         padding-bottom: 16px;
      }

      .skill_box {
         width: 100%;
         display: flex;
         flex-direction: row;
         flex-wrap: wrap;
      }
   }

</style>