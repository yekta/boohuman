export interface TDBCollection {
	id: string;
	name: string;
	description?: string;
	gpuTimeHours: number;
	totalGenerations: number;
	slug: string;
	aiOption: TDBAiOption;
	owner: TDBPublicUser;
	entries: TDBCollectionEntry[];
}

export interface TDBCollectionEntry {
	id: string;
	name: string;
	description?: string;
	imageUrl: string;
	imageWidth: number;
	imageHeight: number;
	order: number;
}

export interface TDBAiOption {
	name: string;
	url: string;
}

export interface TDBPublicUser {
	name: string;
	url: string;
}
