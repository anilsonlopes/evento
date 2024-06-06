<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <div class="min-h-screen flex-col font-mono flex items-center justify-center">
    <h2 class="text-2xl">
      Erro {{ props.error?.statusCode || "desconhecido" }}
    </h2>
    <p class="text-lg">
      {{ props.error?.message }}
    </p>
  </div>
</template>
