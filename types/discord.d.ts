type ICommands = Record<
  string,
  {
    data:
      | import("discord.js").SlashCommandBuilder
      | Omit<
          import("discord.js").SlashCommandBuilder,
          "addSubcommand" | "addSubcommandGroup"
        >;
    execute: (
      i: import("discord.js").ChatInputCommandInteraction
    ) => Promise<void>;
  }
>;
