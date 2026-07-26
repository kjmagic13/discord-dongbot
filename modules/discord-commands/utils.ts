import { REST, Routes } from "discord.js";
import { commands } from "./commands";

type DiscordBotTokens = { clientToken: string; botToken: string };

const version = "10";

export async function putCommands(tokens: DiscordBotTokens) {
  const rest = new REST({ version }).setToken(tokens.botToken);
  return await rest.put(Routes.applicationCommands(tokens.clientToken), {
    body: commands.map((c) => c.builder),
  });
}

export async function getCommands(tokens: DiscordBotTokens) {
  const rest = new REST({ version }).setToken(tokens.botToken);
  return await rest.get(Routes.applicationCommands(tokens.clientToken));
}
