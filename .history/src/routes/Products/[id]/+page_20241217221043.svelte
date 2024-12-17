<script>
	// // @ts-nocheck
	// /** @type {import('./$types').PageLoad} */
	// import { onMount } from 'svelte';
	import { fetchSingleProducts, singleProducts, singleProductsLoading } from '../../../store/store';
	// console.log('single', $singleProducts);
	// export const load = async ({ params }) => {
	// 	const { id } = params; // Get dynamic id from the URL
	// 	await fetchSingleProducts({ params: { id } });

	// 	return {}; // Return an empty object because no additional props are needed
	// };
	// // onMount(async () => {
	// // 	singleProducts({ params: { id: productId } });
	// // });
</script>

{#if $singleProductsLoading}
	<div>Loading</div>
{:else if $singleProducts}
	<div class="flex items-center justify-center">
		<div class="mt-10">
			{console.log('single', $singleProducts)}
			<p class="font-semibold">{$singleProducts.title}</p>
			<p class="font-semibold">Brand: {$singleProducts.brand}</p>
			<p class="font-semibold">Category: {$singleProducts.category}</p>
			<p></p>
		</div>
		<img
			src={$singleProducts.images[0]}
			alt={$singleProducts.title}
			class="h-80 w-80 object-contain"
		/>
	</div>
{/if}
