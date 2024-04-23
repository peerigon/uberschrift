<script setup lang="ts">
import { inject, provide } from "vue";
import { vueberschriftLevel } from "./vueberschriftSymbol";

const currentLevel = inject(vueberschriftLevel, 1);
provide(vueberschriftLevel, currentLevel + 1); // provide next level
</script>

<template>
	<slot />
</template>
