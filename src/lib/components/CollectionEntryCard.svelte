<script lang="ts">
	import { activeEntry } from '$ts/stores/activeEntry';
	import type { TCollectionEntry } from '$ts/types/main';
	import { receive, send } from '$ts/animation/transitions';

	export let entry: TCollectionEntry;

	function setActiveEntry(entry: TCollectionEntry) {
		activeEntry.set(entry);
	}
</script>

<button on:click={() => setActiveEntry(entry)} class="w-full overflow-hidden group">
	<img
		in:receive|local={{ key: entry.id }}
		out:send|local={{ key: entry.id }}
		src={entry.imageUrl}
		alt={entry.name}
		width={entry.imageWidth}
		height={entry.imageHeight}
		class="select-none transition duration-300 origin-bottom group-hover:scale-102"
	/>
</button>
