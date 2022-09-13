<script lang="ts">
	import CollectionCard from '$components/CollectionCard.svelte';
	import type { TDBCollectionShallow } from '$ts/types/db';

	export let collections: TDBCollectionShallow[];
	export { classes as class };

	let classes = '';
</script>

<div class="w-full max-w-7xl flex flex-col items-center pt-12 pb-16 {classes}">
	<h2 class="text-3xl md:text-4xl leading-tight md:leading-tight font-bold">collections</h2>
	<div
		class="w-full flex flex-row flex-wrap justify-center items-start mt-4 px-2.5 md:px-8 lg:px-12"
	>
		{#each collections as collection}
			<CollectionCard {collection} />
		{/each}
	</div>
</div>
