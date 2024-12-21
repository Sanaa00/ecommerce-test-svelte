<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import {
		fetchProducts,
		fetchSearchProduct,
		Products,
		ProductsLoading,
		searchProduct,
		search
	} from '../../store/store';

	onMount(() => {
		// Fetch all products on mount
		fetchProducts();
	});

	// Handle search input
	function handleInput(e) {
		const query = e.target.value;
		search.set(query); // Update the search store

		if (query.trim() === '') {
			// If search field is empty, show all products
			fetchProducts();
		} else {
			// Fetch products matching the search query
			fetchSearchProduct({ search: query });
		}
	}
</script>

{#if $ProductsLoading}
	<div>Loading...</div>
{:else}
	<div>
		<div class="div flex items-center justify-between">
			<p class="mt-10">All Products</p>
			<input
				bind:value={$search}
				placeholder="Search"
				on:input={handleInput}
			/>
		</div>

		<div class="my-10 grid grid-cols-3 gap-10">
			{#each ($search.trim() === '' ? $Products : $searchProduct.products) as item}
				<div class="border-b-2 border-zard py-2">
					<a href={`/Products/${item.id}`}>
						<img src={item.images[0]} alt={item.title} class="h-60 w-full object-cover" />
					</a>
					<p>{item.title}</p>
					<div class="mt-4 flex items-center justify-between">
						<p>{item.price}$</p>
						<button class="rounded-sm bg-zard px-4 py-2">Add to Cart</button>
					</div>
				</div>
			{/each}
		</div>
	</div>
{/if}
