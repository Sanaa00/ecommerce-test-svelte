<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import { fetchProducts, fetchSingleProducts, productInCart } from '../../store/store';
	import { date } from 'yup';

	// let fetchedProducts = [];

	// Fetch data for each item in the cart
	async function fetchCartItems() {
		const cart = $productInCart; // Access the current value of the store
		data = await Promise.all(
			cart.map(async (item) => {
				const product = await fetchSingleProducts(item.id); // Fetch product data
				return { ...product, quantity: item.quantity }; // Add quantity if needed
			})
		);
		fetchProducts.set(date);
	}

	// Remove an item from the cart
	function removeCartItem(id) {
		$productInCart = $productInCart.filter((item) => item.id !== id); // Update the store
		globalThis.$fetchedProducts = globalThis.$fetchedProducts.filter((item) => item.id !== id); // Update the UI
	}

	onMount(fetchCartItems);
	console.log('length', fetchedProducts.length);
</script>

<!-- Display the fetched products -->
{#if globalThis.$fetchedProducts.length !== 0}
	<div>
		{#each globalThis.$fetchedProducts as item}
			<div class="border-b-2 border-zard py-2">
				<a href={`/Products/${item.id}`}>
					<img src={item?.images?.[0]} alt={item.title} class="h-60 w-full object-cover" />
				</a>
				<p>{item.title}</p>
				<p>{item.price}$</p>
				<div class="mt-4 flex items-center justify-between">
					<p>Quantity: {item.quantity}</p>
					<button
						class="rounded-sm bg-red-500 px-4 py-2 text-white"
						on:click={() => removeCartItem(item.id)}>Remove</button
					>
				</div>
			</div>
		{/each}
	</div>
{:else}
	<p>Your cart is empty!</p>
{/if}
