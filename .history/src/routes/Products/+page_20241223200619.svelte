<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import {
		fetchProducts,
		fetchSearchProduct,
		Products,
		ProductsLoading,
		searchProduct,
		search,
		getUserCart,
		userCart
	} from '../../store/store';

	onMount(() => {
		fetchProducts();
		getUserCart();
	});
	console.log('user cart ', userCart);
	function handleInput(e) {
		const query = e.target.value;
		search.set(query);
		if (query.trim() === '') {
			fetchProducts();
		} else {
			fetchSearchProduct({ search: query });
		}
	}
</script>

{#if $ProductsLoading}
	<div>Loading...</div>
{:else}
	<div>
		<div class="div mt-10 flex items-center justify-between">
			<p class="font-semibold">All Products</p>
			<input
				class=" w-72 rounded-sm border-2 border-gray-300 py-1 pl-1 outline-none transition duration-300 ease-in-out hover:border-gray-400 hover:duration-300 focus:border-zard focus:duration-300"
				bind:value={$search}
				placeholder="Search"
				on:input={handleInput}
			/>
		</div>

		<div class="my-10 grid grid-cols-3 gap-10">
			{#each $search.trim() === '' ? $Products : $searchProduct.products as item}
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
