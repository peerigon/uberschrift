<script setup lang="ts">
import { inject, provide } from "vue";
import { uberschriftLevel } from "./uberschriftSymbol";

const currentLevel = inject(uberschriftLevel, 1);
provide(uberschriftLevel, currentLevel + 1); // provide next level
</script>

<template>
	<slot />
</template>
