<template>
  <div class="bg-sky-900">
    <main class="container mx-auto px-10 py-20">
      <h1 class="text-white text-6xl mb-10 lg:mt-52">Todos eventos</h1>
      <ContentList v-slot="{ list }" path="/eventos">
        <div class="space-y-10">
          <div v-for="event in list">
            <nuxt-link
              class="grid gap-5 md:flex border border-transparent hover:border-sky-600 rounded-lg bg-sky-700 p-5"
              :to="{
                name: 'slug-index',
                params: { slug: event._path?.split('/eventos/').at(1) },
              }"
            >
              <div
                class="p-5 rounded-lg flex items-center justify-center flex-col text-white bg-sky-800 text-center"
              >
                <div class="whitespace-nowrap uppercase">
                  {{ $dayjs(event.when).format("D MMM YY") }}
                </div>
                <div class="whitespace-nowrap lg:text-2xl font-bold font-serif">
                  {{ $dayjs(event.when).format("LT") }}
                </div>
              </div>
              <div class="text-white">
                <div class="font-semibold lg:text-xl font-serif">
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

<script lang="ts" setup></script>

<style></style>
