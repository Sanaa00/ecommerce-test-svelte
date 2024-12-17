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
{:else if $categoryProducts !== []}<div>hello category products</div>
{/if}
