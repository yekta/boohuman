<script lang="ts">
	import Divider from './Divider.svelte';

	const year = new Date().getFullYear();
</script>

<div class="w-full flex flex-col mt-16">
	<Divider />
	<div class="w-full flex items-center justify-center px-5 py-3">
		<p class="p-3">boohuman @ {year}</p>
	</div>
</div>
