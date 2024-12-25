<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { productInCart } from '../../store/store';

	// let items = [
	// 	{ id: 1, quantity: 1 },
	// 	{ id: 2, quantity: 1 },
	// 	{ id: 3, quantity: 1 },
	// 	{ id: 8, quantity: 1 }
	// ];

	let selectedItem = null;

	// Function to fetch a single item by id
	async function fetchItemById(id) {
		try {
			// Replace with your actual API endpoint
			const response = await fetch(`https://api.example.com/items/${id}`);
			if (response.ok) {
				selectedItem = await response.json();
			} else {
				console.error('Failed to fetch item');
			}
		} catch (error) {
			console.error('Error fetching item:', error);
		}
	}

	// Example: Fetch the first item on mount
	onMount(() => {
		// @ts-ignore
		if (productInCart.length > 0) {
			// @ts-ignore
			fetchItemById(productInCart[0].id);
		}
	});
</script>

<!-- Display selected item -->
{#if selectedItem}
	<div>
		<h2>Item Details</h2>
		<p>ID: {selectedItem.id}</p>
		<p>Quantity: {selectedItem.quantity}</p>
		<!-- Add other fields from your API response -->
	</div>
{:else}
	<p>Loading item...</p>
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
