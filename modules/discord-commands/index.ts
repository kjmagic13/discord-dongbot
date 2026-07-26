import { defineNuxtModule } from "@nuxt/kit";
import { putCommands } from "./utils";

export default defineNuxtModule({
  setup(_options, nuxt) {
    /**
     * sends updated command definitions to Discord on `build:before`
     */
    nuxt.hook("build:before", async () => {
      const { discord } = nuxt.options.runtimeConfig;
      await putCommands(discord);
    });
  },
});
