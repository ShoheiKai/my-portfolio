
"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Card from "./Card";

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [imgSrc, setImgSrc] = useState("/img/dark.png");

  useEffect(() => {
    // コンポーネントがマウントされた後にテーマをチェック
    setMounted(true);
  }, []);

  useEffect(() => {
    // マウント後にテーマに応じた画像を設定
    if (mounted) {
      if (resolvedTheme === "dark") {
        setImgSrc("/img/light.png");
      } else {
        setImgSrc("/img/dark.png");
      }
    }
  }, [mounted, resolvedTheme]);

  const handleClick = () => {
    // テーマを切り替え
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null; // マウントされるまで何も表示しない

  return (
    <Card
      onClick={handleClick}
      src={imgSrc}
    />
  );
};

export default ThemeToggle;