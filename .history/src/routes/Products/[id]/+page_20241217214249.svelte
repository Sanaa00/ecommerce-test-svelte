<script>
	import { onMount } from 'svelte';
	import { singleProducts } from '../../../store/store';

	onMount(() => {
		singleProducts();
	});
</script>
