import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center min-h-dvh">
      <div>
        <Image
          src="/img/daurma-drop.png"
          alt="Loading..."
          width={300}
          height={300}
          className="" // グローバルスタイルクラス名を追加
        />
      </div>
      <p className="text-6xl text-center dark:text-slate-100">Loding...</p>
    </div>
  );
};

export default Loading;

