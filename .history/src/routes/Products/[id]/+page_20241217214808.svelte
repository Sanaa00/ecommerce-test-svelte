<script>
	import { onMount } from 'svelte';
	import { singleProducts } from '../../../store/store';

	// onMount(() => {
	// 	singleProducts({ id });
	// });
</script>

<div>
	<p>{$singleProducts.title}</p>
</div>
