<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
      <img src="~/assets/1.jpeg" alt="1">

    <!-- <p>{{ users[0].id }}, {{ users[0].name }} </p> -->
    </NuxtLayout>
  </div>
</template>


<script setup>
// useFetchで例外エラーを試しに発生させてみる↓
const { data: users, error } = await useFetch('https://jsonplaceholder.typicode.com/users')

  if(error.value) {
    throw createError({ statusCode: 404, statusMessage: 'ページが見つかりません'})
  }
  useHead({
  title: "Nuxt App", // titleタグ設定
  link: [
    // GoogleFonts設定
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap",
    },
  ],
});
</script>