<template>
  <div v-if="error.statusCode === 404">
    <h1>404エラー！</h1>
    <p>{{ error.message }}</p>
  </div>
</template>

<script setup>
// エラーのステータスコードやエラーメッセージを取得する方法として useErrorを使用
// 変数エラーはuseErrorでエラーのステータスコードやエラーメッセージを取得して代入

const error = useError();
  
</script>