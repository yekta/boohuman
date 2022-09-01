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

<div class="flex-1 flex flex-col items-center justify-center py-20">
	<h1 class="px-5 text-5xl leading-tight font-bold text-center">
		ai generated art.<br />
		no edits of any kind.
	</h1>
	<CollectionsSection {collections} />
</div>
