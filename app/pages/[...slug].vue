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
  <article class="my-15">
    <ContentRenderer
      v-if="page"
      :value="page"
      prose
      class="mx-auto prose dark:prose-invert"
    />
    <div v-else>Page not found</div>
  </article>
</template>
