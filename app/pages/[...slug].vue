<script setup lang="ts">
const route = useRoute();
const { data: page } = await useAsyncData(() =>
  queryCollection("content").path(route.path).first(),
);

if (!page.value) {
  throw createError({
    status: 404,
    message: "Page not found",
  });
}

const url = useRequestURL();

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
  ogImage: `${url.origin}/images/f2ef929c-1905-4e94-8966-4e9df2c87d9f.jpg`,
  twitterImage: `${url.origin}/images/f2ef929c-1905-4e94-8966-4e9df2c87d9f.jpg`,
  ogTitle: page.value?.title,
  ogDescription: page.value?.description,
  ogUrl: url.toString(),
  twitterTitle: page.value?.title,
  twitterDescription: page.value?.description,
  ogImageHeight: 512,
  ogImageWidth: 512,
});
</script>

<template>
  <article :class="page?.prose ? 'my-15 px-5' : undefined">
    <ContentRenderer
      v-if="page"
      :value="page"
      :prose="page.prose"
      :class="page.prose ? 'mx-auto prose dark:prose-invert' : undefined"
    />
    <div v-else>Page not found</div>
  </article>
</template>
