<template>
  <div class="container mx-auto px-10 py-20">
    <ContentRenderer :value="props.doc" />
  </div>
</template>

<script lang="ts" setup>
import type { ParsedContent } from "@nuxt/content/types";

const props = defineProps<{
  doc: ParsedContent | null;
}>();
</script>

<style></style>
