<script lang="ts">
	import { getContext, setContext } from 'svelte';

	const currentLevel = getContext<number>('uberschriftLevel') || 1;
	setContext('uberschriftLevel', currentLevel + 1);
</script>

<slot />
