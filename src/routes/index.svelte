<script context="module" lang="ts">
	export async function load({ fetch }) {
		const body = await fetch('/videos');
		if (body.ok) {
			const props = await body.json();
			return { status: 200, props: { videos: props.videos || [] } };
		} else {
			return { status: 200, props: { videos: [] } };
		}
	}
</script>

<script lang="ts">
	import type { VideoData } from '$lib/video';

	import 'normalize.css/normalize.css';
	import '$lib/app.css';

	import About from '$lib/About.svelte';
	import VideoCarousel from '$lib/VideoCarousel.svelte';
	import VideoPlaceholder from '$lib/VideoPlaceholder.svelte';
	import Footer from '$lib/Footer.svelte';
	import Hero from '$lib/Hero.svelte';
	import Navbar from '$lib/Navbar.svelte';

	export let videos: VideoData[];
</script>

<svelte:head>
	<title>makigas EARLY</title>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@makigas" />
	<meta name="twitter:title" content="makigas EARLY" />
	<meta
		name="twitter:description"
		content="Accede anticipadamente al contenido a medida que lo voy fabricando, antes de que llegue a YouTube"
	/>
	<meta name="twitter:image" content="https://early.makigas.es/card.jpg" />
	<meta property="og:url" content="https://early.makigas.es" />
	<meta property="og:title" content="makigas EARLY" />
	<meta property="og:type" content="website" />
	<meta
		property="og:description"
		content="Accede anticipadamente al contenido a medida que lo voy fabricando, antes de que llegue a YouTube"
	/>
	<meta property="og:site_name" content="makigas" />
	<meta property="og:image" content="https://early.makigas.es/card.jpg" />
</svelte:head>

<Navbar />
<Hero />
{#if videos.length > 0}
	<VideoCarousel {videos} />
{:else}
	<VideoPlaceholder />
{/if}
<About />
<Footer />
