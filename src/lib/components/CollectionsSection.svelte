<script lang="ts">
	import type { TCollectionShallow } from '$ts/types/main';

	export let collections: TCollectionShallow[];
	export { classes as class };

	let classes = '';
</script>

<div class="w-full flex flex-col items-center py-20 {classes}">
	<h2 class="text-3xl font-bold">collections</h2>
	<div class="w-full flex flex-row justify-center items-start mt-5">
		{#each collections as collection}
			<div class="w-full md:w-1/2">
				<div
					style="background: rgba(var(--c-bg)); 
            background: linear-gradient(135deg, 
            rgba(var(--c-color-1)) 0%, 
            rgba(var(--c-color-2)) 25%, 
            rgba(var(--c-color-3)) 50%, 
            rgba(var(--c-color-4)) 75%,
            rgba(var(--c-color-5)) 100%"
					class="w-full p-2px"
				>
					<div class="w-full bg-c-bg">
						<p class="w-full text-center px-5 py-4 text-lg font-bold">{collection.name}</p>
						<img class="w-full h-auto" src={collection.imageUrl} alt={collection.name} />
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
