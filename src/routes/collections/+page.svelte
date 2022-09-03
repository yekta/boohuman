<script lang="ts">
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
	description=""
	imageUrl=""
	canonical="{canonicalUrl}/collections"
/>

<div class="flex-1 flex flex-col items-center justify-center px-5">
	<h1 class="text-5xl font-bold text-center leading-tight">collections</h1>
	<div
		class="w-full flex flex-row flex-wrap justify-center items-start mt-6 px-2.5 md:px-8 lg:px-12"
	>
		{#each collections as collection}
			<CollectionCard {collection} class="md:w-1/2 lg:w-1/3 p-2.5" />
		{/each}
	</div>
</div>
