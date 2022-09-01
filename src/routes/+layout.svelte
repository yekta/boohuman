<script lang="ts">
	import Footer from '$components/Footer.svelte';
	import Navbar from '$components/Navbar.svelte';

	import '$css/app.css';
</script>

<main class="bg-c-bg text-c-on-bg min-h-screen flex flex-col">
	<Navbar />
	<slot />
	<Footer />
</main>
