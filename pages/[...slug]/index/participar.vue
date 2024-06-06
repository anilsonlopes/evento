<template>
  <section>
    <div class="container mx-auto px-10 py-20 grid lg:grid-cols-4 gap-20">
      <div class="lg:col-span-2">
        <h2 class="text-2xl lg:text-3xl font-bold">Inscrição </h2>
        <ul class="list-disc list-inside">
          <li class="mt-3 text-lg text-gray-800">
            Informe seu nome e e-mail para realizar a inscrição no evento
          </li>
          <li class="mt-3 text-lg text-gray-800">
            O nome informado aqui será utilizado no certificado
          </li>
          <li class="mt-3 text-lg text-gray-800">
            Dê preferência ao e-mail corporativo
          </li>
        </ul>
      </div>
      <div class="lg:col-span-2 grid md:grid-cols-2 gap-5">
        <div>
          <label class="form-label" for="name">Nome</label>
          <input
            id="name"
            type="text"
            autocomplete="name"
            placeholder="Steve Jobs"
            class="form-input-text"
          />
        </div>
        <div>
          <label class="form-label" for="email">E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="sj@acesseseucondominio.com.br"
            autocomplete="email"
            class="form-input-text"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style></style>
