"use client"; // これを追加

import Card from "./components/Card";
import { Suspense, useEffect, useRef, useState } from "react";
import Loading from "./loading";
import dynamic from "next/dynamic";
import MainVisual from "./components/MainVisual";
import MobileMenu from "./components/MobileMenu";
import MainVisualMobile from "./components/MainVisualMobile";
import { animateScroll as scroll, Link as LinkScroll } from "react-scroll";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  // // useStateフックを使って画像のパスを管理
  // const { toggleColorMode, selectedMode } = useColorModeContext();

  // 各コンポーネントの読み込み
  const AboutThisSite = dynamic(() => import("./components/AboutThisSite"), {
    ssr: false,
  });
  const AboutMe = dynamic(() => import("./components/AboutMe"), { ssr: false });
  const MySkill = dynamic(() => import("./components/MySkill"), { ssr: false });
  const Profile = dynamic(() => import("./components/Profile"), { ssr: false });
  const Works = dynamic(() => import("./components/Works"), { ssr: false });
  const Contact = dynamic(() => import("./components/Contact"), { ssr: false });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      {/* <body> */}
      {/* ヘッダー */}
      <header
        id="Header"
        className="font-shipmincho font-extrabold text-xl dark:text-dark-color text-main-color animate-rotate-x animate-once"
      >
        <div className="container mx-auto p-4 flex justify-between">
          <div className="">
            <ThemeToggle />
          </div>
          {/* PC版ナビゲーション */}
          <nav className="md:ml-auto hover:cursor-pointer hidden md:block">
            {/* <a
              href="#Header"
              className="mr-10 transform hover:text-2xl duration-200 hover:border-b-4 hover:border-dark-light"
              style={{ lineHeight: "normal" }}
            >
              Top
            </a> */}
            <LinkScroll
              to="About"
              smooth={true}
              duration={600}
              offset={0}
              className="mr-10 transform hover:text-2xl duration-200 hover:border-b-4 hover:border-dark-light "
            >
              About this site
            </LinkScroll>
            <LinkScroll
              to="AboutMe"
              smooth={true}
              duration={1000}
              offset={0}
              className="mr-10 transform hover:text-2xl duration-200 hover:border-b-4 hover:border-dark-light"
            >
              About me
            </LinkScroll>
            <LinkScroll
              to="MySkill"
              smooth={true}
              duration={1000}
              offset={0}
              className="mr-10 transform hover:text-2xl duration-200 hover:border-b-4 hover:border-dark-light"
            >
              My skill
            </LinkScroll>
            <LinkScroll
              to="Portfolio"
              smooth={true}
              duration={1000}
              offset={0}
              className="mr-10 transform hover:text-2xl duration-200 hover:border-b-4 hover:border-dark-light"
            >
              Portfolio
            </LinkScroll>
            <LinkScroll
              to="Contact"
              smooth={true}
              duration={1000}
              offset={0}
              className="mr-10 transform hover:text-2xl duration-200 hover:border-b-4 hover:border-dark-light"
            >
              Contact
            </LinkScroll>
          </nav>
          {/* モバイル版ハンバーガーメニュー */}
          <div className="block md:hidden">
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="container mx-auto  text-main-color ">
        <div className="hidden md:block">
          <ScrollToTopButton
            showAfter={200}
            hideBefore={6600}
          />
        </div>
        {/* メインビジュアル */}
        <Suspense fallback={<Loading />}>
          <section id="1" className="">
            <div className=" hover:cursor-pointer hidden md:block">
              <MainVisual />
            </div>
            <div className="flex flex-col justify-center items-center hover:cursor-pointer md:hidden">
              <MainVisualMobile />
            </div>
          </section>
        </Suspense>

        {/* About this site */}
        <section id="About" className="">
          {/* <div>
          <ScrollListener
          ></ScrollListener>
          </div> */}
          <div className="bg-slate-200 flex flex-col justify-center items-center min-h-svh">
            <AboutThisSite />
          </div>
        </section>

        {/* About Me */}
        <section id="AboutMe" className="">
          <div className="flex flex-col justify-center items-center mt-10 md:mt-5 min-h-svh">
            <AboutMe />
          </div>
        </section>

        {/* My Skill */}
        <section id="MySkill" className="">
          <div className="bg-slate-200 flex flex-col justify-center items-center min-h-svh">
            <MySkill />
          </div>
        </section>

        {/* Profile */}
        <section id="Portfolio" className="">
          <div className="flex flex-col justify-center items-center min-h-svh">
            <Profile />
          </div>
        </section>

        {/* Works */}
        <section id="Works" className="">
          <div className="bg-slate-200 flex flex-col justify-center items-center min-h-svh">
            <Works />
          </div>
        </section>

        {/* Contact */}
        <section id="Contact" className="">
          <div className="bg-slate-50 flex flex-col justify-center items-center min-h-svh">
            <Contact />
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="font-shipmincho font-extrabold text-xl text-main-color ">
        <div className="container mx-auto min-h-96 max-h-96 flex flex-col items-center ">
          <div className="bg-yellow-100 min-h-80 w-full flex flex-col justify-center items-center">
            <div className="relative bg-yellow-100 rounded-full w-24 h-24 translate-y-[-120px] flex items-center justify-center transform duration-500 hover:duration-500 hover:scale-125">
              <button
                onClick={scrollToTop}
                className="relative translate-y-[-45px] after:border-x-[30px] after:border-b-[40px] after:border-transparent after:border-b-dark-light "
              ></button>
            </div>
            <div className="relative translate-y-[-50px]">
              <h2 className="text-3xl md:text-5xl">Thank you for coming</h2>
            </div>
          </div>
          <div className="bg-custom-dark-light min-h-16 w-full flex flex-col justify-center items-center">
            <div>&copy;2024 Kai Shohei</div>
          </div>
        </div>
      </footer>
      {/* </body> */}
    </>
  );
}
