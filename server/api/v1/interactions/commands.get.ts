import { REST, Routes } from "discord.js";

const { DISCORD_CLIENT_TOKEN, DISCORD_BOT_TOKEN } = process.env;

export default defineCachedEventHandler(
  async () => {
    if (!DISCORD_CLIENT_TOKEN || !DISCORD_BOT_TOKEN)
      throw createError({
        statusCode: 500,
        message: "Discord env variables not set",
      });

    const rest = new REST({ version: "10" }).setToken(DISCORD_BOT_TOKEN);

    return await rest.get(Routes.applicationCommands(DISCORD_CLIENT_TOKEN));
  },
  {
    maxAge: 1 * 60,
    shouldInvalidateCache: (e) => !!getQuery(e).force,
  }
);
