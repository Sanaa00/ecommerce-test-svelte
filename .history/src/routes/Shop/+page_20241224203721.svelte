<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import {
		fetchSingleProducts,
		productInCart,
		// fetchSingleProducts,
		singleProducts
	} from '../../store/store';

	let selectedItem = null;

	onMount(() => {
		if (productInCart.length > 0) {
			fetchSingleProducts(productInCart[0].id);
		}
	});
	console.log('shop', $productInCart);
</script>

{#if selectedItem}
	<div>
		<h2>Item Details</h2>
		<p>ID: {selectedItem.id}</p>
		<p>Quantity: {selectedItem.quantity}</p>
	</div>
{/if}

<ul>
	{#each $productInCart as item}
		<div class="my-10 grid grid-cols-3 gap-10">
			{#each $productInCart as item}
				<div class="border-b-2 border-zard py-2">
					<a href={`/Products/${item.id}`}>
						<img src={item?.images[0]} alt={item.title} class="h-60 w-full object-cover" />
					</a>
					<p>{item.title}</p>
					<div class="mt-4 flex items-center justify-between">
						<p>{item.price}$</p>
						<button class="rounded-sm bg-zard px-4 py-2" on:click={() => addCartHandler(item.id)}
							>Add to Cart</button
						>
					</div>
				</div>
			{/each}
		</div>
	{/each}
</ul>
