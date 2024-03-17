<template>
  <div>
    <h1>{{ title }}</h1>
    <!-- 修正前<button @click="$event =>titleState.changeTitle('useStateを更新した')">useStateを更新</button> -->
    <!-- ボタンクリックでtitleの値を更新 -->
    <button @click="changeTitle('useStateを更新した')">useStateを更新</button>
  </div>
</template>

<script setup>

// 'composables' ディレクトリ内の 'index.ts' をインポートする。これは app.vue ファイルから相対的に composables ディレクトリ内の index.ts ファイルを見つけるため。
import { useTitle } from './composables/index';

// useStateのキーの値と初期値を設定->削除
// index.tsで記述した自動的にインポートされるcomposables/ディレクトリを呼び出す処理を記述
  // const titleState = useTitle()
  // const {title} = titleState
  // useTitleからtitleとchangeTitleを展開
const { title, changeTitle } = useTitle();



</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  
}

h1 {
  color: #e762a2;
  margin-bottom: 20px;
}

button {
  background-color: #ff3700;
  color: #655d5dba;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0ee67d;
}
</style>
