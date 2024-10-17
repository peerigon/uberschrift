<script lang="ts">
	import { svelte } from '@sveltejs/vite-plugin-svelte';
	import { getContext } from 'svelte';

	import type { HTMLAttributes } from 'svelte/elements';

	const { increment, ...headingProps } = $props<
		{
			increment?: number;
		} & HTMLAttributes<HTMLHeadingElement>
	>();

	const contextLevel = getContext<number>('uberschriftLevel') || 1;
	const currentLevel = contextLevel + (increment ?? 0);
	const isDiv = currentLevel >= 7;
</script>

<svelte:element
	this={isDiv ? `div` : `h${currentLevel}`}
	aria-level={isDiv ? currentLevel : undefined}
	{...headingProps}
>
	<slot />
</svelte:element>
