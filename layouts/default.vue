<template>
  <div>
    <header class="shadow py-2 bg-white sticky top-0">
      <div class="container mx-auto flex items-center justify-between">
        <div class="flex space-x-8 items-center text-sm">
          <nuxt-link class="flex items-center space-x-4" to="/">
            <img
              src="/favicon-16x16.png"
              width="16px"
              height="16px"
              class="mt-px"
              alt="Logo da aplicação: um quadrado com a letra E dentro"
            />
            <AppLogoStudio class="hidden sm:block" />
          </nuxt-link>
          <nuxt-link class="header-nav-item" to="/app/termos-de-uso">
            Termos de uso
          </nuxt-link>
          <nuxt-link class="header-nav-item" to="/app/politica-de-privacidade">
            Política de privacidade
          </nuxt-link>
        </div>
        <div>
          <div class="size-10 bg-gray-600 rounded-full"></div>
        </div>
      </div>
    </header>
    <slot />
    <footer>
      <div class="py-10 px-10 border-t container mx-auto">
        <div class="flex justify-between">
          <nuxt-link class="flex items-center space-x-4" to="/">
            <img
              src="/favicon-16x16.png"
              width="16px"
              height="16px"
              class="mt-px"
              alt="Logo da aplicação: um quadrado com a letra E dentro"
            />
            <AppLogoStudio class="hidden sm:block" />
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
.header-nav-item {
  @apply text-gray-400 border-b-2 border-dotted transition-colors duration-150 border-transparent hover:text-gray-700;
}
.header-nav-item.router-link-exact-active {
  @apply text-black border-gray-400;
}
</style>
