<script>
	import { onMount } from 'svelte';
	import { fetchProducts, Products, ProductsLoading } from '../../store/store';

	onMount(() => {
		fetchProducts();
	});
</script>

{#if $ProductsLoading}<div>Loading</div>
{:else if $Products.length !== 0}
	<div>
		<p>All Products</p>
	</div>
{/if}
