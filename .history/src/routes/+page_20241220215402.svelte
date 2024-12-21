<script>
	import { navigate } from 'svelte-na';
	import { onMount } from 'svelte';
	import { fetchCategoryProducts, categoryProducts, categoryProductsLoading } from '../store/store';
	import { authToken, clearAuthToken } from '../store/store';
	onMount(() => {
		fetchCategoryProducts();
	});
	console.log($categoryProducts);

	const handleLogout = () => {
		clearAuthToken(); // Clear the token when logging out
		alert('Logged out successfully!');
	};
	onMount(() => {
		if (!$authToken) {
			navigate('/login'); // Redirect to login if no authToken
		}
	});
</script>

<!-- {#if $authToken} -->
{#if $categoryProductsLoading}
	<div>Loading</div>
{:else if $categoryProducts.length !== 0}<div>
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
<!-- {:else}
	navigate('/login');
{/if} -->
