<template>
  <div>
    auth callback
    <div>
      <pre>
        {{ params }}
      </pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const config = useRuntimeConfig();

type CallbackParams = {
  code: string;
  location: string;
  accounts_server: string;
};

type ResponseAccessToken = {
  access_token: string;
  id_token: string;
  api_domain: string;
  expires_in: number;
  token_type: string;
};

const params = computed<CallbackParams>(() => {
  return {
    code: route.query.code as string,
    location: route.query.location as string,
    accounts_server: route.query.accounts_server as string,
  };
});

onMounted(() => {});

async function getAccessToken() {
  const { data } = await useFetch<ResponseAccessToken>(
    "https://accounts.zoho.com/oauth/v2/token",
    {
      method: "POST",
      body: {
        client_id: config.public.zohoClientId,
        client_secret: config.zohoClientSecret,
        grant_type: "authorization_code",
        code: params.value.code,
        redirect_uri: window.location.host + "/auth/callback",
      },
    }
  );
  return data;
}
</script>

<style></style>
