// components/ScrollListener.tsx

// useEffect を React からインポート
import { useEffect } from 'react'

// ScrollListener という関数コンポーネントを作成
const ScrollListener = () => {
  // useEffect フックを使用。
  // このフックは、コンポーネントのマウント後、アンマウント前、
  // および更新後に実行される処理を記述するためのもの
  useEffect(() => {
    // handleScroll 関数を定義。
    // この関数は window（ブラウザウィンドウ）のスクロール位置を取得し、
    // それをコンソールに出力する
    const handleScroll = () => {
      console.log(window.scrollY)
      // window.scrollY は、現在のスクロール位置をピクセル単位で表す
    }

    // window（ブラウザウィンドウ）のスクロールイベントに対して、
    // handleScroll 関数をイベントリスナーとして登録
    window.addEventListener('scroll', handleScroll)

    // useEffect の cleanup 処理。
    // コンポーネントがアンマウントされる（ページから削除される）ときに実行される
    // ここでは、window のスクロールイベントリスナーを削除している。
    // これにより、コンポーネントが存在しない場合でも
    // handleScroll 関数が実行されないようにする
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []) // useEffect の依存配列。
  // ここが空の配列（[]）なので、
  // この useEffect フック内の処理は
  // コンポーネントの初回マウント時とアンマウント時のみに実行される

  // ScrollListener コンポーネントの表示部分。
  // ここではシンプルな div 要素を表示している
  return <div>Scroll Listener</div>
}

// ScrollListener コンポーネントを
// export（他のファイルからインポート可能にする）
export default ScrollListener