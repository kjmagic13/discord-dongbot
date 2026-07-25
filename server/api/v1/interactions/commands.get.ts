import { REST, Routes } from "discord.js";

export default defineCachedEventHandler(
  async () => {
    const { discord } = useRuntimeConfig();
    const rest = new REST({ version: "10" }).setToken(discord.botToken);
    return await rest.get(Routes.applicationCommands(discord.clientToken));
  },
  {
    maxAge: 1 * 60,
    shouldInvalidateCache: (e) => !!getQuery(e).force,
  },
);
