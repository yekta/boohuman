<script lang="ts">
	import CollectionsSection from '$components/CollectionsSection.svelte';
	import MetaTag from '$components/MetaTag.svelte';
	import { canonicalUrl } from '$ts/constants/seo';
	import type { TDBCollectionShallow } from '$ts/types/db';

	export let data: {
		collections: TDBCollectionShallow[];
	};
	const { collections } = data;
</script>

<MetaTag
	title="boohuman"
	description="ai generated, curated art. no edits of any kind."
	imageUrl=""
	canonical={canonicalUrl}
/>

<div class="flex-1 flex flex-col items-center justify-center relative">
	<h1 class="px-5 text-5xl leading-tight font-bold text-center pt-20 pb-8">
		ai generated, curated <span
			style="text-fill-color: transparent; -webkit-text-fill-color: transparent;"
			class="bg-clip-text p-gradient-135">art</span
		>.<br />
		no edits of any kind.
	</h1>
	<CollectionsSection {collections} />
</div>
