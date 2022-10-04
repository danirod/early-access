import { writable } from 'svelte-local-storage-store';

export const provider = writable('provider', 'twitch');