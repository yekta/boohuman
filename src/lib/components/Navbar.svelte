<script lang="ts">
	import Divider from '$components/Divider.svelte';
	import type { TNavbarOption } from '$ts/types/main';

	const navbarOptions: TNavbarOption[] = [
		{ name: 'collections', href: '/collections' },
		{ name: 'about', href: '/about' }
	];
</script>

<div class="w-full flex flex-col">
	<div class="w-full flex items-center justify-between px-5">
		<a href="/" class="p-3 self-stretch flex items-center justify-center">logo</a>
		<div class="self-stretch flex items-center justify-center">
			{#each navbarOptions as option}
				<a class="px-5 py-5 h-full flex items-center justify-center" href={option.href}
					>{option.name}</a
				>
			{/each}
		</div>
	</div>
	<Divider />
</div>
