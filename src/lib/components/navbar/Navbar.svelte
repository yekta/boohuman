<script lang="ts">
	import BgHoverEffect from '$components/BgHoverEffect.svelte';
	import LogoHorizontal from '$components/LogoHorizontal.svelte';
	import ProgressBar from '$components/navbar/ProgressBar.svelte';
	import { isTouchscreen } from '$ts/stores/isTouchscreen';
	import type { TNavbarOption } from '$ts/types/main';

	const navbarOptions: TNavbarOption[] = [
		{ name: 'collections', href: '/collections' },
		{ name: 'about', href: '/about' }
	];
</script>

<div class="w-full flex flex-col items-center sticky top-0 bg-c-bg z-30">
	<div class="w-full max-w-7xl flex items-center justify-between">
		<a
			data-sveltekit-prefetch
			href="/"
			class="px-5 py-3 self-stretch flex items-center justify-center relative overflow-hidden group"
		>
			<BgHoverEffect />
			<LogoHorizontal
				class="w-40 text-c-on-bg duration-200 {$isTouchscreen ? '' : 'group-hover:text-c-bg'}"
			/>
		</a>
		<div class="self-stretch flex items-center justify-center">
			{#each navbarOptions as option}
				<a
					data-sveltekit-prefetch
					class="px-6 py-6 h-full flex items-center justify-center text-lg relative overflow-hidden group"
					href={option.href}
				>
					<BgHoverEffect />
					<p class="relative font-bold transition {$isTouchscreen ? '' : 'group-hover:text-c-bg'}">
						{option.name}
					</p>
				</a>
			{/each}
		</div>
	</div>
	<ProgressBar />
</div>
