<script lang="ts">
	import Divider from '$components/Divider.svelte';
	import LogoHorizontal from '$components/LogoHorizontal.svelte';
	import type { TNavbarOption } from '$ts/types/main';

	const navbarOptions: TNavbarOption[] = [
		{ name: 'collections', href: '/collections' },
		{ name: 'about', href: '/about' }
	];
</script>

<div class="w-full flex flex-col items-center sticky top-0 bg-c-bg">
	<div class="w-full max-w-7xl flex items-center justify-between px-2">
		<a sveltekit:prefetch href="/" class="p-3 self-stretch flex items-center justify-center">
			<LogoHorizontal />
		</a>
		<div class="self-stretch flex items-center justify-center">
			{#each navbarOptions as option}
				<a
					sveltekit:prefetch
					class="px-6 py-6 h-full flex items-center justify-center text-lg font-medium"
					href={option.href}
				>
					{option.name}
				</a>
			{/each}
		</div>
	</div>
	<Divider />
</div>
