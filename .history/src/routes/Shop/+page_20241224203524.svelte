<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { fetchSingleProducts, productInCart } from '../../store/store';

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
		<li>
			<button on:click={() => fetchItemById(item.id)}>
				Show Item {item.id}
			</button>
		</li>
	{/each}
</ul>
