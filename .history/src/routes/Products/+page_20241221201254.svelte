<script>
	import { onMount } from 'svelte';
	import {
		fetchProducts,
		fetchSearchProduct,
		Products,
		ProductsLoading,
		searchProduct,
		search
	} from '../../store/store';
	import { compile } from 'svelte/compiler';

	onMount(() => {
		fetchProducts();
		fetchSearchProduct($search);
	});
	console.log('search here', $search);
</script>

{#if $ProductsLoading}<div>Loading</div>
{:else if $search.length !== 0 || $Products.length !== 0}
	<div>
		<div class="div flex items-center justify-between">
			<p class="mt-10">All Products</p>
			<input value="" placeholder="Search" />
		</div>

		<div class="my-10 grid grid-cols-3 gap-10">
			{#each $searchProduct || $Products as item}
				<div class="border-b-2 border-zard py-2">
					{console.log('products', $Products)}
					<a href={`/Products/${item.id}`}
						><img src={item.images[0]} alt={item.title} class="h-60 w-full object-cover" />
					</a>

					<p>{item.title}</p>
					<div class="mt-4 flex items-center justify-between">
						<p>{item.price}$</p>
						<button class="rounded-sm bg-zard px-4 py-2">Add to Cart</button>
					</div>
				</div>{/each}
		</div>
	</div>
{/if}
