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
</script>

{#if selectedItem}
	<div>
		<h2>Item Details</h2>
		<p>ID: {selectedItem.id}</p>
		<p>Quantity: {selectedItem.quantity}</p>
		<!-- Add other fields from your API response -->
	</div>
{/if}

<ul>
	{#each productInCart as item}
		<li>
			<button on:click={() => fetchItemById(item.id)}>
				Show Item {item.id}
			</button>
		</li>
	{/each}
</ul>

<!-- <script>
	// @ts-nocheck

	import { productInCart } from '../../store/store';
</script>

{#if $productInCart.length === 0}
	<div>Loading...</div>
{:else}
	<div>
		<div class="my-10 grid grid-cols-3 gap-10">
			{#each $productInCart as item}
				<div class="border-b-2 border-zard py-2">
					<p>{item.id}</p>
				</div>
			{/each}
		</div>
	</div>
{/if} -->
