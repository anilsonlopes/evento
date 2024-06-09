<template>
  <div>
    <slot />
    <footer>
      <div class="pb-20 pt-10 mt-10 border-t container mx-auto">
        <div class="flex justify-between">
          <nuxt-link to="/" class="font-mono">
            <client-only fallback="Carregando informações...">
              {{ domain }}
            </client-only>
          </nuxt-link>
          <div class="text-gray-600 text-right">
            &copy; {{ $dayjs().format("YYYY") }}
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
const domain = import.meta.client ? location.hostname : "'-'";
</script>

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
