// "use client"; // これを追加

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useGLTF, Text3D } from "@react-three/drei";
import { Suspense } from "react";
import { Vector3, Euler } from "three";
import Loading from "@/app/loading";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

function MainVisualMobile(props: any) {
  const { scene } = useGLTF("/main_Daruma3.gltf");
  const [data, setData] = useState<any>(null); // データの型を適切に指定する

  const [loading, setLoading] = useState(true);
  scene.position.set(0, -1.8, 0); // x, y, zの位置を指定
  const [scale, setScale] = useState<Vector3>(new Vector3(0.6, 0.6, 0.6)); // 初期スケール
  const [targetScale, setTargetScale] = useState<Vector3>(
    new Vector3(0.6, 0.6, 0.6)
  ); // 目標スケール
  const [hovered, hover] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isMouseInCanvas, setIsMouseInCanvas] = useState(true);
  const [targetRotation, setTargetRotation] = useState<Euler>(
    new Euler(0, 0, 0)
  );
  const [currentRotation, setCurrentRotation] = useState<Euler>(
    new Euler(0, 0, 0)
  );
  const [bounceState, setBounceState] = useState({
    bouncing: false,
    startTime: 0,
    bounceCount: 0,
  });
  // テキスト位置のアニメーション用状態
  const [text1Position, setText1Position] = useState<Vector3>(
    new Vector3(-3, 0, -2)
  );
  const [text2Position, setText2Position] = useState<Vector3>(
    new Vector3(0,20, -2)
  );
  const [text3Position, setText3Position] = useState<Vector3>(
    new Vector3(-3.5, -8, -2)
  );

  const bounceDuration = 500; // 「はねる」アニメーションの期間（ミリ秒）
  const bounceAmplitude = 0.5; // はねる幅

  // 回転の最大値を設定
  const maxRotationX = Math.PI / 10; // 上下回転の最大値
  const maxRotationY = Math.PI / 10; // 左右回転の最大値

  const handleClick = () => {
    if (!clicked) {
      setClicked(true); // クリック状態をtrueにする
      setTargetScale(new Vector3(0.7, 0.7, 0.7)); // サイズを変更

      // 「はねる」アニメーションを開始
      setBounceState({
        bouncing: true,
        startTime: performance.now(),
        bounceCount: 0, // はねる回数をリセット
      });

      // 一定時間後にサイズを元に戻し、クリック状態をfalseにする
      setTimeout(() => {
        setTargetScale(new Vector3(0.6, 0.6, 0.6)); // 元のサイズに戻す
        setClicked(false); // クリック状態をfalseに戻す
        setBounceState((prevState) => ({
          ...prevState,
          bouncing: false, // アニメーション終了
        }));
      }, bounceDuration * 2); // 2回分の「はねる」アニメーションの時間
    }
  };

  const Rig = () => {
    return useFrame((state) => {
      setText1Position(
        (prevPosition) =>
          new Vector3(
            prevPosition.x,
            Math.sin(Date.now() * 0.001) * 0.2 + 3,
            prevPosition.z
          )
      );
      setText2Position(
        (prevPosition) =>
          new Vector3(
            prevPosition.x,
            Math.sin(Date.now() * 0.001 + 1) * 0.2,
            prevPosition.z
          )
      );
      setText3Position(
        (prevPosition) =>
          new Vector3(
            prevPosition.x,
            Math.sin(Date.now() * 0.001 + 2) * 0.2 - 3,
            prevPosition.z
          )
      );
      const { pointer } = state;

      // マウスがCanvasの範囲内かどうかに応じて回転を設定
      if (isMouseInCanvas) {
        setTargetRotation(
          new Euler(
            Math.max(
              -maxRotationX,
              Math.min(-pointer.y * maxRotationX, maxRotationX)
            ),
            Math.max(
              -maxRotationY,
              Math.min(pointer.x * maxRotationY, maxRotationY)
            ),
            0
          )
        );
      } else {
        // Canvas外に出た場合、回転をスムーズにリセット
        setTargetRotation(new Euler(0, 0, 0));
      }

      // 現在の回転を補間してスムーズにリセット
      const smoothFactor = 0.05; // スムーズに戻る速度
      currentRotation.x +=
        (targetRotation.x - currentRotation.x) * smoothFactor;
      currentRotation.y +=
        (targetRotation.y - currentRotation.y) * smoothFactor;
      currentRotation.z +=
        (targetRotation.z - currentRotation.z) * smoothFactor;

      scene.rotation.copy(currentRotation);

      // サイズをゆっくりと補間して戻す
      const scaleSmoothFactor = 0.1; // サイズが戻るスピード
      setScale((prevScale) => {
        return new Vector3(
          prevScale.x + (targetScale.x - prevScale.x) * scaleSmoothFactor,
          prevScale.y + (targetScale.y - prevScale.y) * scaleSmoothFactor,
          prevScale.z + (targetScale.z - prevScale.z) * scaleSmoothFactor
        );
      });

      scene.scale.copy(scale); // スケールを適用

      // 「はねる」アニメーション
      if (bounceState.bouncing) {
        const elapsed = performance.now() - bounceState.startTime;
        const progress = Math.min(elapsed / bounceDuration, 1);
        const bounceAmount = Math.sin(progress * Math.PI) * bounceAmplitude; // はねる量

        // 「はねる」アニメーション
        scene.position.y = -2 + bounceAmount;

        // 2回はねるアニメーションの処理
        if (elapsed >= bounceDuration) {
          setBounceState((prevState) => ({
            ...prevState,
            startTime: performance.now(), // 次の「はねる」を開始
            bounceCount: prevState.bounceCount + 1,
          }));
        }

        if (bounceState.bounceCount >= 2) {
          // 2回の「はねる」が終了した後、位置をリセット
          scene.position.y = -2;
          setBounceState((prevState) => ({
            ...prevState,
            bouncing: false, // アニメーション終了
          }));
        }
      }
    });
  };

  useEffect(() => {
    // データフェッチをシミュレートするために setTimeout を使用
    const fetchData = async () => {
      try {
        // ここに実際のデータフェッチコードを記述
        const response = await fetch("/api/data"); // API エンドポイントを指定
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // データフェッチが完了したらローディングを終了
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Canvas
      style={{ width: "95%", height: "500px" }}
      onMouseEnter={() => setIsMouseInCanvas(true)}
      onMouseLeave={() => setIsMouseInCanvas(false)}
      onClick={handleClick} // クリックイベントを追加
    >
      <Suspense fallback={null}>
        {/* ライトの設定 */}
        <directionalLight
          color="white"
          position={[3, 5, 100]}
          intensity={1.8}
        />
        <directionalLight
          color="white"
          position={[-3, 5, 100]}
          intensity={1.8}
        />
        {/* モデルをレンダリング */}
        <primitive object={scene} {...props} />
        <Rig />
        <Text3D
          position={text1Position} // 文字の位置を調整
          rotation={[0.1, 0.3, 0]} // 右側が前に出るように傾ける
          font="/Shippori_Mincho_B1_ExtraBold_Regular.json" // フォントファイルへのパス
          height={0.2} // 厚みを追加
          size={0.7} // 文字のサイズ
        >
          Welcome to My
          <meshNormalMaterial />
        </Text3D>
        {/* <Text3D
          position={text2Position} // 文字の位置を調整
          rotation={[0, -0.4, 0.1]} // 右側が前に出るように傾ける
          font="/Shippori_Mincho_B1_ExtraBold_Regular.json" // フォントファイルへのパス
          height={0.2} // 厚みを追加
          size={0.7} // 文字のサイズ
        >
          KAI’s
          <meshNormalMaterial />
        </Text3D> */}
        <Text3D
          position={text3Position} // 文字の位置を調整
          rotation={[0.1, -0.3, 0.1]} // 右側が前に出るように傾ける
          font="/Shippori_Mincho_B1_ExtraBold_Regular.json" // フォントファイルへのパス
          height={0.2} // 厚みを追加
          size={0.7} // 文字のサイズ
        >
          Portfolio site
          <meshNormalMaterial />
        </Text3D>
      </Suspense>
    </Canvas>
  );
}

export default MainVisualMobile;

// GLTFファイルの事前読み込み
// useGLTF.preload("/main-Daruma3.gltf");
