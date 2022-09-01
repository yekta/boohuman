<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="w-full flex-1 flex flex-col items-center justify-center px-5">
	<div class="w-full flex flex-col items-center justify-center max-w-lg">
		<h1 class="text-6xl font-bold">{$page.status}</h1>
		<p class="mt-5 text-c-on-bg/60">{$page.error.message}</p>
	</div>
</div>
