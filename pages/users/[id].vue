<template>
  <div>
  <!-- $routeは現在のルートオブジェクトを参照し、
  params.idはURLから取得したidパラメータの値を指す -->
    <h1>users/{{  $route.params.id }}を表示中！</h1>
  </div>
 
</template>

<script setup>
//definePageMeta関数は、ページのメタデータを定義するために使用。ページの設定やルートのバリデーションなど、ページレベルでの設定を行う際に使われる.
// validate関数は、ページにアクセスする前に特定の条件を満たしているかを確認する
// ルートパラメータのidが数字のみで構成されているかをチェックする
// .test(route.params.id)はこの正規表現をidパラメータに適用し、パラメータが数字のみで構成されている場合にtrueを返す

definePageMeta({
    validate: async(route) => {
      return /^\d+$/.test(route.params.id)
    }
  })

</script>