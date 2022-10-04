<script>
	import { writable } from 'svelte-local-storage-store';
	export const provider = writable('provider', 'twitch');
</script>

<p>Enlaces para la plataforma</p>
<div>
	<label>
		YouTube
		<input
			type="radio"
			name="provider"
			id="youtube"
			checked={$provider === 'youtube'}
			on:change={() => provider.set('youtube')}
		/>
		<svg viewBox="0 0 32 24" class="red">
			<rect x="0" y="0" width="48" height="24" rx="10" ry="10" fill="transparent" stroke="gray" />
			<circle cx="16" cy="12" r="8" class="marker" />
		</svg>
	</label>
	<label>
		<input
			type="radio"
			name="provider"
			id="twitch"
			checked={$provider === 'twitch'}
			on:change={() => provider.set('twitch')}
		/>
		<svg viewBox="0 0 32 24" class="purple right">
			<rect x="-16" y="0" width="48" height="24" rx="10" ry="10" fill="transparent" stroke="gray" />
			<circle cx="16" cy="12" r="8" class="marker" />
		</svg>
		Twitch
	</label>
</div>

<style>
	p {
		font-size: 0.7rem;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		margin-bottom: 0.2rem;
	}
	div {
		display: inline-flex;
	}
	input {
		display: none;
	}
	svg {
		width: 32px;
		height: 24px;
		border: none;
		vertical-align: middle;
	}
	.marker {
		transform: translateX(100%);
		transition: transform 0.25s ease-in-out, fill 0.25s ease-in-out;
	}
	svg.right .marker {
		transform: translateX(-100%);
	}
	svg.purple .marker {
		fill: #c4302b;
	}
	svg.red .marker {
		fill: #6441a5;
	}
	input:checked + svg.purple .marker {
		fill: #6441a5;
	}
	input:checked + svg.red .marker {
		fill: #c4302b;
	}
	input:checked + svg .marker {
		transform: translateX(0);
	}
</style>
