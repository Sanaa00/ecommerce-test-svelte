<script>
	import Navbar from '../component/Navbar.svelte';
	import Footer from '../component/Footer.svelte';
</script>

<div class="px-32 text-gray-700">
	<Navbar />
	<slot />
	<!-- This renders route-specific content -->
	<Footer />
</div>
