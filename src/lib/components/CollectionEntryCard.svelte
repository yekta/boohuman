<script lang="ts">
	import { activeEntry } from '$ts/stores/activeEntry';
	import { receive, send } from '$ts/animation/transitions';
	import type { TDBCollectionEntry, TDBCollectionShallow } from '$ts/types/db';
	import { srcFromUrl } from '$ts/constants/imgproxy';
	import type { TCollectionEntryObject } from '$ts/types/main';
	import ImageP from '$components/ImageP.svelte';

	export let entry: TCollectionEntryObject;
	export let collection: TDBCollectionShallow;
	export { classes as class };
	let classes = '';

	function setActiveEntry(entry: TDBCollectionEntry) {
		activeEntry.set(entry);
	}

	const sizes =
		'(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw';

	function loadImage(url: string) {
		const img = new Image();
		img.src = srcFromUrl(url);
	}

	const onClick = () => {
		setActiveEntry(entry);
		window.plausible(`Collections | Entry Clicked`, {
			props: {
				CollectionId: collection.id,
				CollectionName: collection.name,
				EntryId: entry.id,
				EntryName: collection.name + ' | ' + entry.name
			}
		});
	};
</script>

<button
	on:mouseenter={() => loadImage(entry.imageUrl)}
	on:click={onClick}
	class="w-full h-full group {classes}"
>
	<div
		in:receive|local={{ key: entry.id }}
		out:send|local={{ key: entry.id }}
		class="w-full h-full"
	>
		<ImageP
			bind:loaded={entry.isLoadedBefore}
			src={entry.imageUrl}
			srcPlaceholder={entry.imagePlaceholderBase64}
			{sizes}
			width={entry.imageWidth}
			height={entry.imageHeight}
			alt={entry.name}
			hoverClasses="group-hover:scale-102"
		/>
	</div>
</button>
