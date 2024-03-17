//  以下の方法でuseTitleを自動的に呼び出せる。つまりapp.vueに
// 書いたキーと初期値設定はけす

// カプセル化の強化。Vueのrefとreadonlyをインポート
import { ref, readonly } from 'vue';

export const useTitle = () => {
    //ref の使用: Vueのリアクティブシステム内でプリミティブ値をリアクティブに扱うため
      // これにより、アプリケーションのどの部分からでもこの状態を参照し、更新することが可能
      // 修正前const title = useState<string>('title', ()=> "useStateを使用した初期値")
    // refを使用してリアクティブなデータを作成
    const title = ref('useStateを使用した初期値');



  // title 状態の値を更新するために使用
  // 引数として受け取った value を title 状態に代入して更新
  const changeTitle = (newValue: string) => {
    console.log('changeTitle called with:', newValue);
    title.value = newValue;
  };

  //useTitleで返却する値を記述
  // titleを読み取り専用にして外部からの直接変更を防ぎ、
  // changeTitle関数を通じてのみ更新を許可
  return{ 
    title: readonly(title),
    // 修正前changeTitle: changeTitle(title)
    changeTitle
  }
}

