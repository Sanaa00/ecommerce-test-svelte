<script>
	import { navigate } from 'svelte-routing';
	import { onMount } from 'svelte';
	import { fetchCategoryProducts, categoryProducts, categoryProductsLoading } from '../store/store';
	import { authToken } from '../store/store';

	onMount(() => {
		// Ensure this code only runs in the browser
		if (typeof window !== 'undefined' && window.localStorage) {
			const token = localStorage.getItem('authToken');

			// Set the token in the store if available
			if (token) {
				authToken.set(token); // Assuming authToken is a writable store
			} else {
				// If token is not found, navigate to login
				navigate('/Login');
			}
		}

		fetchCategoryProducts();
	});
</script>

{#if $categoryProductsLoading}
	<div>Loading</div>
{:else if $categoryProducts.length !== 0}
	<div>
		<p class="mt-10">All Category</p>
		<div class="my-10 grid grid-cols-3 gap-5">
			{#each $categoryProducts as item}
				<div class="flex h-10 w-full items-center justify-center rounded-sm bg-zard font-semibold">
					{item}
				</div>
			{/each}
		</div>
	</div>
{/if}
