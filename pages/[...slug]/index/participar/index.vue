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
        <div>
          <label class="form-label" for="name">Nome</label>
          <input
            id="name"
            v-model="name"
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
            v-model="email"
            type="email"
            placeholder="sj@acesseseucondominio.com.br"
            autocomplete="email"
            class="form-input-text"
          />
        </div>
        <button
          class="col-span-2 space-x-3 text-center py-3 rounded bg-gray-50 border text-gray-500 text-lg hover:bg-gray-100 hover:text-gray-900 active:bg-sky-500 active:text-white active:border-sky-500 transition-colors"
          type="submit"
        >
          <Icon
            v-if="loadingForm"
            name="fluent:spinner-ios-16-regular"
            class="animate-spin"
          />
          <Icon
            v-if="!loadingForm"
            name="fluent:chevron-double-right-20-regular"
          />
          <span v-if="!loadingForm">Inscrever-se</span>
        </button>
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

async function submitForm() {
  loadingForm.value = true;

  const { error } = await supabase.from("registration").insert({
    name: name.value,
    email: email.value,
    event_uid: props.doc.uid,
  });

  if (error) {
    console.error(error.message);
    loadingForm.value = false;
    return;
  }

  router
    .push({
      name: "slug-index-participar-confirmado",
      hash: "#nav",
    })
    .then(() => {
      loadingForm.value = false;
    });
}
</script>

<style></style>
