<script lang="ts">
	import Footer from '$components/Footer.svelte';
	import Navbar from '$components/navbar/Navbar.svelte';

	import '$css/app.css';
</script>

<main class="w-full bg-c-bg text-c-on-bg min-h-screen flex flex-col overflow-x-hidden">
	<Navbar />
	<slot />
	<Footer />
</main>
