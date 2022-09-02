<script lang="ts">
	import CollectionCard from '$components/CollectionCard.svelte';
	import type { TCollectionShallow } from '$ts/types/main';

	export let collections: TCollectionShallow[];
	export { classes as class };

	let classes = '';
</script>

<div class="w-full flex flex-col items-center pt-12 pb-8 {classes}">
	<h2 class="text-3xl font-bold">collections</h2>
	<div
		class="w-full flex flex-row flex-wrap justify-center items-start mt-6 px-2.5 md:px-8 lg:px-12"
	>
		{#each collections as collection}
			<CollectionCard {collection} class="md:w-1/2 lg:w-1/3 p-2.5" />
		{/each}
	</div>
</div>
