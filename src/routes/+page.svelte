<script lang="ts">
	import CollectionsSection from '$components/CollectionsSection.svelte';
	import type { TCollectionShallow } from '$ts/types/main';

	const collections: TCollectionShallow[] = [
		{
			name: 'animals with hoodies',
			description: 'animals with hoodies',
			slug: 'animals-with-hoodies',
			imageUrl:
				'https://cdn.discordapp.com/attachments/430655972956962817/1015016046199054376/Frame_20.jpg'
		},
		{
			name: 'animals with hoodies',
			description: 'animals with hoodies',
			slug: 'animals-with-hoodies',
			imageUrl:
				'https://cdn.discordapp.com/attachments/430655972956962817/1015016046199054376/Frame_20.jpg'
		},
		{
			name: 'animals with hoodies',
			description: 'animals with hoodies',
			slug: 'animals-with-hoodies',
			imageUrl:
				'https://cdn.discordapp.com/attachments/430655972956962817/1015016046199054376/Frame_20.jpg'
		}
	];
</script>

<div class="flex-1 flex flex-col items-center justify-center">
	<h1 class="px-5 text-5xl leading-tight font-bold text-center py-16">
		ai generated curated <span
			style="text-fill-color: transparent; -webkit-text-fill-color: transparent;"
			class="bg-clip-text p-gradient-90">art</span
		>.<br />
		no edits of any kind.
	</h1>
	<CollectionsSection {collections} />
</div>
