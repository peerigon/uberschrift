<script setup lang="ts">
import { inject, provide } from "vue";
import { uberschriftSymbol } from "./uberschriftSymbol";

const level = inject<number>(uberschriftSymbol, 1);
provide(uberschriftSymbol, level + 1);
</script>

<template>
	<slot />
</template>
