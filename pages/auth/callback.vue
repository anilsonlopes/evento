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
const auth = useAuth();

type ResponseParams = {
  code: string;
  location: string;
  accounts_server: string;
};

const params = computed<ResponseParams>(() => {
  return {
    code: route.query.code as string,
    location: route.query.location as string,
    accounts_server: route.query.accounts_server as string,
  };
});

onMounted(() => {
  
})
</script>

<style></style>
