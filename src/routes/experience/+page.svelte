<script lang="ts">

   /** @type {import('./$types').PageData} */
   export let data: any;

   // COMPONENTS
   import StudyCard from "$lib/components/Study.card.svelte";
   import ExpCard from "$lib/components/Exp.card.svelte";
   import ResumeCard from "$lib/components/Resume.card.svelte";

</script>

<section>

   <h1 class="title_section">
      <strong>Expériences</strong>
   </h1>

   <div class="resume_section">
      <ResumeCard/>
   </div>

   <div class="exp_section">
      <!-- <h1>
         <strong>Expériences</strong>
      </h1> -->
      {#each data.experiences as exp}
         <ExpCard {...exp} />
      {/each}
   </div>
      
   <div class="study_section">
      <!-- <h1>
         <strong>Formations</strong>
      </h1> -->
      {#each data.studies as study}
         <StudyCard {...study} />
      {/each}
   </div>

</section>

<style lang="css">

   section {
      background-image: url(/images/svg/section/experience.svg);
   }

   .title_section {
      grid-area: title;
   }

   .resume_section {
      grid-area: resume;
   }
   .exp_section {
      grid-area: exp;
   }
   .study_section {
      grid-area: study;
   }

   @media (max-width: 767px) {

      .resume_section {
         width: 100%;
         box-sizing: border-box;
      }
   }


   @media (min-width: 768px) {
      section {
         display: grid;
         grid-template-areas: 
         "title title"
         "resume resume"
         "exp study"
         "exp study";
         grid-template-columns: 1fr 1fr;
         column-gap: 8px;
         padding-bottom: 16px;
      }

      .study_section {
         display: flex;
         flex-direction: column;
         justify-content: space-between;
      }
   }

   @media (min-width: 992px) {

      section {
         justify-content: center;
         grid-template-columns: 3fr 2fr;
      }

      .resume_section {
         width: 90%;
      }
   }

</style>