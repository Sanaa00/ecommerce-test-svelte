<script>
	import { onMount } from 'svelte';
	import { singleProducts, singleProductsLoading } from '../../../store/store';
	console.log('single', $singleProducts);

	// onMount(() => {
	// 	singleProducts({ id });
	// });
</script>

{#if $singleProductsLoading}
	<div>Loading</div>
{:else if $singleProducts}
	<div>
		<p>{$singleProducts.title}</p>
	</div>
{/if}
