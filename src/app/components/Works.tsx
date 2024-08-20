'use client'
import React from "react";
import swagData from "../data";
import dynamic from "next/dynamic";
// import Card from "../works/components/Card/Card";
import { delay, motion, useAnimationControls } from "framer-motion";
import WorksCard from "./WorksCard";

function Works() {
  const data = swagData;

  const textAnimation = {
    hInit: {
      opacity: 0,
      y: -15,
    },
    hVisible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
    pInit: {
      opacity: 0,
      y: 15,
    },
    pVisible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 1.5,
        ease: "easeOut",
      },
    }),
    itemInit: {
      opacity: 0,
      // scale: 0,
      // y:-50
    },
    itemVisible: {
      opacity: 1,
      // scale: 1,
      // y:0,
      transition: {
        // type: "spring",
        duration: 1.2,
        // bounce: 0.7,
        delay: 1.2,
        // ease: "easeOut",
      },
    },
  };

   // アイテムが1つの場合、md以上の画面サイズでは中央に配置するクラス
   const gridColsClass =
   data.length === 1
     ? "grid-cols-1 md:grid-cols-1 justify-items-center"
     : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3";

  return (
    <>
      <motion.h1
        viewport={{ once: true }}
        initial="hInit"
        whileInView="hVisible"
        variants={textAnimation}
        className="mb-8 md:mb-10 font-shipmincho font-extrabold text-3xl md:text-4xl text-center"
      >
        Works
      </motion.h1>
      <div className="leading-relaxed text-sm md:leading-loose md:text-lg">
        <motion.p
          viewport={{ once: true }}
          custom={0}
          initial="pInit"
          whileInView="pVisible"
          variants={textAnimation}
          className="font-notojp text-center hidden md:block"
        >
          では最後に、ワクワクの思いを詰め込んだ私の成果物たちです。
        </motion.p>

        {/* モバイル対応 */}
        <motion.p
          viewport={{ once: true }}
          custom={0}
          initial="pInit"
          whileInView="pVisible"
          variants={textAnimation}
          className="font-notojp text-center block md:hidden "
        >
          では最後に、ワクワクの思いを詰め込んだ
        </motion.p>
        <motion.p
          viewport={{ once: true }}
          custom={0}
          initial="pInit"
          whileInView="pVisible"
          variants={textAnimation}
          className="font-notojp text-center block md:hidden "
        >
          私の成果物たちです。
        </motion.p>
      </div>
      <motion.div
        viewport={{ once: true }}
        initial="itemInit"
        whileInView="itemVisible"
        variants={textAnimation}
        className={`grid auto-rows-max gap-6 m-10 ${gridColsClass}`}
        // className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max gap-6 m-10 "
      >
        {data.map(({ id, title, imageSrc, description, href }) => (
          <WorksCard
            key={id}
            id={id}
            title={title}
            imageSrc={imageSrc}
            description={description}
            href={href}
          ></WorksCard>
        ))}
      </motion.div>
    </>
  );
}

export default Works;
