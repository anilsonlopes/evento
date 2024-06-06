<template>
  <section>
    <div class="container mx-auto px-10 py-20 grid lg:grid-cols-4 gap-20">
      <div class="lg:col-span-2">
        <h2 class="text-2xl lg:text-3xl font-bold">
          Certificado de participação
        </h2>
        <p class="mt-3 text-lg text-gray-800">
          Bem-vindo ao nosso portal de geração de certificados de participação!
          Você pode obter seu certificado exclusivo após a realização do evento.
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
    icon: "fluent:password-20-regular",
    title: "Validade",
    description:
      "Somente participantes credenciados terão acesso ao documento, garantindo a autenticidade e reconhecimento da sua presença.",
  },
  {
    icon: "fluent:checkmark-circle-20-regular",
    title: "Disponibilidade",
    description:
      "Após o término do evento, basta inserir seus dados para gerar e baixar seu certificado. Agradecemos sua participação!",
  },
];
</script>

<style></style>
