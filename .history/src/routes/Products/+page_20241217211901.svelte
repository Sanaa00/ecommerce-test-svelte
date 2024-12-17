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
		<p class="mt-10">All Products</p>
		<div class="grid grid-cols-3 gap-5">
			{#each $Products as item}
				<div>
					{console.log('products', $Products)}
					<img src={item.images[0]} alt={item.title} class="h-60 w-full" />
					{item.title}
				</div>{/each}
		</div>
	</div>
{/if}
