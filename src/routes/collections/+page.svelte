<script lang="ts">
	import { page } from '$app/stores';

	import CollectionCard from '$components/CollectionCard.svelte';
	import MetaTag from '$components/MetaTag.svelte';
	import { canonicalUrl } from '$ts/constants/seo';
	import type { TDBCollectionShallow } from '$ts/types/db';
	export let data: {
		collections: TDBCollectionShallow[];
	};
	const { collections } = data;
</script>

<MetaTag
	title="collections | boohuman"
	description="ai generated, human curated art collections."
	imageUrl="{canonicalUrl}/previews{$page.url.pathname}.jpg"
	canonical="{canonicalUrl}/collections"
/>

<div class="flex-1 flex flex-col items-center justify-center px-5 pt-12 pb-20">
	<h1 class="text-4xl md:text-5xl leading-tight md:leading-tight font-bold text-center">
		collections
	</h1>
	<div
		class="w-full flex flex-row flex-wrap justify-center items-start mt-5 px-2.5 md:px-8 lg:px-12"
	>
		{#each collections as collection}
			<CollectionCard {collection} class="md:w-1/2 lg:w-1/3 p-2.5" />
		{/each}
	</div>
</div>
