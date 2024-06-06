<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="postcss">
.form-label {
  @apply block text-gray-600 mb-2;
}
.form-input-text {
  @apply border rounded px-3 py-2 block outline-none w-full;
}
.form-input-text:focus {
  @apply border-sky-600;
}
</style>
