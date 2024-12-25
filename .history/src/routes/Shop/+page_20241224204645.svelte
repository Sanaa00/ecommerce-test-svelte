<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import { fetchSingleProducts, productInCart } from '../../store/store';

	// Array to store fetched product data
	let fetchedProducts = [];

	// Fetch data for each ID in the cart
	async function fetchCartItems() {
		fetchedProducts = await Promise.all(
			productInCart.map(async (item) => {
				const product = await fetchSingleProducts(item.id); // Assuming this fetches a single product by ID
				return { ...product, quantity: item.quantity }; // Add quantity if needed
			})
		);
	}

	// Remove an item from the cart
	function removeCartItem(id) {
		// Remove from productInCart
		productInCart = productInCart.filter((item) => item.id !== id);

		// Remove from fetchedProducts
		fetchedProducts = fetchedProducts.filter((item) => item.id !== id);
	}

	// Fetch items on mount
	onMount(fetchCartItems);
</script>

<!-- Display the fetched products -->
{#if fetchedProducts.length > 0}
	<div>
		{#each fetchedProducts as item}
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
