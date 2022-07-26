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
