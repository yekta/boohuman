<script lang="ts">
	import type { TCollectionShallow } from '$ts/types/main';

	export let collection: TCollectionShallow;
	export { classes as class };

	let classes = '';
</script>

<div class={classes}>
	<a href="/collection/{collection.slug}" class="w-full relative group">
		<div
			class="w-full h-full absolute left-0 top-0 transition transform 
        group-hover:-translate-x-1.5 group-hover:translate-y-1.5"
			style="background: rgba(var(--c-bg)); 
        background: linear-gradient(135deg, 
        rgba(var(--c-color-1)) 0%, 
        rgba(var(--c-color-2)) 25%, 
        rgba(var(--c-color-3)) 50%, 
        rgba(var(--c-color-4)) 75%,
        rgba(var(--c-color-5)) 100%"
		/>
		<div class="w-full p-2px relative">
			<div class="w-full bg-c-bg">
				<p class="w-full text-center px-5 py-5 text-lg font-bold">{collection.name}</p>
				<img class="w-full h-auto" src={collection.imageUrl} alt={collection.name} />
			</div>
		</div>
	</a>
</div>
