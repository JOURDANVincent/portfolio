<script lang="ts">
	
	// STORE & DATA
	import { reactiveMeta } from '$lib/stores/MetaStore';
	import { page } from '$app/stores';
	import { SITE_NAME, META_DATA } from '$lib/data/meta.data'

	// COMPONENTS
	import SingleNavbar from '$lib/components/Single.navbar.svelte';

	// REACTIVE
   	$: {
		let newMeta: any = META_DATA.find( meta => meta.pathname == $page.url.pathname)
		reactiveMeta.update(meta => newMeta)
	}

</script>

<svelte:head>
	<title>{$reactiveMeta.title}</title>
	<link rel="canonical" href={$page.url.href} />

	<!-- <meta type="website"> -->
	<meta property="og:title" content={$reactiveMeta.title} />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:description" content={$reactiveMeta.desc} />
	<meta property="og:image" content={`${$page.url.origin}/${$reactiveMeta.image}`} />
	<meta property="twitter:site" content={SITE_NAME} />
	<meta property="twitter:title" content={$reactiveMeta.title} />
	<meta property="twitter:description" content={$reactiveMeta.desc} />
	<meta property="twitter:image" content={`${$page.url.origin}/${$reactiveMeta.image}`} />

</svelte:head>

<div class="app">

	<main>
		<slot />
	</main>

	<SingleNavbar />

</div>

<style>

	main {
		min-height: 100vh;
		width: 100%;
		display: flex; 
		flex-direction: column; 
		justify-content: center;
		align-items: start;
		text-align: justify;
		box-sizing: border-box;
	}

	@media (max-width: 767px) {

		main {
			padding-inline: 12px;
			padding-top: 24px;
			padding-bottom: 8px;
		}
	}

	@media (min-width: 768px) {

		main {
			padding-inline: 4%;
		}
	}

	@media (min-width: 992px) {

		main {
			padding-inline: 5%;
		}
	}

	@media (min-width: 1180px) {

		main {
			padding-inline: 6%;
		}
	}

</style>
