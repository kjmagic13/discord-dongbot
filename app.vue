<script setup lang="ts">
const { data } = await useFetch('/api/home')

useHead({
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: `${data.value?.logo?.url}?w=100`,
    },
    // {
    //   rel: 'stylesheet',
    //   href: 'https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&display=swap',
    // },
  ],
})
</script>

<template>
  <main>
    <NuxtPage />
  </main>
</template>
