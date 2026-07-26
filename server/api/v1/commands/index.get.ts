import { getCommands } from "~~/modules/discord-commands/utils";

export default defineCachedEventHandler(
  async () => {
    const { discordBotToken, discordClientToken } = useRuntimeConfig();
    return await getCommands({ discordBotToken, discordClientToken });
  },
  {
    maxAge: 60 * 60,
    shouldInvalidateCache: (e) => !!getQuery(e).force,
  },
);
