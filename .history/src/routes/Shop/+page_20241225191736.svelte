<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import { productInCart } from '../../store/store';

	let fetchedProducts = []; // To store fetched product details

	// Function to fetch product details by ID
	async function fetchSingleProduct(id) {
		try {
			const response = await fetch(`https://dummyjson.com/products/${id}`);
			if (!response.ok) {
				throw new Error(`Failed to fetch product with id ${id}`);
			}
			return await response.json();
		} catch (error) {
			console.error(`Error fetching product with id ${id}:`, error);
			return null;
		}
	}

	async function fetchCartItems() {
		try {
			const cart = $productInCart;
			console.log('Product in Cart:', cart);

			if (!Array.isArray(cart)) {
				console.error('productInCart is not an array:', cart);
				return;
			}

			const products = await Promise.all(
				cart.map(async (cartItem) => {
					const product = await fetchSingleProduct(cartItem.id);
					if (product) {
						return { ...product, quantity: cartItem.quantity };
					}
				})
			);

			fetchedProducts = products.filter(Boolean);

			console.log('Fetched Products:', fetchedProducts);
		} catch (error) {
			console.error('Error fetching cart items:', error);
		}
	}

	function removeCartItem(id) {
		productInCart.update((cart) => cart.filter((item) => item.id !== id));

		fetchedProducts = fetchedProducts.filter((item) => item.id !== id);
	}

	onMount(fetchCartItems);
</script>

{#if fetchedProducts.length > 0}
	<div class="my-10 grid grid-cols-3 gap-10">
		{#each fetchedProducts as item}
			
				<!-- {#each $searchProduct.products as item} -->
				<div class="w-full border-b-2 border-zard py-2">
					<a href={`/Products/${item.id}`}>
						<img src={item.images[0]} alt={item.title} class="h-60 w-full object-cover" />
					</a>
					<p>{item.title}</p>
					<div class="mt-4 flex items-center justify-between">
						<p>{item.price}$</p>
						<button class="rounded-sm bg-zard px-4 py-2" on:click={() => addCartHandler(item.id)}
							>Add to Cart</button
						>
					</div>
				</div>
				<!-- {/each} -->
			</div>
			<!-- <div class="border-b-2 border-zard py-2">
				<a href={`/Products/${item.id}`}>
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
			</div> -->
		{/each}
	</div>
{:else}
	<p>Your cart is empty!</p>
{/if}
