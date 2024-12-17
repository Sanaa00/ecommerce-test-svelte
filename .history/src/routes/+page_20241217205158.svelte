<script>
	import { onMount } from 'svelte';
	import { fetchCategoryProducts, categoryProducts, categoryProductsLoading } from '../store/store';

	onMount(() => {
		fetchCategoryProducts();
	});
	console.log($categoryProducts);
</script>

{#if $categoryProductsLoading}
	<div>Loading</div>
{:else if $categoryProducts.length !== 0}<div>
		<p>All Category</p>
		<div class="grid grid-cols-3 gap-5">
			{#each $categoryProducts as item}
				<div class="flex h-10 w-full items-center justify-center font-semibold">{item}</div>
			{/each}
		</div>
	</div>
{/if}
