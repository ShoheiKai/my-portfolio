import React from "react";
import SkillRadarChart_1 from "./SkillRadarChart_1";
import SkillRadarChart_2 from "./SkillRadarChart_2";
import { delay, motion, useAnimationControls } from "framer-motion";
import dynamic from "next/dynamic";
// import PendulumSkillSet from './PendulumSkillSet';

function MySkill() {
  const PendulumSkillSet = dynamic(() => import("./PendulumSkillSet"), {
    ssr: false,
  });
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
        delay: index * 0.5,
        duration: 1.3,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <div className="mt-8 md:mt-12 mb-8 container mx-auto ">
        <motion.h1
          viewport={{ once: true }}
          initial="hInit"
          whileInView="hVisible"
          variants={textAnimation}
          className="font-shipmincho font-extrabold mb-14 md:mb-20 text-3xl md:text-4xl text-center"
        >
          My skill set
        </motion.h1>
        <PendulumSkillSet />
        <div className="font-notojp mt-10 md:mt-16 px-2 flex flex-col justify-center items-center leading-relaxed md:leading-loose md:tracking-wider text-sm md:text-lg ">
        <motion.p
          viewport={{ once: true }}
          custom={1}
          initial="pInit"
          whileInView="pVisible"
          variants={textAnimation}
          className=""
        >
          表現の幅を広げるために、
          いろいろな技術にふれることを大事にしています。
          </motion.p>
          <motion.p
          viewport={{ once: true }}
          custom={2}
          initial="pInit"
          whileInView="pVisible"
          variants={textAnimation}
          className=""
        >
          これからは、AI技術を用いたコンテンツの作成にも力を入れていきます。
        </motion.p>
        </div>
      </div>
    </>
  );
}

export default MySkill;
