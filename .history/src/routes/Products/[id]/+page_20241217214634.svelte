<script>
	import { onMount } from 'svelte';
	import { singleProducts } from '../../../store/store';

	onMount(() => {
		singleProducts({ id });
	});
</script>

<div>here is single products</div>
