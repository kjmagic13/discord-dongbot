import { commands } from "~~/modules/discord-commands/commands";
import { Interaction } from "~~/modules/discord-commands/interaction";

export default defineEventHandler(async (event) => {
  const i = new Interaction({
    // @ts-ignore
    member: { user: { id: "me" } },
    // @ts-ignore
    data: {
      options: [
        { name: "mention", value: "mentioned", type: 1 },
        { name: "size", value: "2", type: 1 },
      ],
    },
  });

  return await Promise.allSettled(
    commands.map(async (command) => {
      return { [command.builder.name]: await command.resolve(i) };
    }),
  );
});
