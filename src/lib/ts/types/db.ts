export interface TDBCollectionShallow {
	id: string;
	name: string;
	description: string;
	imageUrl: string;
	imageWidth: number;
	imageHeight: number;
	previewImageUrl: string;
	previewImageWidth: number;
	previewImageHeight: number;
	gpuTimeHours: number;
	totalGenerations: number;
	slug: string;
	aiOption: TDBAiOption;
	owner: TDBPublicUser;
}

export interface TDBCollection extends TDBCollectionShallow {
	entries: TDBCollectionEntry[];
}

export interface TDBCollectionEntry {
	id: string;
	name: string;
	description: string;
	imageUrl: string;
	imageWidth: number;
	imageHeight: number;
	order: number;
	prompt: string;
}

export interface TDBAiOption {
	name: string;
	url: string;
}

export interface TDBPublicUser {
	name: string;
	url: string;
}
