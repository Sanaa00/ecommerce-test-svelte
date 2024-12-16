<script>
	import Footer from '../component/Footer.svelte';
	import Navbar from '../component/Navbar.svelte';
</script>

<div class="px-32 text-gray-700">
	<Navbar />
	<slot />
	<Footer />
</div>
