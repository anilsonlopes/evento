<template>
  <div class="container mx-auto px-10 py-20 grid lg:grid-cols-4 gap-20">
    <div class="lg:col-span-2">
      <h2 class="text-2xl lg:text-3xl font-bold">Inscrição</h2>
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
    <div class="lg:col-span-2">
      <form class="grid md:grid-cols-2 gap-5" @submit.prevent="submitForm">
        <div class="col-span-2 md:col-span-1">
          <label class="form-label" for="name">Nome</label>
          <input
            id="name"
            v-model="name"
            type="text"
            autocomplete="name"
            placeholder="Steve Jobs"
            class="form-input-text"
            required
          />
        </div>
        <div class="col-span-2 md:col-span-1">
          <label class="form-label" for="email">E-mail</label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="sj@acesseseucondominio.com.br"
            autocomplete="email"
            class="form-input-text"
            required
          />
        </div>
        <Button
          class="col-span-2 h-12 text-base"
          variant="outline"
          type="submit"
        >
          <Icon
            v-if="loadingForm"
            name="fluent:spinner-ios-16-regular"
            class="animate-spin"
          />
          <span v-if="!loadingForm">Inscrever-se</span>
        </Button>
        <div class="mt-4 text-sm text-gray-500 col-span-2">
          Ao clicar em "Inscrever-se", você concorda com os
          <nuxt-link to="/app/termos-de-uso" class="text-sky-800 underline">
            Termos de uso
          </nuxt-link>
          e a
          <nuxt-link
            to="/app/politica-de-privacidade"
            class="text-sky-800 underline"
          >
            Política de privacidade
          </nuxt-link>
          .
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Button } from "~/components/ui/button";
const supabase = useSupabaseClient();
const name = ref("");
const email = ref("");
const router = useRouter();
const props = defineProps<{
  doc: {
    uid: string;
  };
}>();
const loadingForm = ref(false);

useHead({
  title: "Participe do evento",
});

async function submitForm() {
  loadingForm.value = true;

  const { error, status } = await supabase.from("registration").insert({
    name: name.value,
    email: email.value,
    event_uid: props.doc.uid,
  });

  if (error) {
    if (status === 409) {
      router.push({
        name: "slug-index-participar-duplicado",
        hash: "#nav",
      });
    }
    loadingForm.value = false;
    return;
  }

  router.push({
    name: "slug-index-participar-confirmado",
    hash: "#nav",
  });
}
</script>

<style></style>
