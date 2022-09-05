<script lang="ts">
	import Footer from '$components/Footer.svelte';
	import Navbar from '$components/navbar/Navbar.svelte';

	import '$css/app.css';
</script>

<div class="w-full bg-c-bg text-c-on-bg min-h-screen flex flex-col">
	<Navbar />
	<main class="w-full flex-1 flex flex-col overflow-x-hidden">
		<slot />
	</main>
	<Footer />
</div>
