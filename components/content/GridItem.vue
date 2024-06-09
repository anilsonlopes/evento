<template>
  <div>
    <Icon :name="icon" size="3rem" />
    <h3>
      {{ title }}
    </h3>
    <p class="text-gray-500">
      {{ description }}
    </p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
  description: string
  icon: string
}>()
</script>

<style>

</style>