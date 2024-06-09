<template>
  <div class="container mx-auto px-10 py-20">
    <ContentDoc :path="`/app/${$route.params.slug}`" />
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
