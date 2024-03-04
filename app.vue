<template>
  <div>
    <NuxtLayout>
      <NuxtPage />

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
  const { data: users } = await useFetch('https://jsonplaceholder.typicode.com/users')
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