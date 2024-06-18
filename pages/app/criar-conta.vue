<template>
  <section>
    <div class="container mx-auto px-10 py-20 grid lg:grid-cols-4 gap-20">
      <div class="lg:col-span-2">
        <h2 class="text-2xl lg:text-3xl font-bold">Acesse a plataforma</h2>
        <p class="mt-3 text-lg text-gray-800">
          Utilize seu provedor de preferencia para se autenticar aos eventos.
        </p>
      </div>
      <div class="lg:col-span-2">
        <Card>
          <CardHeader>
            <div class="text-center text-sm">Selecione seu provedor</div>
          </CardHeader>
          <CardContent class="space-y-5">
            <Button as-child variant="outline" class="w-full">
              <nuxt-link :to="requestZohoAuthUrl">
                Entrar com Zoho Auth
              </nuxt-link>
            </Button>
            <Button variant="outline" class="w-full">
              Entrar com GitHub
            </Button>
            <Button variant="outline" class="w-full">
              Entrar com conta Google
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

useHead({
  title: "Criar conta",
});

const config = useRuntimeConfig();

const requestUrl = useRequestURL();

const requestZohoAuthUrl = computed(() => {
  const url = new URL("https://accounts.zoho.com/oauth/v2/auth");
  url.searchParams.set("response_type", "code");
  url.searchParams.set("client_id", config.public.zohoClientId);
  url.searchParams.set("redirect_uri", requestUrl.origin + "/auth/callback/zoho");
  url.searchParams.set("scope", "email,profile,openid");
  return url.href;
});
</script>

<style></style>
