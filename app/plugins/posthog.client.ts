import posthog from "posthog-js";

export default defineNuxtPlugin((nuxtApp) => {
  const { origin } = useRequestURL();
  const { posthogPublicKey, posthogHost } = useRuntimeConfig().public;

  const posthogClient = posthog.init(posthogPublicKey, {
    api_host: `${origin}/ingest`,
    ui_host: posthogHost,
    capture_pageview: false, // we add manual pageview capturing below
    loaded: (posthog) => {
      if (import.meta.env.MODE === "development") posthog.debug();
    },
  });

  // Make sure that pageviews are captured with each route change
  const router = useRouter();
  router.afterEach((to) => {
    nextTick(() => {
      posthog.capture("$pageview", {
        current_url: to.fullPath,
      });
    });
  });

  return {
    provide: {
      posthog: () => posthogClient,
    },
  };
});
