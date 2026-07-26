import { resolveCommand } from "~~/modules/discord-commands/commands";
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
    return {
      type: 4,
      data: {
        content: await resolveCommand(body),
      },
    };
  }
});
