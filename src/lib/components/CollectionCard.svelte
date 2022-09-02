<script lang="ts">
	import type { TCollectionShallow } from '$ts/types/main';

	export let collection: TCollectionShallow;
	export { classes as class };

	let classes = '';
</script>

<div class={classes}>
	<div class="relative group">
		<div
			class="w-full h-full absolute left-0 top-0 transition transform 
			group-hover:-translate-x-1.5 group-hover:translate-y-1.5 p-gradient-135"
		/>
		<a sveltekit:prefetch href="/collections/{collection.slug}" class="w-full relative">
			<div class="w-full p-2px relative">
				<div class="w-full bg-c-bg">
					<p class="w-full text-center px-5 py-5 text-lg font-bold">{collection.name}</p>
					<img class="w-full h-auto" src={collection.imageUrl} alt={collection.name} />
				</div>
			</div>
		</a>
	</div>
</div>
