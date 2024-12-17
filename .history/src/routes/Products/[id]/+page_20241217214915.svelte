<script>
	import { onMount } from 'svelte';
	import { singleProducts } from '../../../store/store';
	console.log('single', $singleProducts);

	// onMount(() => {
	// 	singleProducts({ id });
	// });
</script>

<div>
	<p>{$singleProducts.title}</p>
</div>
