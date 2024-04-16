<script setup lang="ts">
import { inject } from "vue";
import { uberschriftSymbol } from "./uberschriftSymbol.ts";

const props = withDefaults(
	defineProps<{
		increment?: number;
	}>(),
	{
		increment: 0,
	},
);

const ctx = inject<number>(uberschriftSymbol, 1);
const level = ctx + props.increment;
</script>

<template>
	<component v-if="level < 7" :is="`h${level}`">
		<slot />
	</component>

	<div v-else role="heading" :aria-level="level">
		<slot />
	</div>
</template>
