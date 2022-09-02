import type { TDBCollectionEntry } from '$ts/types/db';
import { writable } from 'svelte/store';

export const activeEntry = writable<TDBCollectionEntry | undefined>(undefined);
