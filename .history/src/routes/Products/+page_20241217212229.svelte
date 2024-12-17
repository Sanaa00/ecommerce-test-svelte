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
		<div class="mt-10 grid grid-cols-3 gap-10">
			{#each $Products as item}
				<div class="border-b-2 border-zard">
					{console.log('products', $Products)}
					<img src={item.images[0]} alt={item.title} class="h-60 w-full object-cover" />

					<p>{item.title}</p>
					<div class="mt-4 flex items-center justify-between">
						<p>{item.price}</p>
						<button class="rounded-sm bg-zard px-4 py-2">Add to Cart</button>
					</div>
				</div>{/each}
		</div>
	</div>
{/if}
