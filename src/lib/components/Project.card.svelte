<script lang="ts">


</script>


<div class="card" style="display: {display(project.platform)}"> 

   {#if project.platform === 'mobile'}
      <div class="img_box_mobile">
         {#each project.path_desktop as path }
         <div class="img_mobile">
            <img src={path} alt={project.alt}>
         </div>
         {/each}
      </div>
   {:else}
      <div class="img_box_desktop">
         <div class="img_backdrop" style="background-image: url({project.path_desktop})"></div>
         <div class="img_desktop">
            <img src={project.path_desktop} alt={project.alt}>
         </div>
      </div>
   {/if}

   <div class="text_zone">
      <img class="device-card" src="./src/lib/assets/svg/card/desktop.svg" alt="icon device desktop" />
      <h2>{project.title}</h2>
      <h3>{project.subject}</h3>
      <p>{project.use}</p>
   </div>

</div>

<style>
   bile, .img_box_desktop {
         padding: 18px;
         padding-top: 24px;
      }

      .img_mobile {
         width: calc(100% / 3 - 20px);
      }

      .img_desktop {
         width: 100%;
         padding: 0px 6px 0px 6px;
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

      .card {
         width: calc(50% - 8px);
         margin-right: 6px;
         border: none;
      }

      .img_box_mobile, .img_box_desktop {
         /* max-height: 225px; */
         border: 1px solid #fff2;
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
         max-width: 1300px;
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

      .img_box_mobile, .img_box_desktop {
         /* max-height: 300px; */
         padding: 36px;
      }
   }
</style>