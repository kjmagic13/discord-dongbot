<script setup lang="ts">
useHead({
  title: "DongBot",
});
</script>

<template>
  <section class="relative py-3 sm:max-w-xl sm:mx-auto">
    <div
      class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-800 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
    ></div>

    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
      <div class="max-w-md mx-auto">
        <div>
          <img
            src="/assets/images/f2ef929c-1905-4e94-8966-4e9df2c87d9f.jpg"
            class="mx-auto rounded-3xl"
          />
        </div>

        <div class="divide-y divide-gray-200">
          <div
            class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:leading-7"
          >
            <p class="text-lg">
              <strong> Give 'em the B! </strong>
              A Discord Bot that keeps your server members entertained for
              hours*
            </p>

            <p class="text-center py-7">
              <a
                href="https://discord.com/oauth2/authorize?client_id=806353693061677066&scope=bot"
                target="_blank"
                class="bg-indigo-500 font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-indigo-600"
              >
                Install DongBot
              </a>
            </p>

            <ul class="list-disc space-y-2">
              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <svg
                    class="flex-shrink-0 h-5 w-5 text-indigo-800"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>

                <p class="ml-2">
                  <code class="text-sm font-bold text-gray-900">
                    /b
                    <span class="p-1 pr-0 bg-black text-white">
                      size <span class="p-1 bg-gray-600"> 15 </span>
                    </span>

                    <span class="p-1 pr-0 bg-black text-white">
                      mention
                      <span class="p-1 bg-gray-600"> @myFriend </span>
                    </span>
                  </code>

                  <br />

                  &rarr; B===============D @myFriend ||15||
                </p>
              </li>

              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <svg
                    class="flex-shrink-0 h-5 w-5 text-indigo-800"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>

                <p class="ml-2">
                  <code class="text-sm font-bold text-gray-900">
                    /ctd
                    <span class="p-1 pr-0 bg-black text-white">
                      mention
                      <span class="p-1 bg-gray-600"> @myFriend </span>
                    </span>
                  </code>

                  <br />

                  &rarr; Yo @myFriend, Catch this Dong!
                </p>
              </li>

              <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <svg
                    class="flex-shrink-0 h-5 w-5 text-indigo-800"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>

                <p class="ml-2">
                  <code class="text-sm font-bold text-gray-900">
                    /ct_
                    <span class="p-1 pr-0 bg-black text-white">
                      mention
                      <span class="p-1 bg-gray-600"> @everyone </span>
                    </span>
                  </code>

                  <br />

                  &rarr; Yo @everyone, Catch this religious song!
                </p>
              </li>
            </ul>

            <p class="text-sm italic">
              *May not keep your server members entertained for hours
            </p>
          </div>

          <div
            class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7"
          >
            <p>Want to dig deeper into DongBot?</p>

            <p>
              <a
                href="https://github.com/kjmagic13/discord-dongbot#readme"
                target="_blank"
                class="text-indigo-800 hover:text-indigo-600 text-sm"
              >
                Read the docs &rarr;
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
