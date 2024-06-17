type ResponseAccessToken = {
  access_token: string;
  id_token: string;
  api_domain: string;
  expires_in: number;
  token_type: string;
};

export const useAuth = () => {
  const config = useRuntimeConfig();

  const zohoUrl = "https://accounts.zoho.com/";

  function requestAutorization() {
    const url = new URL(window.location.href);
    url.searchParams.set("response_type", "code");
    url.searchParams.set("client_id", config.public.zohoClientId);
    url.searchParams.set("redirect_uri", "http://localhost:3000/auth/callback");
    url.searchParams.set("scope", "email,profile,openid");

    window.location.href = zohoUrl + "oauth/v2/auth?" + url.href;
  }

  async function getAccessToken(code: string) {
    const response = await useFetch(zohoUrl + "oauth/v2/token", {
      method: "POST",
      body: {
        client_id: config.public.zohoClientId,
        client_secret: config.zohoClientSecret,
        grant_type: "authorization_code",
        code,
        redirect_uri: "http://localhost:3000/auth/callback",
      },
    });
  }

  return ref({
    requestAutorization,
    getAccessToken,
  });
};
