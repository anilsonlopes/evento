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
            <div class="grid gap-4">
              <div class="grid gap-2">
                <Label for="name">Nome</Label>
                <Input id="name" placeholder="Nome" required />
              </div>
              <div class="grid gap-2">
                <Label for="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div class="grid gap-2">
                <Label for="password">Senha</Label>
                <Input id="password" type="password" />
              </div>
              <Button type="submit" class="w-full"> Criar uma conta</Button>
              <Button variant="outline" class="w-full">
                Entrar com Zoho Auth
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

useHead({
  title: "Criar conta",
});
</script>

<style></style>
