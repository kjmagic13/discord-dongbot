import { REST } from "discord.js";

export const useDiscordRestClient = () => {
  const version = "10";

  const { discordBotToken } = useRuntimeConfig();

  const client = new REST({ version }).setToken(discordBotToken);

  return client;
};
