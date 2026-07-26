import { REST, Routes } from "discord.js";
import { commands } from "./commands";

type DiscordBotTokens = { discordClientToken: string; discordBotToken: string };

const version = "10";

export async function putCommands(tokens: DiscordBotTokens) {
  const rest = new REST({ version }).setToken(tokens.discordBotToken);
  return await rest.put(Routes.applicationCommands(tokens.discordClientToken), {
    body: commands.map((c) => c.builder),
  });
}

export async function getCommands(tokens: DiscordBotTokens) {
  const rest = new REST({ version }).setToken(tokens.discordBotToken);
  return await rest.get(Routes.applicationCommands(tokens.discordClientToken));
}
