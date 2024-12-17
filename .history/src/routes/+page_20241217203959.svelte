<script>
	import { onMount } from 'svelte';
	import { fetchCategoryProducts, categoryProducts } from '../store/store';

	onMount(() => {
		fetchCategoryProducts();
	});
</script>
