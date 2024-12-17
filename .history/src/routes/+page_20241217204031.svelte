<script>
	import { onMount } from 'svelte';
	import { fetchCategoryProducts, categoryProducts } from '../store/store';

	onMount(() => {
		fetchCategoryProducts();
	});
	console.log($categoryProducts);
</script>

<div>hello category products</div>
