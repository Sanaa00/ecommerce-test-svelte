<script>
	import { onMount } from 'svelte';
	import { fetchProducts, Products, ProductsLoading } from '../../store/store';

	onMount(() => {
		fetchProducts();
	});
</script>

{#if $ProductsLoading}<div>Loading</div>
{:else if $Products.length !== 0}
	<div>
		<p class="mt-10">All Products</p>
		{#each $Products as item}
          <div>{console.log($Product)}
               <img
          </div>{/each}
	</div>
{/if}
