<script lang="ts">
	import BgHoverEffect from '$components/BgHoverEffect.svelte';
	import type { TDBCollectionShallow } from '$ts/types/db';

	export let collection: TDBCollectionShallow;
	export { classes as class };

	let classes = '';

	const sizes = '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw';

	const imageSizes = [512, 768, 1024, 1536, 2048];
	function srcSetFromUrl(url: string) {
		const { pathname, hostname, protocol } = new URL(url);
		const prefix = '/boohuman/';
		const rest = pathname.slice(prefix.length);
		let srcset = '';
		imageSizes.forEach((size) => {
			srcset += `${protocol}//${hostname}${prefix}tr:w-${size}/${rest} ${size}w, `;
		});
		return srcset;
	}
</script>

<div class="w-full md:w-1/2 lg:w-1/3 p-2.5 {classes}">
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
					<img
						class="w-full h-auto relative"
						src={collection.imageUrl}
						srcset={srcSetFromUrl(collection.imageUrl)}
						{sizes}
						width={collection.imageWidth}
						height={collection.imageHeight}
						alt={collection.name}
					/>
				</div>
			</div>
		</a>
	</div>
</div>
