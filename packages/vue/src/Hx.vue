<script setup lang="ts">
import { inject } from "vue";
import { vueberschriftLevel } from "./vueberschriftSymbol.ts";

const props = withDefaults(
	defineProps<{
		increment?: number;
	}>(),
	{
		increment: 0,
	},
);

const currentLevel = inject(vueberschriftLevel, 1);
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
