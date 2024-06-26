<template>
  <div>
    <div>
      <div v-if="doc === null">
        <h1>Evento não encontrado.</h1>
      </div>
      <div v-if="doc">
        <section class="bg-sky-900 text-white">
          <div class="container mx-auto px-10 py-20">
            <h1 class="text-3xl lg:text-5xl max-w-xl">
              {{ doc.title }}
            </h1>
            <p class="mt-8 max-w-xl">
              {{ doc.summary }}
            </p>
            <ul class="mt-10 space-y-3">
              <li class="flex items-center space-x-2">
                <Icon name="solar:calendar-add-linear" class="text-2xl" />
                <div>
                  {{ $dayjs(doc.when).format("D, MMM YYYY - LT[h]") }}
                </div>
              </li>
              <li class="flex items-center space-x-2">
                <Icon name="solar:play-circle-linear" class="text-2xl" />
                <div>{{ doc.where }}</div>
              </li>
              <li class="flex items-center space-x-2">
                <Icon name="solar:money-bag-linear" class="text-2xl" />
                <div>{{ doc.price }}</div>
              </li>
            </ul>
            <nuxt-link
              :to="{
                name: 'slug-index-participar',
                hash: '#nav',
              }"
              class="inline-block mt-8 px-10 py-4 rounded-lg bg-black/20 hover:bg-black/40 hover:text-gray-300"
            >
              Participar
            </nuxt-link>
          </div>
        </section>
        <section id="nav" class="shadow py-5 bg-white sticky top-0">
          <nav
            class="container mx-auto flex justify-center space-x-2 md:space-x-4 text-gray-500 font-semibold"
          >
            <nuxt-link
              v-for="link in nav"
              :to="{ ...link.to, hash: '#nav' }"
              class="page-link px-2 md:px-4 py-2 text-gray-400 hover:text-gray-900"
            >
              {{ link.text }}
            </nuxt-link>
          </nav>
        </section>
        <div class="min-h-screen">
          <NuxtPage :doc="doc" />
        </div>
      </div>
    </div>
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

const { data: doc } = await useAsyncData("evento", () =>
  queryContent("/eventos/" + route.params.slug).findOne()
);

useSeoMeta({
  title: doc.value?.title,
  description: doc.value?.category,
});
</script>

<style lang="postcss" scoped>
.page-link.router-link-exact-active {
  @apply text-gray-900;
}
</style>
