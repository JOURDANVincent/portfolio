<script lang="ts">

   // FORM LIBS
   import { useForm, required, Hint, HintGroup, minLength, maxLength, email } from "svelte-use-form";
   import { invalidName, invalidMessage, invalidEmail } from '$lib/form/validators'

   // FORM OBJECT
   const formValidator = useForm({
	   lastname: { validators: [invalidName, minLength(2), maxLength(40), required] },
      firstname: { validators: [invalidName, minLength(2), maxLength(40), required] },
      email: { validators: [invalidEmail, email, required]},
      message: { validators: [invalidMessage, minLength(20), maxLength(256), required] },
	});

   // SVG FOOTER ICONS
   import GithubSvg from "$lib/svg/footer/github.svg.svelte";
   import LinkedinSvg from "$lib/svg/footer/linkedin.svg.svelte";
   const footerIconSize = 18;

   // FORM SUBMIT HANDLER
   const onSubmit = (e:any) => {

      const formData = new FormData(e.target);

      const data:any = {};
      for (const field of formData) {
         const [key, value] = field;
         data[key] = value;
      }
      console.log(data)
   }

</script>

<section class="contact-section">

   <form autocomplete="off" method="post" use:formValidator on:submit|preventDefault={onSubmit}>

      <h1>
         <strong>Contact</strong>
      </h1>

      <div class="name_block">

         <div class="input_block lastname">
            <label for="lastname">Nom</label>
            <input 
               id="lastname" 
               name="lastname" 
               type="text" 
               class=""
               
            />
            <HintGroup for="lastname">
               <Hint on="required">*champ obligatoire</Hint>
               <Hint on="minLength" let:value hideWhenRequired>*minimum {value} caractères</Hint>
               <Hint on="maxLength" let:value hideWhenRequired>*maximum {value} caractères</Hint>
               <Hint on="invalidName" let:value hideWhenRequired>{value}</Hint>
            </HintGroup>
         </div>

         <div class="input_block firstname">
            <label for="firstname">Prénom</label>
            <input 
               id="firstname" 
               name="firstname" 
               type="text"  
               class=""
               
            />
            <HintGroup for="firstname">
               <Hint on="required">*champ obligatoire</Hint>
               <Hint on="minLength" let:value hideWhenRequired>*minimum {value} caractères</Hint>
               <Hint on="maxLength" let:value hideWhenRequired>*maximum {value} caractères</Hint>
               <Hint on="invalidName" let:value hideWhenRequired>{value}</Hint>
            </HintGroup>
         </div>

      </div>
      
      <div class="input_block email">
         <label for="email">Email</label>
         <input 
            id="email" 
            name="email" 
            type="email"  
            class=""
            
         />
         <HintGroup for="email">
            <Hint on="required">*champ obligatoire</Hint>
            <!-- <Hint on="email" let:value hideWhenRequired>format email inconnu</Hint> -->
            <Hint on="invalidEmail" let:value hideWhenRequired>{value}</Hint>
         </HintGroup>
      </div>
      
      <div class="input_block message">
         <label for="message">Message</label>
         <textarea 
            id="message" 
            name="message" 
            cols="1" rows="4"  
            class=""
            
         />
         <HintGroup for="message">
            <Hint on="required">*champ obligatoire</Hint>
            <Hint on="minLength" let:value hideWhenRequired>*minimum {value} caractères</Hint>
            <Hint on="maxLength" let:value hideWhenRequired>*maximum {value} caractères</Hint>
            <Hint on="invalidMessage" let:value hideWhenRequired>{value}</Hint>
         </HintGroup>
      </div>

      <div class="submit_block">
         <button 
            id="submit" 
            type="submit" 
            aria-label="envoyer demande de contact"
         > 
            Envoyer
         </button>
         <Hint on="valid">formulaire</Hint>
      </div>
      
   </form>

   <div class="footer">
      <div>
         <a href='https://github.com/JOURDANVincent' target="_blank" rel="noreferrer">
            <GithubSvg size={footerIconSize} color={'#777'} />
         </a>
         <a href='https://www.linkedin.com/in/VincentJourdan.' target="_blank" rel="noreferrer">
            <LinkedinSvg size={footerIconSize} color={'#777'} />
         </a>
      </div>
      <div>Vincent <span class="svelte">JOURDAN</span></div>
   </div>

</section>

<style lang="css">

   section {
      width: 100%;
      max-width: 1400px;
      /* background-image: url(/images/svg//section/contact.svg); */
      background-size: cover;
      background-repeat: no-repeat;
      background-position-y: center;
      background-position-x: center;
      background-attachment: fixed;
      margin-inline: auto;
      box-sizing: border-box;
   }

   form {
      width: 100%;
      max-width: 1100px;
      margin-inline: auto;
      background-color: #fff2;
      backdrop-filter: blur(12px);
      padding: 16px;
      box-sizing: border-box;
   }

   h1 {
      color: #fff;
      font-size: 3rem;
   }

   label {
      color: #000;
      font-size: 1rem;
      font-weight: bold;
   }

   input, textarea {
      min-height: 40px;
      background-repeat: no-repeat;
      background-size: 16px;
      background-position-x: 12px;
      background-position-y: 12px;
      width: 100%;
      box-sizing: border-box;
      background-color: #000c !important;
      backface-visibility: visible;
      backdrop-filter: blur(8px);
      color: #fff;
      font-size: 0.9rem;
      border-radius: 2px;
      border: none;
      outline: none;
      padding: 8px;
      padding-left: 48px;
      margin-bottom: 6px;
   }

   input:autofill,
   input:-webkit-autofill,
   input:-internal-autofill-selected {
      background-color: #000 !important;
      color: #fff !important;
   }

   input[name="lastname"],
   input[name="firstname"] {
      background-image: url('/images/png/form/user.png') !important;
   }
   input[name="email"] {
      background-image: url('/images/png/form/arobase.png') !important;
   }

   textarea {
      resize: none;
      background-position-y: 8px;
      background-image: url('/images/png/form/message.png') !important;
   }

   input:focus, textarea:focus {
      box-shadow: inset 0 0 28px 2px #ffffff30 !important;
      border: 1px solid #ffffff20 !important; 
   }

   button {
      backdrop-filter: blur(20px);
      background-color: #000;
      color: #fff;
      font-size: 1rem;
      padding-inline: 16px;
      padding-top: 4px; padding-bottom: 4px;
      margin-top: 12px;
      border: 1px solid #E14242;
      box-sizing: border-box;
   }

   button:hover {
      color: #fff;
      border: 1px solid #fff;
      box-shadow: inset 0px 0px 20px 5px #fff5;
   }

   button:active {
      border: 2px solid #E14242;
   }

   :global(.touched:invalid) {
      border-bottom: 2px solid #ffa50090 !important;
      box-shadow: inset 2px 2px 20px 4px #ffa50050;
      color: #ffa500 !important;
   }
   :global(.svelte-use-form-hint) {
      color: #ffa50090 !important;
      font-size: 0.7rem;
      margin-bottom: 8px;
   }

   .footer {
      height: 40px;
      width: 100%;
      background-color: #0005;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding-inline: 12px;
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

   @media (min-width: 768px) {

      section {
         padding: 32px;
      }

      form {
         padding: 32px;
      }

      .name_block {
         display: flex;
         flex-direction: row;
         justify-content: space-between;
         box-sizing: border-box;
      }

      .lastname, .firstname {
         width: calc(50% - 3px);
         margin-right: 6px;
      }
      .firstname {
         margin-right: 0px;
      }
   }

   @media (min-width: 992px) {

      input, textarea {
         min-height: 50px;
         background-size: 20px;
         background-position-x: 12px;
         background-position-y: 14px;
         font-size: 16px;
      }

      form, .footer {
         max-width: 800px;
         margin-inline: auto;
      }

      label {
         font-size: 1.2rem;
      }
   }

</style>