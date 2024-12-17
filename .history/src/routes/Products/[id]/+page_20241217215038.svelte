<script>
	import { onMount } from 'svelte';
	import { singleProducts, singleProductsLoading } from '../../../store/store';
	console.log('single', $singleProducts);

	// onMount(() => {
	// 	singleProducts({ id });
	// });
</script>

{#if singleProductsLoading}{/if}
<div>
	<p>{$singleProducts.title}</p>
</div>
