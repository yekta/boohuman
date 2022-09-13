<script lang="ts">
	import BgHoverEffect from '$components/BgHoverEffect.svelte';
	import ImageP from '$components/ImageP.svelte';
	import { srcFromUrl, srcsetFromUrl } from '$ts/constants/imgproxy';
	import { isTouchscreen } from '$ts/stores/isTouchscreen';
	import type { TDBCollectionShallow } from '$ts/types/db';

	export let collection: TDBCollectionShallow;
	export { classes as class };

	let classes = '';

	const sizes = '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw';
</script>

<a
	data-sveltekit-prefetch
	href="/collections/{collection.slug}"
	class="w-full md:w-1/2 lg:w-1/3 p-2.5 group {classes}"
>
	<div class="w-full relative">
		<div
			class="w-full h-full absolute left-0 top-0 transition transform 
				p-gradient-135 {$isTouchscreen
				? 'group-active:-translate-x-2 group-active:translate-y-2'
				: 'group-hover:-translate-x-2 group-hover:translate-y-2'}"
		/>
		<div class="w-full relative">
			<div class="w-full p-2px relative">
				<div class="w-full bg-c-bg relative">
					<div
						class="w-full h-full absolute left-0 top-0 bg-c-bg transition transform 
						{$isTouchscreen
							? 'group-active:-translate-x-2 group-active:translate-y-2'
							: 'group-hover:-translate-x-2 group-hover:translate-y-2'}"
					/>
					<div class="relative overflow-hidden">
						<BgHoverEffect from="top" />
						<p
							class="w-full text-center px-5 py-5 text-xl font-bold relative transition
								text-c-on-bg {$isTouchscreen ? 'group-active:text-c-bg' : 'group-hover:text-c-bg'}"
						>
							{collection.name.toLowerCase()}
						</p>
					</div>
					<div class="w-full bg-c-bg-secondary">
						<ImageP
							src={collection.imageUrl}
							width={collection.imageWidth}
							height={collection.imageHeight}
							srcPlaceholder={collection.imagePlaceholderBase64}
							{sizes}
							alt={collection.name}
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</a>
