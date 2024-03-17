<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="$event =>titleState.changeTitle('useStateを更新した')">useStateを更新</button>
    <!-- <button @click="updateInit">初期値を更新</button> -->
  </div>
</template>

<script setup>

// useStateのキーの値と初期値を設定->削除
// index.tsで記述した自動的にインポートされるcomposables/ディレクトリを呼び出す処理を記述
  const titleState = useTitle()
  const {title} = titleState

  // function updateInit (){
  //   title.value = "更新後の値"
  // }

</script>