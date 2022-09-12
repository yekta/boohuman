import type { TDBCollectionEntry } from '$ts/types/db';

export interface TNavbarOption {
	name: string;
	href: string;
}

export interface TCollectionShallow {
	name: string;
	description: string;
	imageUrl: string;
	imageWidth: number;
	imageHeight: number;
	slug: string;
}

export interface TCollection extends TCollectionShallow {
	owner: TUser;
	aiName: string;
	aiUrl: string;
	gpuTimeHours: number;
	totalGenerations: number;
	entries: TCollectionEntry[];
}

export interface TCollectionEntry {
	id: string;
	name: string;
	description: string;
	imageUrl: string;
	imageWidth: number;
	imageHeight: number;
}

export interface TUser {
	name: string;
	url: string;
}

export interface TCollectionEntryObject extends TDBCollectionEntry {
	isLoadedBefore: boolean;
}
