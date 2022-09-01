<script lang="ts">
	import CollectionsSection from '$components/CollectionsSection.svelte';
	import type { TCollectionShallow } from '$ts/types/main';

	const collections: TCollectionShallow[] = [
		{
			name: 'animals with hoodies',
			description: 'animals with hoodies',
			imageUrl:
				'https://cdn.discordapp.com/attachments/991782974326575194/1014994910350409820/yekta_portrait_of_a_dog_character_with_dark_saturated_blue_fur__8950eee8-62bb-4cb7-8a27-14752e05ec75.png'
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
