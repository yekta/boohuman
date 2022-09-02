<script lang="ts">
	import LogoHorizontal from '$components/LogoHorizontal.svelte';
	import Divider from './Divider.svelte';

	const year = new Date().getFullYear();
</script>

<div class="w-full flex flex-col mt-16">
	<Divider />
	<div class="w-full flex items-center justify-center px-5 py-8">
		<LogoHorizontal class="w-24" />
		<p class="mx-2">@</p>
		<p>{year}</p>
	</div>
</div>
