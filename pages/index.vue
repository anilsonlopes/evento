<template>
  <div class="min-h-screen flex justify-center bg-sky-900">
    <main class="max-w-5xl w-full mx-auto px-10 pb-20">
      <h1 class="text-white text-6xl mb-10 mt-10 lg:mt-52">Eventos</h1>
      <ContentList v-slot="{ list }">
        <div class="space-y-10">
          <div v-for="event in list">
            <nuxt-link
              class="border border-transparent hover:border-sky-600 hover:shadow-lg hover:-translate-y-1 rounded-lg bg-sky-700 transition-all will-change-transform duration-150 p-5 lg:flex lg:space-x-8 items-center"
              :to="{
                name: 'slug-index',
                params: { slug: event._path?.split('/eventos/').at(1) },
              }"
            >
              <div
                class="p-5 rounded-lg flex items-center justify-center flex-col text-white bg-sky-800 text-center"
              >
                <div class="whitespace-nowrap">{{ event.when }}</div>
                <div class="whitespace-nowrap text-2xl font-bold font-serif">
                  {{ event.hour }}
                </div>
              </div>
              <div class="col-span-3 text-white">
                <div class="font-semibold text-xl font-serif">
                  {{ event.title }}
                </div>
                <div class="text-gray-200">
                  {{ event.summary }}
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </ContentList>
    </main>
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: "Eventos",
});
</script>

<style></style>
