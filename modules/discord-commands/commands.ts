import { SlashCommandBuilder, userMention } from "discord.js";
import { useRandomRhyme } from "~/server/utils/rhymes";

type CommandNames = "b" | "ctd" | "ct_" | "stb";

type TCommand = {
  name: CommandNames;
  description: string;
  builder?: (b: CustomSlashBuilder) => CustomSlashBuilder;
  resolver: (i: Interaction) => Promise<string>;
};

/**
 *
 */
export class Command {
  name: CommandNames;
  description: string;
  builder: CustomSlashBuilder;
  private resolver: (i: Interaction) => Promise<string>;

  constructor({ name, description, builder, resolver }: TCommand) {
    this.name = name;
    this.description = description;
    this.resolver = resolver;

    const defaultBuilder = new SlashCommandBuilder()
      .setName(this.name)
      .setDescription(this.description)
      .addMentionableOption((option) =>
        option
          .setName("mention")
          .setDescription("Who to mention.")
          .setRequired(true)
      );

    this.builder = builder?.(defaultBuilder) ?? defaultBuilder;
  }

  async resolve(i: DiscordInteraction.Request) {
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
        builder: (b) =>
          b.addIntegerOption((option) =>
            option
              .setName("size")
              .setDescription("The size of the shaft.")
              .setRequired(true)
              .setMinValue(1)
              .setMaxValue(99)
          ),
        resolver: async (i) => {
          const sizeOption = i.options.get("size");
          let size = (sizeOption?.value as number) ?? 7;
          if (size < 1 || size > 100) {
            size = 7;
          }
          let shaft = "";
          for (let index = 0; index < size; index++) {
            shaft += "=";
          }
          return `B${shaft}D :sweat_drops: ${i.mentioned} ||${size}||`;
        },
      }),

      //ctd
      new Command({
        name: "ctd",
        description: "Replies with Catch this Dong!",
        resolver: async (i) => `Yo ${i.mentioned}, Catch this Dong!`,
      }),

      // ct_
      new Command({
        name: "ct_",
        description: "Replies with Catch this {rhyme}!",
        resolver: async (i) => {
          const word = useRandomRhyme();
          return word == "bong"
            ? `Yo ${i.mentioned}, Smoke this Bong!`
            : `Yo ${i.mentioned}, Catch this ${word} dong!`;
        },
      }),

      // stb
      new Command({
        name: "stb",
        description: "Replies with Catch this Dong!",
        resolver: async (i) => `Yo ${i.mentioned}, Smoke this Bong!`,
      }),
    ];
  }
}

/**
 *
 */
export class Interaction {
  options: InteractionOptions;
  private commandName: string;
  private member: DiscordInteraction.Member;

  constructor(body: DiscordInteraction.Request) {
    this.options = new InteractionOptions(body.data.options);
    this.commandName = body.data.name;
    this.member = body.member;
  }

  get mentioned(): string {
    const id =
      (this.options.get("mention")?.value as string) ?? this.member.user.id;
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
