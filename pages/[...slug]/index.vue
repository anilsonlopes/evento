<template>
  <div>
    <section class="bg-sky-900 text-white">
      <div class="container mx-auto px-10 py-20">
        <h1 class="text-3xl lg:text-5xl max-w-xl">
          Introdução à rodada de networking
        </h1>
        <p class="mt-8 max-w-xl">
          Esta atividade que tem como objetivo promover a interação entre os
          desenvolvedores através de uma dinâmica de conversas rápidas.
        </p>
        <ul class="mt-10 space-y-3">
          <li class="flex items-center space-x-2">
            <Icon name="solar:calendar-add-linear" class="text-2xl" />
            <div>11 de Junho de 2024</div>
          </li>
          <li class="flex items-center space-x-2">
            <Icon name="solar:clock-circle-linear" class="text-2xl" />
            <div>19:00 às 21:00</div>
          </li>
          <li class="flex items-center space-x-2">
            <Icon name="solar:play-circle-linear" class="text-2xl" />
            <div>Hibrido (presencial com livestream)</div>
          </li>
          <li class="flex items-center space-x-2">
            <Icon name="solar:money-bag-linear" class="text-2xl" />
            <div>Gratuíto</div>
          </li>
        </ul>
        <nuxt-link
          :to="{
            name: 'slug-index-participar',
          }"
          class="inline-block mt-8 px-10 py-4 rounded-lg bg-black/20 hover:bg-black/40 hover:text-gray-300"
        >
          Participar
        </nuxt-link>
      </div>
    </section>
    <section class="shadow py-5">
      <div class="container mx-auto flex justify-center space-x-4">
        <nav class="text-gray-500 font-semibold">
          <nuxt-link
            v-for="link in nav"
            :to="link.to"
            class="px-4 py-2 text-gray-500 hover:text-gray-900"
          >
            {{ link.text }}
          </nuxt-link>
        </nav>
      </div>
    </section>
    <NuxtPage />
    <section>
      <div class="pb-20 pt-10 mt-10 border-t container mx-auto">
        <div class="flex justify-between">
          <div class="text-gray-600">
            <div>Introdução à rodada de networking</div>
            <div>11 de Junho de 2024</div>
          </div>
          <nuxt-link to="/" class="font-mono">eventos.quila.dev</nuxt-link>
          <div class="text-gray-600 text-right">
            <div>Híbrido (presencial com livestream)</div>
            <div>Gratuíto</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

if (!route.params.slug) {
  throw createError({
    statusCode: 404,
    message: "Página não encontrada",
  });
}

const nav = [
  {
    to: {
      name: "slug-index",
    },
    text: "Visão geral",
  },
  {
    to: {
      name: "slug-index-participar",
    },
    text: "Participar",
  },
  {
    to: {
      name: "slug-index-certificado",
    },
    text: "Certificado",
  },
];
</script>

<style></style>
