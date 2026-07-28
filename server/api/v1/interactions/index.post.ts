import { resolveCommand } from "~~/modules/discord-commands/commands";
import { Routes } from "discord.js";
// import { PostHog } from "posthog-node";

export default defineEventHandler(async (event) => {
  const body = await validateDiscordInteraction(event);
  if (import.meta.dev) console.log({ body });

  /**
   * ping
   */
  if (body?.type == 1) {
    console.log("pong");
    return {
      type: 1,
    };
  }

  /**
   * slash command
   */
  if (body?.type == 2) {
    const content = resolveCommand(body);

    if (content instanceof Promise) {
      queueMicrotask(async () => {
        const client = useDiscordRestClient();

        client.patch(
          Routes.webhookMessage(body.application_id, body.token, "@original"),
          {
            body: {
              content: await content,
            },
          },
        );
      });

      return {
        type: 5,
      };
    }

    return {
      type: 4,
      data: {
        content,
      },
    };
  }
});
