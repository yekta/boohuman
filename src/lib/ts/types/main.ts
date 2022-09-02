export interface TNavbarOption {
	name: string;
	href: string;
}

export interface TCollectionShallow {
	name: string;
	description: string;
	imageUrl: string;
	slug: string;
}

export interface TCollection extends TCollectionShallow {
	owner: TUser;
	aiName: string;
	gpuTimeHours: number;
	totalGenerations: number;
	entries: TCollectionEntry[];
}

export interface TCollectionEntry {
	name: string;
	description: string;
	imageUrl: string;
}

export interface TUser {
	name: string;
}
