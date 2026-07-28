import {
  findCommand,
  resolveCommand,
} from "~~/modules/discord-commands/commands";
// import { PostHog } from "posthog-node";

export default defineEventHandler(async (event) => {
  const body = await validateDiscordInteraction(event);
  if (import.meta.dev) console.log({ body });

  /**
   * ping
   */
  if (body.type == 1) {
    console.log("pong");
    return {
      type: 1,
    };
  }

  /**
   * slash command
   */
  if (body.type == 2) {
    const command = findCommand(body.data.name);

    if (command?.deferred) {
      await $fetch("/.netlify/functions/deferred-discord-background", {
        method: "POST",
        body,
      });

      return {
        type: 5,
      };
    }

    return {
      type: 4,
      data: {
        content: resolveCommand(body),
      },
    };
  }
});
