import { roleMention, userMention } from "discord.js";

/**
 * A slash command invocation, wrapping the raw Discord request body.
 */
export class Interaction {
  private request: DiscordInteraction.Request;
  options: InteractionOptions;

  constructor(request: DiscordInteraction.Request) {
    this.request = request;
    this.options = new InteractionOptions(request.data.options);
  }

  get member() {
    return this.request.member;
  }

  /** Who to mention, falling back to whoever ran the command. */
  get mentioned(): string {
    const id = this.options.string("mention") ?? this.member.user.id;

    return this.request.data.resolved?.roles?.[id]
      ? roleMention(id)
      : userMention(id);
  }
}

/**
 * Typed reads over the option list, which Discord omits entirely when a
 * command is invoked without arguments.
 */
export class InteractionOptions {
  private options: DiscordInteraction.Option[];

  constructor(options: DiscordInteraction.Option[] = []) {
    this.options = options;
  }

  string(name: string): string | undefined {
    const value = this.find(name)?.value;
    return typeof value === "string" ? value : undefined;
  }

  find(name: string) {
    return this.options.find((x) => x.name === name);
  }
}
