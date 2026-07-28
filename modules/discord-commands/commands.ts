import { Interaction } from "./interaction";
import { buildSlashCommand, type CommandDefinition } from "./builder";
import { useRandomRhyme } from "./rhymes";

/** Shared by the `/b` option spec and its resolver so the two can't drift. */
const B_SHAFT_SIZE = { min: 1, max: 99, fallback: 7 };

const definitions = [
  {
    name: "b",
    description: "Give em the B!",
    options: [
      ({ mentionable }) => mentionable(),
      ({ builder }) =>
        builder.addIntegerOption((o) =>
          o
            .setName("size")
            .setDescription("The size of the shaft.")
            .setRequired(true)
            .setMinValue(B_SHAFT_SIZE.min)
            .setMaxValue(B_SHAFT_SIZE.max),
        ),
    ],
    resolve: (i) => {
      const parsedSize =
        parseInt(i.options.find("size")?.value) || B_SHAFT_SIZE.fallback;

      const size = Math.max(
        B_SHAFT_SIZE.min,
        Math.min(B_SHAFT_SIZE.max, parsedSize),
      );

      const shaft = "=".repeat(size);

      return `B${shaft}D :sweat_drops: ${i.mentioned} ||${size}||`;
    },
  },

  {
    name: "ctd",
    description: "Replies with Catch this Dong!",
    options: [({ mentionable }) => mentionable()],
    resolve: (i) => `Yo ${i.mentioned}, Catch this Dong!`,
  },

  {
    name: "ct_",
    description: "Replies with Catch this {rhyme}!",
    options: [({ mentionable }) => mentionable()],
    resolve: (i) => {
      const word = useRandomRhyme();

      return word == "bong"
        ? `Yo ${i.mentioned}, Smoke this Bong!`
        : `Yo ${i.mentioned}, Catch this ${word} dong!`;
    },
  },

  {
    name: "stb",
    description: "Replies with Smoke this Bong!",
    options: [({ mentionable }) => mentionable()],
    resolve: (i) => `Yo ${i.mentioned}, Smoke this Bong!`,
  },

  {
    name: "inspire",
    description: "Replies with an inspirational quote",
    deferred: true,
    options: [({ mentionable }) => mentionable({ required: false })],
    resolve: async (i) => {
      const quote = await fetchInspirationalQuote();

      return `> ${quote}\n— ${i.mentioned}`;
    },
  },
] as const satisfies readonly CommandDefinition[];

/**
 *
 */
export const commands = definitions.map(buildSlashCommand);

/**
 *
 * @param name
 * @returns
 */
export function findCommand(
  name: (typeof definitions)[number]["name"] | (string & {}),
) {
  return commands.find((c) => c.builder.name === name);
}

/**
 * Runs the named command
 *
 * @param request
 * @returns
 */
export function resolveCommand(request: DiscordInteraction.Request) {
  const command = findCommand(request.data.name);

  return command?.resolve(new Interaction(request));
}
