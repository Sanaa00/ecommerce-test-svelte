<script>
	// @ts-nocheck

	import { productInCart } from '../../store/store';
</script>

{#if $productInCart.length === 0}
	<div>Loading...</div>
{:else}
	<div>
		<div class="my-10 grid grid-cols-3 gap-10">
			{#each $productInCart as item}
				<div class="border-b-2 border-zard py-2">
					<p>{item.id}</p>
					<!-- <div class="mt-4 flex items-center justify-between">
						<p>{item.price}$</p>
						<button class="rounded-sm bg-zard px-4 py-2" on:click={() => addCartHandler(item.id)}
							>Add to Cart</button
						>
					</div> -->
				</div>
			{/each}
		</div>
	</div>
{/if}
