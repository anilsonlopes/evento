<template>
  <section>
    <div class="container mx-auto px-10 py-20 grid lg:grid-cols-4 gap-20">
      <div class="lg:col-span-2">
        <h2 class="text-2xl lg:text-3xl font-bold">Dê boas vindas a evolução</h2>
        <p class="mt-3 text-lg text-gray-800">
          Nessa seção você encontra informações sobre o que está por vir, o que
          já foi feito e o que está sendo feito. Acompanhe o desenvolvimento do
          projeto e fique por dentro de tudo que está acontecendo. Aproveite!
        </p>
      </div>
      <div class="lg:col-span-2 grid md:grid-cols-2 gap-20">
        <div v-for="feature in features">
          <Icon :name="feature.icon" class="text-3xl" />
          <h3 class="mt-2 text-lg font-semibold">
            {{ feature.title }}
          </h3>
          <p class="text-gray-800">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const features = [
  {
    icon: "fluent:road-20-regular",
    title: "Roadmaps",
    description:
      "Ferramenta visual para planejar, organizar e comunicar a visão, a estratégia e o progresso de um projeto ou produto ao longo do tempo.",
  },
  {
    icon: "fluent:tetris-app-20-regular",
    title: "E2E",
    description:
      "Teste End-to-End verifica o fluxo completo de uma aplicação para garantir que tudo funcione conforme esperado.",
  },
  {
    icon: "fluent:branch-request-20-regular",
    title: "User stories",
    description:
      "Descrições simples e curtas de funcionalidades do ponto de vista do usuário final.",
  },
  {
    icon: "fluent:cursor-click-20-regular",
    title: "Protótipos",
    description:
      "Versões preliminares de um produto ou sistema criadas para testar conceitos, funcionalidades e design.",
  },
];
</script>

<style></style>
