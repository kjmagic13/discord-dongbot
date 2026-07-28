import {
  SlashCommandBuilder,
  type SlashCommandOptionsOnlyBuilder,
} from "discord.js";

import { Interaction } from "./interaction";

export type CommandDefinition = {
  name: string;
  description: string;
  deferred?: boolean;
  options?: readonly CommandOption[];
  resolve: (i: Interaction) => string | Promise<string>;
};

type MentionableOption = (options?: {
  name?: string;
  description?: string;
  required?: boolean;
}) => SlashCommandOptionsOnlyBuilder;

type CommandOption = (options: {
  builder: SlashCommandBuilder;
  mentionable: MentionableOption;
}) => SlashCommandOptionsOnlyBuilder;

/** Turns option specs into the builder Discord expects at registration. */
export function buildSlashCommand({
  name,
  description,
  deferred,
  options,
  resolve,
}: CommandDefinition) {
  const builder = new SlashCommandBuilder()
    .setName(name)
    .setDescription(description);

  const mentionable: MentionableOption = (options) =>
    builder.addMentionableOption((o) =>
      o
        .setName(options?.name || "mention")
        .setDescription(options?.description || "Who to mention?")
        .setRequired(options?.required ?? true),
    );

  for (const option of options ?? []) {
    option({ builder, mentionable });
  }

  return { builder, resolve, deferred };
}
