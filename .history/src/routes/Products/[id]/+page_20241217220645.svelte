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
	<div class="mt-10">
		<p class="font-semibold">{$singleProducts.title}</p>
		<p></p>
	</div>
{/if}
