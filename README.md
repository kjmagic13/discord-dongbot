# DongBot

> A Discord bot that keeps your server members entertained for hours\*

[**Add to your server →**](https://discord.com/oauth2/authorize?client_id=806353693061677066&scope=bot) &nbsp;|&nbsp; [**dongbot.net**](https://dongbot.net)

\*May not keep your server members entertained for hours

---

## Commands

| Command | Description |
|---------|-------------|
| `/b size mention` | Generates a dong of the specified size (1–99) and fires it at whoever you mention. |
| `/ctd mention` | Tells someone to catch this dong. Classic. |
| `/ct_ mention` | Tells someone to catch this _____ dong. The blank is a surprise. |

---

## Contributing

PRs are welcome! Here's how to get up and running locally.

### Prerequisites

- Node.js 18+
- A Discord application with a bot token — [Discord Developer Portal](https://discord.com/developers/applications)
- An OpenAI API key

### Setup

```bash
git clone https://github.com/kjmagic13/discord-dongbot.git
cd discord-dongbot
npm install
cp .env.example .env
```

Fill in your `.env`:

```env
DISCORD_CLIENT_TOKEN=your_application_client_id
DISCORD_BOT_TOKEN=your_bot_token
OPENAI_API_KEY=your_openai_key
```

```bash
npm run dev
```

### Tech Stack

- [Nuxt 3](https://nuxt.com) — full-stack framework (frontend + API routes)
- [discord.js](https://discord.js.org) — Discord API
- [Tailwind CSS](https://tailwindcss.com) — styling
- [OpenAI](https://openai.com) — AI-generated dong wisdom
- [PostHog](https://posthog.com) — analytics
