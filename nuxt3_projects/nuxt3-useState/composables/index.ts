//  以下の方法でuseTitleを自動的に呼び出せる。つまりapp.vueに
// 書いたキーと初期値設定はけす
import { ref } from "vue";

export const useTitle = () => {
      // 状態管理で保持している値を受け取った引数に変更する処理を記述
  const title = useState<string>('title', ()=> "useStateを使用した初期値")
  const changeTitle = (title: Ref<string>) => (value: string) => {
    title.value = value
  }
  //useTitleで返却する値を記述
  return{ 
    title: readonly(title),
    changeTitle: changeTitle(title)
  }
}

