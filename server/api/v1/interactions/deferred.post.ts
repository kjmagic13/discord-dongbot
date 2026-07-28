import { resolveCommand } from "~~/modules/discord-commands/commands";
import { Routes } from "discord.js";

export default defineEventHandler(async (event) => {
  const body = await readBody<DiscordInteraction.Request>(event);

  const client = useDiscordRestClient();

  const content = await resolveCommand(body);

  await client.patch(
    Routes.webhookMessage(body.application_id, body.token, "@original"),
    {
      body: {
        content,
      },
    },
  );
});
