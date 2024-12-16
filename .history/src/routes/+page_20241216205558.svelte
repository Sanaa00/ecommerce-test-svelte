<script>
	import Footer from '../component/Footer.svelte';
	import Navbar from '../component/Navbar.svelte';
</script>

<div class="px-32">
	<Navbar />
	<slot />
	<Footer />
</div>
