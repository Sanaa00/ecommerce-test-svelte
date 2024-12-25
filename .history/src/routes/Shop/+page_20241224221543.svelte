<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import { productInCart } from '../../store/store'; // Assumes the store is setup
	import { writable } from 'svelte/store';

	let fetchedProducts = []; // To store fetched product details
	let cart = []; // Variable to hold the cart items

	// Function to fetch product details by ID
	async function fetchSingleProduct(id) {
		try {
			const response = await fetch(`https://dummyjson.com/products/${id}`);
			if (!response.ok) {
				throw new Error(`Failed to fetch product with id ${id}`);
			}
			return await response.json(); // Return the fetched product data
		} catch (error) {
			console.error(`Error fetching product with id ${id}:`, error);
			return null; // Return null if there's an error
		}
	}

	// Fetch product details for all cart items
	async function fetchCartItems() {
		try {
			// Access the current cart items
			cart = $productInCart; // Subscribe to the store value
			console.log('Product in Cart:', cart); // Debugging

			// Ensure `productInCart` is an array
			if (!Array.isArray(cart)) {
				console.error('productInCart is not an array:', cart);
				return;
			}

			// Fetch details for each product in the cart
			const products = await Promise.all(
				cart.map(async (cartItem) => {
					const product = await fetchSingleProduct(cartItem.id);
					if (product) {
						// Add the quantity from the cart to the fetched product details
						return { ...product, quantity: cartItem.quantity };
					}
				})
			);

			// Filter out any null products in case of fetch errors
			fetchedProducts = products.filter(Boolean);

			console.log('Fetched Products:', fetchedProducts); // Debugging
		} catch (error) {
			console.error('Error fetching cart items:', error);
		}
	}

	// Fetch cart items when the component mounts
	onMount(fetchCartItems);
</script>

<!-- Display the products in the cart -->
{#if fetchedProducts.length > 0}
	<div>
		{#each fetchedProducts as item}
			<div class="border-b-2 border-zard py-2">
				<a href={`/Products/${item.id}`}>
					<!-- Ensure the product has images -->
					{#if item?.images && item.images.length > 0}
						<img src={item.images[0]} alt={item.title} class="h-60 w-full object-cover" />
					{:else}
						<p>No Image Available</p>
					{/if}
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
