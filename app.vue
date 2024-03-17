<template>
  <div>
    <h1>To Do</h1>
    <form @submit.prevent="addTask">
      <input v-model="newTask" name="newTask" autocomplete="off" />
      <button>Add</button>

    <!-- 配列配下のクッキーに値を追加 して画面表示する-->
      <ul>
        <li v-for="(task, index) in tasks" :key="task">
          <span>{{ task }}</span>
          <button @click="$event => deleteTask(event)">Delete</button>
        </li>
    </ul>
    <button @click="clearTask">Clear</button>

    </form>
    <NuxtLayout>
      <NuxtPage />
      <img src="~/assets/1.jpeg" alt="1">
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

const tasks = useCookie(
  'tasks',{
    default: () =>[]
  }
)
// 今回useCookieでCookieを保存したり、追加削除変更するのでリアクティブにする=ref
const newTask = ref('')

//  if(newTodo.value.length >=1のサイズが
// １いじょうなら、配列で保持しているCookieに追加したいタスクの文字列を追加する
function addTask() {
  if(newTask.value.length >= 1){
      tasks.value.push(newTask.value)
  }
  newTask.value = ''
}

function deleteTask(index){
  tasks.value.splice(index,1)
}

//Cookie問sて保存している配列の値を全件削除
function clearTask(){
  tasks.value = []
}
</script>