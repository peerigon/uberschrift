<script setup lang="ts">
import { inject } from "vue";
import { uberschriftLevel } from "./uberschriftSymbol.ts";

const props = withDefaults(
	defineProps<{
		increment?: number;
	}>(),
	{
		increment: 0,
	},
);

const currentLevel = inject(uberschriftLevel, 1);
const level = currentLevel + props.increment;
</script>

<template>
	<component v-if="level < 7" :is="`h${level}`">
		<slot />
	</component>

	<div v-else role="heading" :aria-level="level">
		<slot />
	</div>
</template>
