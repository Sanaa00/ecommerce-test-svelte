<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import {
		fetchProductByCategory,
		fetchSingleProducts,
		singleProducts,
		singleProductsLoading,
		productByCategory
	} from '../../../store/store';
</script>

{#if $singleProductsLoading}
	<div>Loading</div>
{:else if $singleProducts}
	<div class="flex justify-between">
		<div class="mt-10 w-full">
			<p class="font-semibold">{$singleProducts.title}</p>
			<div class="mt-5 flex items-center justify-between">
				<p>Brand: {$singleProducts.brand}</p>
				<p>Category: {$singleProducts.category}</p>
			</div>
			<p class="mt-5">{$singleProducts.description}</p>
		</div>
		<img
			src={$singleProducts.images[0]}
			alt={$singleProducts.title}
			class="h-80 w-80 object-contain"
		/>
	</div>
{/if}
