<script lang="ts">

   /** @type {import('./$types').PageData} */
   export let data: any;
   
   let filter: string = 'all'
   $: filterType = (type: string) => {
      window.scrollTo(0,0)
      filter = type
   }

   $: display = (platform: string) => {
      return (platform === 'mobile' && filter === 'desktop') ? 'none' : (platform === 'desktop' && filter === 'mobile') ? 'none' : 'block'
   }

   // DEVICE SIZE
   let x: number;

</script>

<svelte:window bind:innerWidth={x} />

<section>

   <div class="filter">
      <button class={`filter-button ${filter === 'all' ? "active" : ""}`} on:click={() => filterType('all')}>Toutes</button>
      <button class={`filter-button ${filter === 'mobile' ? "active" : ""}`} on:click={() => filterType('mobile')}>Mobile</button>
      <button class={`filter-button ${filter === 'desktop' ? "active" : ""}`} on:click={() => filterType('desktop')}>Desktop</button>
   </div>

   <div class="section_list">

      <div class="section_card">
         {#each data.projects as project, i}
   
            {#if !(i%2)}
               <div class="card" style="display: {display(project.platform)}"> 

                  <!-- <div class="platform-card">
                     <img class="platform-icon" src="/images/svg/card/{project.platform}.svg" alt="icon device {project.platform}" />
                     <h4>{project.platform}</h4>
                  </div> -->
   
                  {#if project.platform === 'mobile'}
                     <div class="img_box">
                        {#each project.path_desktop as path }
                        <div class="img_mobile">
                           <img src={path} alt={project.alt}>
                        </div>
                        {/each}
                     </div>
                  {:else}
                     <div class="img_box">
                        <!-- <div class="img_backdrop" style="background-image: url({project.path_desktop})"></div> -->
                        <div class="img_desktop">
                           <img src={project.path_desktop} alt={project.alt}>
                        </div>
                     </div>
                  {/if}
               
                  <div class="text_zone">

                     <div class="platform-card">
                        <img class="platform-icon" src="/images/svg/card/{project.platform}.svg" alt="icon device desktop" />
                        <!-- <h4>{project.language}</h4> -->
                     </div>
                     
                     <h2>{project.title}</h2>
                     <h3>{project.subject}</h3>
                     <p>{project.use}</p>

                     <div class="inner-box">
                        {#each project.inner as inner }
                           <p>{inner}</p>
                        {/each}
                     </div>

                  </div>
   
               </div>
            {/if}
   
         {/each}   
      </div>
   
      <div class="section_card">
         {#each data.projects as project, i}
   
         {#if i%2}
            <div class="card" style="display: {display(project.platform)}"> 

               <!-- <div class="platform-card">
                  <img class="platform-icon" src="/images/svg/card/{project.platform}.svg" alt="icon device desktop" />
                  <h4>{project.language}</h4>
               </div> -->
   
               {#if project.platform === 'mobile'}
                  <div class="img_box">
                     {#each project.path_desktop as path }
                        <div class="img_mobile">
                           <img src={path} alt={project.alt}>
                        </div>
                     {/each}
                  </div>
               {:else}
                  <div class="img_box">
                     <!-- <div class="img_backdrop" style="background-image: url({project.path_desktop})"></div> -->
                     <div class="img_desktop">
                        <img src={project.path_desktop} alt={project.alt}>
                     </div>
                  </div>
               {/if}
            
               <div class="text_zone">

                  <div class="platform-card">
                     <img class="platform-icon" src="/images/svg/card/{project.platform}.svg" alt="icon device desktop" />
                     <!-- <h4>{project.language}</h4> -->
                  </div>
                     
                  <h2>{project.title}</h2>
                  <h3>{project.subject}</h3>
                  <p>{project.use}</p>

                  <div class="inner-box">
                     {#each project.inner as inner }
                        <p>{inner}</p>
                     {/each}
                  </div>

               </div>
   
            </div>
         {/if}
   
         {/each}   
      </div>

   </div>
   
</section>

<style lang="css">
   
   section {
      width: 100%;
      background-image: url(/images/svg/section/project.svg);
      background-size: contain;
      background-attachment: fixed;
      background-repeat: no-repeat;
      background-position-x: 50%;
      background-position-y: 40%;
      box-sizing: border-box;
   }

   .filter {
      z-index: 1;
      position: sticky;
      top: 24px;
      height: 22px;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 18px;
      font-size: 1.8rem;
   }

   .filter-button {
      height: 100%;
      display: inline-flex;
      align-items: center;
      background-color: #fff2;
      backdrop-filter: blur(12px);
      color: #000;
      font-weight: bold;
      padding-inline: 16px;
      margin-right: 2px;
      box-sizing: border-box;
      border: none;
   }

   .active {
      background-color: #000;
      color: #fff;
      font-weight: bold;
   }

   .section_list {
      padding-top: 12px;
   }

   .card {
      backdrop-filter: blur(8px);
      margin-bottom: 12px;
      box-sizing: border-box;
   }

   .platform-card {
      position: absolute;
      top: 5px; right: 5px;
      height: 30px;
      background-color: #000;
      padding-inline: 10px;
      display: inline-flex;
      align-items: center;
      border-radius: 5px;
      border: 1px solid #fff;
   }

   .platform-icon {
      height: 16px;
      width: 16px;
      border: none;
   }

   .img_box {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      box-sizing: border-box;
   }

   .img_mobile {
      width: calc(100% / 3 - 3px);
   }

   img {
      width: 100%;
      object-fit: contain;
      border: 1px solid #fff1;
   }

   .text_zone {
      background-color: #fff3;
      backdrop-filter: blur(8px);
      padding: 8px 18px 8px 18px;
   }

   h2 { 
      font-size: 2rem;
   }

   h3 { 
      font-size: 1rem;
      color: #999;
      /* overflow: hidden;
      text-overflow: ellipsis; */
   }

   p {
      color: #000;
      font-size: 1.1rem;
      font-weight: bold;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
   }

   .inner-box {
      background-color: #0005;
      margin-top: 10px;
      margin-bottom: 8px;
      padding: 10px;
   }

   .inner-box > p {
      font-size: 1.0rem;
      font-weight: initial;
      color: #fff;
   }

   @media (min-width: 768px) {

      section {
         max-width: 800px;
         margin-inline: auto;
         padding-top: 42px;
         padding-bottom: 70px;
         box-sizing: border-box;
      }

      .section_list {
         padding-top: 24px;
      }

      .card {
         margin-bottom: 18px;
      }

      .img_mobile {
         width: calc(100% / 3 - 6px);
      }

      h2 { 
         font-size: 4rem;
      }

      h3 {
         font-size: 1.2rem;
      }

      p {
         font-size: 1.6rem;
      }

   }

   @media (min-width: 992px) {

      .section_list {
         display: flex;
         flex-direction: row;
      }

      .section_card {
         width: 50%;
         display: flex;
         flex-direction: column;
      }

      .card {
         margin-right: 12px;
         border: none;
      }

      .text_zone {
         border: 1px solid #fff2;
         text-align: initial;
      }

      h2 { 
         font-size: 2.6rem;
      }

      h3 {
         font-size: 1.1rem;
      }

      p {
         font-size: 1.5rem;
      }
   }

   @media (min-width: 1180px) {

      section {
         max-width: 1200px;
      }

      h2 { 
         font-size: 3.4rem;
      }

      h3 {
         font-size: 1.2rem;
      }

      p {
         font-size: 1.6rem;
      }
   }
   
</style>