import {
  SlashCommandBuilder,
  userMention,
  roleMention,
  channelMention,
} from "discord.js";
import { useRandomRhyme } from "./rhymes";

type CommandNames = "b" | "ctd" | "ct_" | "stb" | "inspire";

type TCommand = {
  name: CommandNames;
  description: string;
  builder?: (b: CustomSlashBuilder) => CustomSlashBuilder;
  resolver: (i: Interaction) => string | Promise<string>;
};

/**
 *
 */
export class Command {
  name: CommandNames;
  description: string;
  builder: CustomSlashBuilder;
  private resolver: (i: Interaction) => string | Promise<string>;

  constructor({ name, description, builder, resolver }: TCommand) {
    this.name = name;
    this.description = description;
    this.resolver = resolver;

    const defaultBuilder = new SlashCommandBuilder();

    defaultBuilder
      .setName(this.name)
      .setDescription(this.description)
      .addMentionableOption((option) =>
        option
          .setName("mention")
          .setDescription("Who to mention.")
          .setRequired(true),
      );

    this.builder = builder?.(defaultBuilder) ?? defaultBuilder;
  }

  async resolve(i: DiscordInteraction.Request): Promise<string> {
    const interaction = new Interaction(i);
    return await this.resolver(interaction);
  }

  static find(name: string) {
    return this.all.find((x) => x.name === name);
  }

  static get builders() {
    return Object.values(Command.all).map((c) => c.builder);
  }

  static get all(): Command[] {
    return [
      // b
      new Command({
        name: "b",
        description: "Give em the B!",
        builder: (b) => {
          b.addIntegerOption((option) =>
            option
              .setName("size")
              .setDescription("The size of the shaft.")
              .setRequired(true)
              .setMinValue(1)
              .setMaxValue(99),
          );
          return b;
        },
        resolver: (i) => {
          const parsedSize = parseInt(i.options.get("size")?.value) || 7;
          const size = Math.max(1, Math.min(100, parsedSize));
          const shaft = "=".repeat(size);
          return `B${shaft}D :sweat_drops: ${i.mentioned} ||${size}||`;
        },
      }),

      //ctd
      new Command({
        name: "ctd",
        description: "Replies with Catch this Dong!",
        resolver: (i) => `Yo ${i.mentioned}, Catch this Dong!`,
      }),

      // ct_
      new Command({
        name: "ct_",
        description: "Replies with Catch this {rhyme}!",
        resolver: (i) => {
          const word = useRandomRhyme();
          return word == "bong"
            ? `Yo ${i.mentioned}, Smoke this Bong!`
            : `Yo ${i.mentioned}, Catch this ${word} dong!`;
        },
      }),

      // stb
      new Command({
        name: "stb",
        description: "Replies with Smoke this Bong!",
        resolver: (i) => `Yo ${i.mentioned}, Smoke this Bong!`,
      }),

      // inspire
      new Command({
        name: "inspire",
        description: "Replies with an inspirational quote",
        resolver: async (i) => {
          const quote = await fetchInspirationalQuote();
          return `> ${quote}\n— ${i.mentioned}`;
        },
      }),
    ];
  }
}

/**
 *
 */
export class Interaction {
  private request: DiscordInteraction.Request;
  options: InteractionOptions;

  constructor(body: DiscordInteraction.Request) {
    this.request = body;
    this.options = new InteractionOptions(this.request.data.options);
  }

  get member() {
    return this.request.member;
  }

  get mentioned(): string {
    const id =
      (this.options.get("mention")?.value as string) ?? this.member.user.id;

    if (!!this.request.data.resolved.roles) return roleMention(id);

    return userMention(id);
  }
}

/**
 *
 */
export class InteractionOptions {
  private _options: DiscordInteraction.Option[];

  constructor(options: DiscordInteraction.Option[]) {
    this._options = options;
  }

  get(name: string) {
    return this._options.find((x) => x.name === name);
  }
}
