import type { TCollectionEntry } from '$ts/types/main';
import { writable } from 'svelte/store';

export const activeEntry = writable<TCollectionEntry | undefined>(undefined);
