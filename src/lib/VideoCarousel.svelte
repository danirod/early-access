<script lang="ts">
	import type { VideoData } from './video';
	import Video from '$lib/Video.svelte';
	import ProviderToggle from '$lib/ProviderToggle.svelte';

	let expanded = false;

	export let videos: VideoData[];

	function toggleMore() {
		expanded = true;
	}
</script>

<div class="toggle">
	<ProviderToggle />
</div>

<div class="grid" class:expanded>
	<button hidden={expanded} class="more" on:click={toggleMore}>Ver más</button>
	{#each videos as video}
		<Video {...video} />
	{/each}
</div>

<style>
	.toggle {
		text-align: center;
		margin-top: 1rem;
	}

	.grid {
		max-height: 400px;
		overflow: hidden;
		position: relative;
		max-width: 1600px;
		margin: 0 auto;
	}

	.expanded {
		max-height: initial;
		overflow: visible;
	}

	.grid:after {
		content: '';
		width: 100%;
		height: 40px;
		position: absolute;
		bottom: 0;
		background: linear-gradient(var(--background-faded-color), var(--background-color));
	}

	.grid.expanded:after {
		display: none;
	}

	.more {
		position: absolute;
		bottom: 20px;
		z-index: 1;
		left: 50%;
		background-color: var(--accent-color);
		border: none;
		border-radius: 5px;
		font-size: 1.1rem;
		padding: 10px 25px;
		color: var(--background-color);
		transform: translateX(-50%);
	}

	@media screen and (min-width: 800px) {
		.grid {
			display: grid;
			max-height: initial;
			overflow: visible;
			grid-template-columns: repeat(auto-fit, 400px);
			justify-content: center;
		}
		.grid:after {
			display: none;
		}
		.more {
			display: none;
		}
	}
</style>
