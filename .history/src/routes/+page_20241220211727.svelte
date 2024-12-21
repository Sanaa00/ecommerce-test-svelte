<script>
	import { onMount } from 'svelte';
	import { fetchCategoryProducts, categoryProducts, categoryProductsLoading } from '../store/store';

	onMount(() => {
		fetchCategoryProducts();
	});
	console.log($categoryProducts);

	<script>
  import { authToken } from './authStore.js';
  import { onMount } from 'svelte';

  let token;
  authToken.subscribe(value => {
    token = value; // Get token from the store
  });

  onMount(async () => {
    if (token) {
      try {
        const response = await fetch('https://someapi.com/protected-route', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch protected resource');
        }

        const data = await response.json();
        console.log('Protected data:', data);
      } catch (error) {
        console.error('Error:', error.message);
      }
    } else {
      console.log('No token found. Please log in.');
    }
  });
</script>

</script>

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
