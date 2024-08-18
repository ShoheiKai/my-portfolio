import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { shipmincho } from "../utiles/fonts";
import { notojp } from "../utiles/fonts";
import { cookies } from "next/headers";
// import { ColorModeChoice, ThemeRegistry } from "@/libs/theme/ThemeRegistry";
// import ThemeProvider from "./components/ThemeProvider";
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KAI's Potfolio",
  description: "エンジニアKAIのポートフォリオサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      // style={style}
      className={`${shipmincho.variable} dark`}
      suppressHydrationWarning
    >
      <body className={inter.className}>
        {/* {children} */}
        {/* <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider> */}
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
