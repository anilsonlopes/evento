<template>
  <h3 class="text-2xl font-semibold" :id="id">
    <a
      v-if="id && generate"
      :href="`#${id}`"
    >
      <slot />
    </a>
    <slot v-else />
  </h3>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && (headings?.anchorLinks.h2 === true || (typeof headings?.anchorLinks === 'object' && headings?.anchorLinks?.h2)))
</script>