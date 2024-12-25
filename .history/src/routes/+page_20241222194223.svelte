<script>
	import { navigate } from 'svelte-routing';
	import { onMount } from 'svelte';
	import { fetchCategoryProducts, categoryProducts, categoryProductsLoading } from '../store/store';
	// import { authToken } from '../store/store'; // Make sure this is a writable store

	onMount(() => {
		fetchCategoryProducts();

		// Check if authToken exists, and navigate to login if not
		//     if (!$authToken) {
		//       navigate('/Login');
		//     }
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
