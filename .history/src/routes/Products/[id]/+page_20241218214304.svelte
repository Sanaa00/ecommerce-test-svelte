<script>
	import { onMount } from 'svelte';
	// // @ts-nocheck
	// /** @type {import('./$types').PageLoad} */
	// import { onMount } from 'svelte';
	import {
		fetchProductByCategory,
		fetchSingleProducts,
		singleProducts,
		singleProductsLoading
	} from '../../../store/store';
	// console.log('single', $singleProducts);
	// export const load = async ({ params }) => {
	// 	const { id } = params; // Get dynamic id from the URL
	// 	await fetchSingleProducts({ params: { id } });

	// 	return {}; // Return an empty object because no additional props are needed
	// };
	// // onMount(async () => {
	// // 	singleProducts({ params: { id: productId } });
	// // });
	console.log('category', $singleProducts.category);

	onMount(() => {
		fetchProductByCategory($singleProducts?.category);
	});
	console.log($singleProducts.category);
</script>

{#if $singleProductsLoading}
	<div>Loading</div>
{:else if $singleProducts}
	<div class="flex justify-between">
		<div class="mt-10 w-full">
			{console.log('single', $singleProducts)}
			<p class="font-semibold">{$singleProducts.title}</p>
			<div class="mt-5 flex items-center justify-between">
				<p class="">Brand: {$singleProducts.brand}</p>
				<p class="">Category: {$singleProducts.category}</p>
			</div>
			<p class="mt-5">{$singleProducts.description}</p>
			<p></p>
		</div>
		<img
			src={$singleProducts.images[0]}
			alt={$singleProducts.title}
			class="h-80 w-80 object-contain"
		/>
	</div>
{/if}
