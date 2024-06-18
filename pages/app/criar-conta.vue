<template>
  <section>
    <div class="container mx-auto px-10 py-20 grid lg:grid-cols-4 gap-20">
      <div class="lg:col-span-2">
        <h2 class="text-2xl lg:text-3xl font-bold">Crie sua conta</h2>
        <p class="mt-3 text-lg text-gray-800">
          Crie sua conta e comece a usar o sistema agora mesmo. É rápido e
          fácil.
        </p>
      </div>
      <div class="lg:col-span-2">
        <Card>
          <CardHeader>
            <div class="text-center text-sm">
              Já possui uma conta?
              <a href="#" class="underline"> Faça login </a>
            </div>
          </CardHeader>
          <CardContent>
            <form class="grid gap-4" @submit.prevent="handleSubmit">
              <div class="grid gap-2">
                <Label for="name">Nome</Label>
                <Input id="name" v-model="name" placeholder="Nome" required />
              </div>
              <div class="grid gap-2">
                <Label for="email">E-mail</Label>
                <Input
                  v-model="email"
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div class="grid gap-2">
                <Label for="password">Senha</Label>
                <Input id="password" v-model="password" type="password" />
              </div>
              <Button type="submit" class="w-full"> Criar uma conta</Button>
              <Button variant="outline" class="w-full">
                Entrar com Zoho Auth
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const supabase = useSupabaseClient();

useHead({
  title: "Criar conta",
});

const name = ref("");
const email = ref("");
const password = ref("");

async function handleSubmit() {
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      data: {
        name: name.value,
      },
    },
  });
  if (error?.message) {
    alert(error.message);
  }
  if (data.user) {
    alert("Usuário criado com sucesso");
  }
}
</script>

<style></style>
