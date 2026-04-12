<script setup lang="ts">
useHead({
  title: "DongBot",
  meta: [
    {
      name: "description",
      content:
        "DongBot: the free, open-source Discord bot for server shenanigans. Generate dongs and more — install in seconds.",
    },
  ],
});
</script>

<template>
  <div class="page-root">
    <!-- Ambient background orbs -->
    <div class="orb orb-1" aria-hidden="true"></div>
    <div class="orb orb-2" aria-hidden="true"></div>
    <div class="orb orb-3" aria-hidden="true"></div>
    <div class="grid-overlay" aria-hidden="true"></div>

    <main class="relative z-10">
      <!-- ── HERO ── -->
      <section class="hero">
        <div class="hero-image-wrap">
          <div class="hero-image-glow"></div>
          <img
            src="/images/f2ef929c-1905-4e94-8966-4e9df2c87d9f.jpg"
            class="hero-image"
            alt="DongBot avatar"
          />
        </div>

        <h1 class="hero-title">DONGBOT</h1>

        <div class="hero-sub">
          <p class="hero-tagline">Give&nbsp;'em&nbsp;the&nbsp;B!</p>
          <p class="hero-desc">
            A Discord bot that keeps your server members entertained for
            hours<span class="asterisk">*</span>
          </p>
        </div>

        <a
          href="https://discord.com/oauth2/authorize?client_id=806353693061677066&scope=bot"
          target="_blank"
          class="install-btn"
        >
          <!-- Discord wordmark icon -->
          <svg
            class="discord-icon"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.032.054a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"
            />
          </svg>
          Install DongBot
        </a>

        <a href="#commands" class="learn-more-btn">
          <svg
            class="chevron-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
          Learn More
        </a>

        <p class="disclaimer">
          *May not keep your server members entertained for hours
        </p>
      </section>

      <!-- ── COMMANDS ── -->
      <section id="commands" class="commands-section">
        <h2 class="section-title">
          <span class="section-title-line"></span>
          COMMANDS
          <span class="section-title-line"></span>
        </h2>

        <div class="commands-grid">
          <!-- /b -->
          <div class="cmd-card cmd-card--purple">
            <div class="cmd-card-bar">
              <span class="dot dot-red"></span>
              <span class="dot dot-yellow"></span>
              <span class="dot dot-green"></span>
              <span class="cmd-channel"># general</span>
            </div>
            <div class="cmd-body">
              <div class="cmd-input">
                <span class="cmd-prompt cmd-prompt--purple">/</span>
                <span class="cmd-name">b</span>
                <span class="cmd-param">size</span>
                <span class="cmd-value">15</span>
                <span class="cmd-param">mention</span>
                <span class="cmd-value">@myFriend</span>
              </div>
              <div class="cmd-output">
                <span class="cmd-arrow">→</span>
                <span class="cmd-result"
                  >B===============D @myFriend <em>||15||</em></span
                >
              </div>
            </div>
          </div>

          <!-- /ctd -->
          <div class="cmd-card cmd-card--indigo">
            <div class="cmd-card-bar">
              <span class="dot dot-red"></span>
              <span class="dot dot-yellow"></span>
              <span class="dot dot-green"></span>
              <span class="cmd-channel"># general</span>
            </div>
            <div class="cmd-body">
              <div class="cmd-input">
                <span class="cmd-prompt cmd-prompt--indigo">/</span>
                <span class="cmd-name">ctd</span>
                <span class="cmd-param">mention</span>
                <span class="cmd-value">@myFriend</span>
              </div>
              <div class="cmd-output">
                <span class="cmd-arrow">→</span>
                <span class="cmd-result">Yo @myFriend, Catch this Dong!</span>
              </div>
            </div>
          </div>

          <!-- /ct_ -->
          <div class="cmd-card cmd-card--pink">
            <div class="cmd-card-bar">
              <span class="dot dot-red"></span>
              <span class="dot dot-yellow"></span>
              <span class="dot dot-green"></span>
              <span class="cmd-channel"># general</span>
            </div>
            <div class="cmd-body">
              <div class="cmd-input">
                <span class="cmd-prompt cmd-prompt--pink">/</span>
                <span class="cmd-name">ct_</span>
                <span class="cmd-param">mention</span>
                <span class="cmd-value">@everyone</span>
              </div>
              <div class="cmd-output">
                <span class="cmd-arrow">→</span>
                <span class="cmd-result"
                  >Yo @everyone, Catch this religious song!</span
                >
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ── DOCS ── -->
      <section class="docs-section">
        <div class="docs-card">
          <p class="docs-question">Want to dig deeper into DongBot?</p>
          <a
            href="https://github.com/kjmagic13/discord-dongbot#readme"
            target="_blank"
            class="docs-link"
          >
            <svg
              class="github-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
              />
            </svg>
            Read the docs →
          </a>
        </div>
      </section>
    </main>
  </div>
</template>
