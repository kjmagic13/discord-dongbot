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

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
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
