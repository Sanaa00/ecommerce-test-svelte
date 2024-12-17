<script>
	import { onMount } from 'svelte';
	import { fetchCategoryProducts } from '../store/store';

	onMount(() => {
		fetchCategoryProducts();
	});
</script>
