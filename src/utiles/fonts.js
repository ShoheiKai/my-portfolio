import { Shippori_Mincho_B1 } from "next/font/google";
import { Noto_Sans_JP } from "next/font/google";

export const shipmincho = Shippori_Mincho_B1({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-shipmincho",
  display: "swap",
});

export const notojp = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-notojp",
  display: "swap",
});