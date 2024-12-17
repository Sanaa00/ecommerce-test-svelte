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
{if else  $categoryProducts !== []}<div>hello category products</div>
{/if}
