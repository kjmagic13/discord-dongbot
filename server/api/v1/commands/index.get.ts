import { getCommands } from "~~/modules/discord-commands/utils";

export default defineCachedEventHandler(
  async () => {
    const { discord } = useRuntimeConfig();
    return await getCommands(discord);
  },
  {
    maxAge: 60 * 60,
    shouldInvalidateCache: (e) => !!getQuery(e).force,
  },
);
