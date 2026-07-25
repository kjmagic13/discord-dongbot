import { Command } from "~~/modules/discord-commands/commands";
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
    const command = Command.find(body.data.name);

    return {
      type: 4,
      data: {
        content: await command?.resolve(body),
      },
    };
  }
});
