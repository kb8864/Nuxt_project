<template>
  <div class="container">
  <!-- 下記slotは、NuxtLayoutコンポーネントの子要素に差し代わる =レイアウトファイルからページを呼び出すにはslot が必要-->
    <slot />
    <footer>&copy; @kono</footer>
  </div>
</template>

<style>
  .container{
    color: red;
  }
  footer {
    background-color: orange;
    color: wheat;
    text-align: center;
  }

  html{
  font-family: "Micro 5", sans-serif;

  }
</style>