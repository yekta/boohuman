export interface TNavbarOption {
	name: string;
	href: string;
}

export interface TCollectionShallow {
	name: string;
	description: string;
	imageUrl: string;
}

export interface TCollection extends TCollectionShallow {
	entries: TCollectionEntry[];
}

export interface TCollectionEntry {
	name: string;
	description: string;
	imageUrl: string;
}
