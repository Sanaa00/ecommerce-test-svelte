<script>
	import { onMount } from 'svelte';
	import { fetchProducts, Products, ProductsLoading } from '../../store/store';

	onMount(() => {
		fetchProducts();
	});
</script>

<div>
	<p>All Products</p>
</div>
