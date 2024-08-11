type CustomSlashBuilder =
  | import("discord.js").SlashCommandBuilder
  | Omit<
      import("discord.js").SlashCommandBuilder,
      "addSubcommand" | "addSubcommandGroup"
    >;

type CustomPreSlashBuilder = Omit<CustomSlashBuilder, "setName">;

namespace DiscordInteraction {
  interface Request {
    app_permissions: string;
    application_id: string;
    authorizing_integration_owners: AuthorizingIntegrationOwners;
    channel: Channel;
    channel_id: string;
    context: number;
    data: Data;
    entitlement_sku_ids: any[];
    entitlements: any[];
    guild: Guild;
    guild_id: string;
    guild_locale: string;
    id: string;
    locale: string;
    member: Member;
    token: string;
    type: number;
    version: number;
  }

  interface AuthorizingIntegrationOwners {
    "0": string;
  }

  interface Channel {
    flags: number;
    guild_id: string;
    id: string;
    last_message_id: string;
    name: string;
    nsfw: boolean;
    parent_id: string;
    permissions: string;
    position: number;
    rate_limit_per_user: number;
    topic: any;
    type: number;
  }

  interface Data {
    id: string;
    name: string;
    options: Option[];
    resolved: Resolved;
    type: number;
  }

  interface Option {
    name: string;
    type: number;
    value: any;
  }

  interface Resolved {
    roles?: Record<string, Role>;
    members?: Record<string, Member>;
  }

  interface Role {
    color: number;
    description: any;
    flags: number;
    hoist: boolean;
    icon: any;
    id: string;
    managed: boolean;
    mentionable: boolean;
    name: string;
    permissions: string;
    position: number;
    unicode_emoji: any;
  }

  interface Guild {
    features: string[];
    id: string;
    locale: string;
  }

  interface Member {
    avatar: any;
    banner: any;
    communication_disabled_until: any;
    deaf: boolean;
    flags: number;
    joined_at: string;
    mute: boolean;
    nick: any;
    pending: boolean;
    permissions: string;
    premium_since: any;
    roles: any[];
    unusual_dm_activity_until: any;
    user: User;
  }

  interface User {
    avatar: string;
    avatar_decoration_data: any;
    clan: any;
    discriminator: string;
    global_name: string;
    id: string;
    public_flags: number;
    username: string;
  }
}
