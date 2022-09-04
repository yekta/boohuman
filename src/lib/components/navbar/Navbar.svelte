<script lang="ts">
	import BgHoverEffect from '$components/BgHoverEffect.svelte';
	import Divider from '$components/Divider.svelte';
	import IconMenu from '$components/icons/IconMenu.svelte';
	import LogoHorizontal from '$components/LogoHorizontal.svelte';
	import ProgressBar from '$components/navbar/ProgressBar.svelte';
	import { clickoutside } from '$ts/actions/clickoutside';
	import { expandCollapse } from '$ts/animation/transitions';
	import { isTouchscreen } from '$ts/stores/isTouchscreen';
	import type { TNavbarOption } from '$ts/types/main';

	const navbarOptions: TNavbarOption[] = [
		{ name: 'collections', href: '/collections' },
		{ name: 'about', href: '/about' }
	];

	let isDropdownOpen = false;
	const toggleDropdown = () => {
		isDropdownOpen = !isDropdownOpen;
	};
	const closeDropdown = () => {
		if (isDropdownOpen) {
			isDropdownOpen = false;
		}
	};
</script>

<div class="w-full flex flex-col items-center sticky top-0 bg-c-bg z-30">
	<div class="w-full max-w-7xl flex items-center justify-between">
		<a
			data-sveltekit-prefetch
			href="/"
			class="px-5 py-6 self-stretch flex items-center justify-center relative overflow-hidden group"
		>
			<BgHoverEffect />
			<LogoHorizontal
				class="w-40 text-c-on-bg duration-200 {$isTouchscreen
					? 'group-active:text-c-bg'
					: 'group-hover:text-c-bg'}"
			/>
		</a>
		<div
			use:clickoutside={closeDropdown}
			class="self-stretch md:hidden flex flex-col items-end justify-center"
		>
			<button
				on:click={toggleDropdown}
				class="p-5 relative group overflow-hidden transition {isDropdownOpen
					? 'bg-c-bg-secondary'
					: ''}"
			>
				<BgHoverEffect />
				<IconMenu
					class="w-8 h-8 transition relative transform {isDropdownOpen
						? 'rotate-90'
						: ''} {$isTouchscreen ? 'group-active:text-c-bg' : 'group-hover:text-c-bg'}"
				/>
			</button>
			<div class="relative z-40">
				{#if isDropdownOpen}
					<div
						transition:expandCollapse
						class="w-screen absolute top-0 right-0 bg-c-bg-secondary overflow-hidden flex flex-col justify-end"
					>
						<div class="w-full flex flex-col justify-end">
							{#each navbarOptions as option}
								<a
									on:click={closeDropdown}
									data-sveltekit-prefetch
									class="w-full bg-c-bg-secondary px-6 py-5 flex items-center justify-center text-lg relative overflow-hidden group"
									href={option.href}
								>
									<BgHoverEffect />
									<p
										class="relative font-bold transition text-lg text-c-on-bg {$isTouchscreen
											? 'group-active:text-c-bg'
											: 'group-hover:text-c-bg'}"
									>
										{option.name}
									</p>
								</a>
							{/each}
							<Divider />
						</div>
					</div>
				{/if}
			</div>
		</div>
		<div class="self-stretch hidden md:flex items-center justify-center">
			{#each navbarOptions as option}
				<a
					data-sveltekit-prefetch
					class="px-6 py-5 h-full flex items-center justify-center text-lg relative overflow-hidden group"
					href={option.href}
				>
					<BgHoverEffect />
					<p
						class="relative font-bold transition text-c-on-bg {$isTouchscreen
							? 'group-active:text-c-bg'
							: 'group-hover:text-c-bg'}"
					>
						{option.name}
					</p>
				</a>
			{/each}
		</div>
	</div>
	<ProgressBar />
</div>
