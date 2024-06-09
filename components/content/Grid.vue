<template>
  <div class="grid lg:grid-cols-2 gap-10">
    <div>
      <ContentSlot :use="$slots.default" />
    </div>
    <div class="grid md:grid-cols-2 gap-10">
      <ContentSlot :use="$slots.items" />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
