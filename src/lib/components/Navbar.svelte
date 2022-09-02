<script lang="ts">
	import Divider from '$components/Divider.svelte';
	import type { TNavbarOption } from '$ts/types/main';

	const navbarOptions: TNavbarOption[] = [
		{ name: 'collections', href: '/collections' },
		{ name: 'about', href: '/about' }
	];
</script>

<div class="w-full flex flex-col items-center sticky top-0 bg-c-bg">
	<div class="w-full max-w-7xl flex items-center justify-between px-5">
		<a href="/" class="p-3 self-stretch flex items-center justify-center">
			<div class="w-5 h-5 p-gradient-135 mr-3 p-2px">
				<div class="bg-c-bg w-full h-full" />
			</div>
			<p class="pb-0.5">pssthuman</p>
		</a>
		<div class="self-stretch flex items-center justify-center">
			{#each navbarOptions as option}
				<a class="px-6 py-6 h-full flex items-center justify-center" href={option.href}>
					{option.name}
				</a>
			{/each}
		</div>
	</div>
	<Divider />
</div>
