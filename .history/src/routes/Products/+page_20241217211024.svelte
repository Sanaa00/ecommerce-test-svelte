<script>
	import { onMount } from 'svelte';
	import { fetchProducts, Products, ProductsLoading } from '../../store/store';

	onMount(() => {
		fetchProducts();
	});
</script>
{#if $ProductsLoading}<div>Loading</div>
<div>
	<p>All Products</p>
</div>
