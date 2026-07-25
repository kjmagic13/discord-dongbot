import { defineNuxtModule } from "@nuxt/kit";
import { REST, Routes } from "discord.js";
import { Command } from "./commands";

export default defineNuxtModule({
  setup(_options, nuxt) {
    nuxt.hook("build:before", async () => {
      const { discord } = nuxt.options.runtimeConfig;

      const rest = new REST({ version: "10" }).setToken(discord.botToken);

      await rest.put(Routes.applicationCommands(discord.clientToken), {
        body: Command.builders,
      });
    });
  },
});
