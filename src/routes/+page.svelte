<script lang="ts">
	import CollectionsSection from '$components/CollectionsSection.svelte';
	import { collections } from '$ts/constants/collections';
</script>

<div class="flex-1 flex flex-col items-center justify-center relative">
	<h1 class="px-5 text-5xl leading-tight font-bold text-center pt-20 pb-8">
		ai generated curated <span
			style="text-fill-color: transparent; -webkit-text-fill-color: transparent;"
			class="bg-clip-text p-gradient-90">art</span
		>.<br />
		no edits of any kind.
	</h1>
	<CollectionsSection {collections} />
</div>
