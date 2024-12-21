<script>
	import { navigate } from 'svelte-navigator';
	import { onMount } from 'svelte';
	import { fetchCategoryProducts, categoryProducts, categoryProductsLoading } from '../store/store';

	onMount(() => {
		fetchCategoryProducts();
	});
	console.log($categoryProducts);
	import { authToken, clearAuthToken } from '../store/authStore'; // Import the store functions
	import { redirect } from '@sveltejs/kit';

	const handleLogout = () => {
		clearAuthToken(); // Clear the token when logging out
		alert('Logged out successfully!');
	};
</script>

{#if $authToken}
	{#if $categoryProductsLoading}
		<div>Loading</div>
	{:else if $categoryProducts.length !== 0}<div>
			<p class="mt-10">All Category</p>
			<div class="my-10 grid grid-cols-3 gap-5">
				{#each $categoryProducts as item}
					<div
						class="flex h-10 w-full items-center justify-center rounded-sm bg-zard font-semibold"
					>
						{item}
					</div>
				{/each}
			</div>
		</div>
	{/if}
{:else}
	<!-- svelte-ignore component_name_lowercase -->
	<!-- svelte-ignore element_invalid_self_closing_tag -->
	<!-- <redirect to="/Login" />
	  -->
	navigate('/login');
{/if}
