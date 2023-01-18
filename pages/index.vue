<script setup lang="ts">
const { data } = await useFetch('/api/home')

useHead({ title: data.value?.title })
</script>

<template>
  <section
    v-if="data"
    class="min-h-screen bg-gray-800 py-6 flex flex-col justify-center sm:py-12"
  >
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-800 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
      ></div>
      <div
        class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20"
      >
        <div class="max-w-md mx-auto">
          <div>
            <img :src="data?.logo?.url!" class="mx-auto rounded-3xl" />
          </div>
          <div class="divide-y divide-gray-200">
            <div
              class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:leading-7"
            >
              <div
                class="text-lg"
                v-html="useMarkdown(data.description!)"
              ></div>

              <p class="text-center py-7">
                <a
                  :href="data.buttonUrl!"
                  target="_blank"
                  class="bg-indigo-500 font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-indigo-600"
                >
                  {{ data.buttonText }}
                </a>
              </p>

              <div class="prose" v-html="useMarkdown(data.body!)"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
