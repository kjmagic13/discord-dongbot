import { defineNuxtModule } from "@nuxt/kit";
import { putCommands } from "./utils";

export default defineNuxtModule({
  setup(_options, nuxt) {
    /**
     * sends updated command definitions to Discord on `build:before`
     */
    nuxt.hook("build:before", async () => {
      await putCommands({
        discordBotToken: process.env.NUXT_DISCORD_BOT_TOKEN || "",
        discordClientToken: process.env.NUXT_DISCORD_CLIENT_TOKEN || "",
      });
    });
  },
});
