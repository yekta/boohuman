<script lang="ts">
	import Divider from '$components/Divider.svelte';
	import LogoHorizontal from '$components/LogoHorizontal.svelte';
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
			<div
				class="w-[200%] h-full absolute left-0 top-0 transition duration-200 transform translate-y-full
					group-hover:translate-y-0"
			>
				<div
					class="w-full h-full p-gradient-135 transition duration-600 delay-150 transform group-hover:-translate-x-1/2"
				/>
			</div>
			<LogoHorizontal class="w-40 group-hover:text-c-bg text-c-on-bg duration-200" />
		</a>
		<div class="self-stretch flex items-center justify-center">
			{#each navbarOptions as option}
				<a
					data-sveltekit-prefetch
					class="px-6 py-6 h-full flex items-center justify-center text-lg relative overflow-hidden group"
					href={option.href}
				>
					<div
						class="w-[200%] h-full absolute left-0 top-0 transition duration-200 transform translate-y-full
							group-hover:translate-y-0"
					>
						<div
							class="w-full h-full p-gradient-135 transition duration-600 delay-150 transform group-hover:-translate-x-1/2"
						/>
					</div>
					<p class="relative font-medium group-hover:font-bold group-hover:text-c-bg transition">
						{option.name}
					</p>
				</a>
			{/each}
		</div>
	</div>
	<Divider />
</div>
