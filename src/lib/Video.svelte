<script lang="ts">
	import { provider } from '$lib/stores/provider';

	export let title: string;
	export let thumbnail: string;
	export let youtubeUrl: string;
	export let twitchUrl: string;
</script>

<figure>
	<a target="_blank" href={$provider === 'twitch' ? twitchUrl : youtubeUrl}>
		<div class="thumbnail">
			<img src={thumbnail} alt={title} />
		</div>
		<div class="data">
			<p class="title">{title}</p>
		</div>
	</a>
</figure>

<style>
	figure {
		position: relative;
		height: auto;
		background: black;
	}

	a {
		display: block;
		height: 100%;
		color: inherit;
		width: 100%;
	}

	.thumbnail {
		width: 100%;
		height: auto;
		display: block;
		aspect-ratio: 16 / 9;
	}

	.thumbnail img {
		width: 100%;
	}

	.data {
		display: none;
		position: absolute;
		bottom: 10px;
		left: 10px;
		color: white;
	}

	figure:hover .thumbnail,
	figure:focus-within .thumbnail {
		opacity: 0.5;
	}

	figure:hover .data,
	figure:focus-within .data {
		display: block;
	}

	.title {
		margin: 0;
		padding: 0;
		line-height: 1.5;
		font-weight: bold;
		font-size: 1.2rem;
	}
</style>
