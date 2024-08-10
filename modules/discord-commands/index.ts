import { defineNuxtModule } from "@nuxt/kit";
import { REST, Routes } from "discord.js";
import { Command } from "./commands";

const { DISCORD_CLIENT_TOKEN, DISCORD_BOT_TOKEN } = process.env;

export default defineNuxtModule({
  setup(_options, nuxt) {
    nuxt.hook("build:before", async () => {
      if (!DISCORD_CLIENT_TOKEN || !DISCORD_BOT_TOKEN) return;

      const rest = new REST({ version: "10" }).setToken(DISCORD_BOT_TOKEN);

      await rest.put(Routes.applicationCommands(DISCORD_CLIENT_TOKEN), {
        body: Command.builders,
      });
    });
  },
});
