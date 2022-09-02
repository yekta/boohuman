<script lang="ts">
	import BgHoverEffect from '$components/BgHoverEffect.svelte';
	import type { TCollectionShallow } from '$ts/types/main';

	export let collection: TCollectionShallow;
	export { classes as class };

	let classes = '';
</script>

<div class={classes}>
	<div class="relative group">
		<div
			class="w-full h-full absolute left-0 top-0 transition transform 
			group-hover:-translate-x-2 group-hover:translate-y-2 p-gradient-135"
		/>
		<a data-sveltekit-prefetch href="/collections/{collection.slug}" class="w-full relative">
			<div class="w-full p-2px relative">
				<div class="w-full bg-c-bg relative">
					<div
						class="w-full h-full absolute left-0 top-0 bg-c-bg transition transform 
						group-hover:-translate-x-2 group-hover:translate-y-2"
					/>
					<div class="relative overflow-hidden">
						<BgHoverEffect from="top" />
						<p
							class="w-full text-center px-5 py-5 text-xl font-bold relative transition
								text-c-on-bg group-hover:text-c-bg"
						>
							{collection.name}
						</p>
					</div>
					<img class="w-full h-auto relative" src={collection.imageUrl} alt={collection.name} />
				</div>
			</div>
		</a>
	</div>
</div>
