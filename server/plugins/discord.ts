import {
  Client,
  GatewayIntentBits,
  REST,
  Routes,
  SlashCommandBuilder,
  ChatInputCommandInteraction,
  SlashCommandMentionableOption,
} from "discord.js";

export default defineNitroPlugin(async ({ localFetch }) => {
  //
  const commands: ICommands = {
    // //
    // test: {
    //   data: new SlashCommandBuilder()
    //     .setName("test")
    //     .setDescription("test!")
    //     .addMentionableOption(useMentionOption),
    //   async execute(interaction) {
    //     await interaction.reply(`phrase ${useMentioned(interaction)}`);
    //   },
    // },

    //
    b: {
      data: new SlashCommandBuilder()
        .setName("b")
        .setDescription("Give em the B!")
        .addIntegerOption((option) =>
          option
            .setName("size")
            .setDescription("The size of the shaft.")
            .setRequired(true)
            .setMinValue(1)
            .setMaxValue(99)
        )
        .addMentionableOption(useMentionOption),
      async execute(interaction) {
        const sizeOption = interaction.options.get("size");
        let size = (sizeOption?.value as number) ?? 7;
        if (size < 1 || size > 100) {
          size = 7;
        }
        let shaft = "";
        for (let index = 0; index < size; index++) {
          shaft += "=";
        }
        await interaction.reply(
          `B${shaft}D :sweat_drops: ${useMentioned(interaction)} ||${size}||`
        );
      },
    },

    //
    ctd: {
      data: new SlashCommandBuilder()
        .setName("ctd")
        .setDescription("Replies with Catch this Dong!")
        .addMentionableOption(useMentionOption),
      async execute(interaction) {
        await interaction.reply(
          `Yo ${useMentioned(interaction)}, Catch this Dong!`
        );
      },
    },

    //
    ct_: {
      data: new SlashCommandBuilder()
        .setName("ct_")
        .setDescription("Replies with Catch this {rhyme}!")
        .addMentionableOption(useMentionOption),
      async execute(interaction) {
        const mentioned = useMentioned(interaction);
        const word = useRandomRhyme();
        const phrase =
          word == "bong"
            ? `Yo ${mentioned}, Smoke this Bong!`
            : `Yo ${mentioned}, Catch this ${word} dong!`;
        await interaction.reply(phrase);
      },
    },

    //
    stb: {
      data: new SlashCommandBuilder()
        .setName("stb")
        .setDescription("Replies with Smoke this Bong!")
        .addMentionableOption(useMentionOption),
      async execute(interaction) {
        await interaction.reply(
          `Yo ${useMentioned(interaction)}, Smoke this Bong!`
        );
      },
    },

    //
    inspire: {
      data: new SlashCommandBuilder()
        .setName("inspire")
        .setDescription("Replies with an inspirational quote!")
        .addMentionableOption(useMentionOption),
      async execute(interaction) {
        const quote = await (
          await localFetch("/api/inspire", {
            headers: {
              Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            },
          })
        ).text();
        await interaction.reply(`${useMentioned(interaction)}, ${quote}`);
      },
    },
  };

  //
  try {
    const client = await initDiscord(commands);
    if (!client) return;

    client.on("interactionCreate", async (interaction) => {
      if (!interaction.isChatInputCommand()) return;
      await commands[interaction.commandName].execute(interaction);
    });
  } catch (error) {
    console.error(error);
  }
});

/**
 * init commands
 * @returns
 */
async function initDiscord(commands: ICommands) {
  if (import.meta.dev) return;

  const { DISCORD_CLIENT_TOKEN, DISCORD_BOT_TOKEN } = process.env;
  if (!DISCORD_CLIENT_TOKEN || !DISCORD_BOT_TOKEN) return;

  const rest = new REST({ version: "10" }).setToken(DISCORD_BOT_TOKEN);

  console.log("Started refreshing application (/) commands.");

  await rest.put(Routes.applicationCommands(DISCORD_CLIENT_TOKEN), {
    body: Object.values(commands).map((c) => c.data),
  });

  console.log("Successfully reloaded application (/) commands.");

  const client = new Client({ intents: [GatewayIntentBits.Guilds] });

  client.once("ready", () => {
    console.log(`Discord Ready! Logged in as ${client?.user?.tag}.`);
  });

  client.login(DISCORD_BOT_TOKEN);

  return client;
}

/**
 *
 * @param interaction
 * @returns
 */
function useMentioned(interaction: ChatInputCommandInteraction) {
  return interaction.options.getMentionable("mention") ?? interaction.user;
}

/**
 *
 * @param option
 * @returns
 */
function useMentionOption(option: SlashCommandMentionableOption) {
  return option
    .setName("mention")
    .setDescription("Who to mention.")
    .setRequired(true);
}

/**
 *
 * @returns
 */
function useRandomRhyme() {
  const { word } =
    rhymingWords[Math.floor(Math.random() * rhymingWords.length)];
  return word;
}
