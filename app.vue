<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
      <img src="~/assets/1.jpeg" alt="1">
      <img src="~/assets/2.jpeg" alt="2">
      <img src="~/assets/3.jpeg" alt="3">


    <!-- <p>{{ users[0].id }}, {{ users[0].name }} </p> -->
      <ui>
        <li v-for="user in users" :key="user.id">
          <!-- 以下はコンテンツ -->
          {{ user.id }}, {{user.name}}
        </li>
      </ui>
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