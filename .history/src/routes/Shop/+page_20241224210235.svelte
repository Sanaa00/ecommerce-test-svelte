<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import { fetchSingleProducts, productInCart } from '../../store/store';

	// Array to hold the fetched product data
	let fetchedProducts = [];

	// Fetch data for each product in the cart
	async function fetchCartItems() {
		try {
			// Access the current cart items
			const cart = $productInCart;
			console.log('Product in Cart:', cart); // Debugging

			// Fetch product details for each item in the cart
			fetchedProducts = await Promise.all(
				cart.map(async (item) => {
					const params = { id: item.id }; // Wrap id in an object
					const product = await fetchSingleProducts({ params }); // Pass the object
					console.log('Fetched Product:', product); // Debugging
					return { ...product, quantity: item.quantity }; // Add quantity info
				})
			);
			console.log('Fetched Products:', fetchedProducts); // Debugging
		} catch (error) {
			console.error('Error fetching cart items:', error);
		}
	}

	// Remove an item from the cart
	function removeCartItem(id) {
		$productInCart = $productInCart.filter((item) => item.id !== id); // Update the store
		fetchedProducts = fetchedProducts.filter((item) => item.id !== id); // Update the UI
	}

	// Fetch items when the component mounts
	onMount(fetchCartItems);
	console.log('fetched', fetchedProducts);
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
