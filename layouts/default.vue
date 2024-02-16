<script setup lang="ts"></script>

<template>
  <Meta charset="UTF-8" />
  <Meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <Link
    rel="shortcut icon"
    href="/assets/images/favicon.ico"
    type="image/x-icon"
  />
  <Link
    href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
    rel="stylesheet"
  />

  <main
    class="min-h-screen bg-gray-800 py-6 flex flex-col justify-center sm:py-12"
  >
    <slot></slot>
  </main>
</template>
