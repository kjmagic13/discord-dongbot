<script setup lang="ts"></script>

<template>
  <Html lang="en" class="dark">
    <Meta charset="UTF-8" />
    <Meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <Link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />

    <div class="page-root">
      <!-- Ambient background orbs -->
      <div class="orb orb-1" aria-hidden="true"></div>
      <div class="orb orb-2" aria-hidden="true"></div>
      <div class="orb orb-3" aria-hidden="true"></div>
      <div class="grid-overlay" aria-hidden="true"></div>

      <main class="relative z-10">
        <slot></slot>
      </main>

      <footer class="footer">
        <nav class="footer-links">
          <a href="/" class="footer-link">Home</a>
          <span class="footer-sep" aria-hidden="true">·</span>
          <a href="/privacy" class="footer-link">Privacy</a>
          <span class="footer-sep" aria-hidden="true">·</span>
          <a href="/terms-of-service" class="footer-link">Terms</a>
        </nav>
        <p class="footer-copy">
          &copy;
          <ClientOnly>
            {{ new Date().getFullYear() }}
          </ClientOnly>
          DongBot
        </p>
      </footer>
    </div>
  </Html>
</template>
