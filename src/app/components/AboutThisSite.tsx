import React, { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

function AboutThisSite() {
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
        duration: 0.8,
        ease: "easeOut",
      },
    }),
    p2Visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <motion.h1
        viewport={{ once: true }}
        initial="hInit"
        whileInView="hVisible"
        variants={textAnimation}
        className="font-shipmincho font-extrabold mb-16 text-5xl md:mb-24 text-center"
      >
        About this site
      </motion.h1>
      <div className="font-notojp text-xl leading-loose text-center md:text-2xl md:leading-loose">
        <motion.p
          viewport={{ once: true }}
          custom={0}
          initial="pInit"
          whileInView="pVisible"
          // animate={controls}
          variants={textAnimation}
          className="hidden md:block" //animate-fade-up animate-duration-[1000ms] animate-once animate-ease-in-out animate-fade-down animate-duration-[1000ms] animate-once animate-ease-in-out
        >
          ここは、甲斐翔平のポートフォリオサイトです。
        </motion.p>
        <motion.p
          viewport={{ once: true }}
          custom={1}
          initial="pInit"
          whileInView="pVisible"
          variants={textAnimation}
          className="hidden md:block"
        >
          訪れてくれたあなたにもっと私のことを知って欲しくて作成しました。
        </motion.p>
        <motion.p
          viewport={{ once: true }}
          custom={2}
          initial="pInit"
          whileInView="pVisible"
          variants={textAnimation}
          className="hidden md:block"
        >
          ものづくりを通して、あなたとワクワクできる時間を共有できると嬉しいです。
        </motion.p>
        <motion.p
          viewport={{ once: true }}
          custom={3}
          initial="pInit"
          whileInView="pVisible"
          variants={textAnimation}
          className="hidden md:block"
        >
          紅茶を片手にくつろぎながら見ていってください。
        </motion.p>

        {/* モバイル時対応 */}
        <motion.p
          viewport={{ once: true }}
          custom={0}
          initial="pInit"
          whileInView="p2Visible"
          // animate={controls}
          variants={textAnimation}
          className="block md:hidden" //animate-fade-up animate-duration-[1000ms] animate-once animate-ease-in-out animate-fade-down animate-duration-[1000ms] animate-once animate-ease-in-out
        >
          ここは、甲斐翔平の
        </motion.p>
        <motion.p
          viewport={{ once: true }}
          custom={1}
          initial="pInit"
          whileInView="p2Visible"
          variants={textAnimation}
          className="block md:hidden"
        >
          ポートフォリオサイトです。
        </motion.p>
        <motion.p
          viewport={{ once: true }}
          custom={2}
          initial="pInit"
          whileInView="p2Visible"
          variants={textAnimation}
          className="block md:hidden"
        >
          訪れてくれたあなたにもっと
        </motion.p>
        <motion.p
          viewport={{ once: true }}
          custom={3}
          initial="pInit"
          whileInView="p2Visible"
          variants={textAnimation}
          className="block md:hidden"
        >
          私のことを知って欲しくて作成しました。
        </motion.p>
        <motion.p
          viewport={{ once: true }}
          custom={4}
          initial="pInit"
          whileInView="p2Visible"
          variants={textAnimation}
          className="block md:hidden"
        >
        </motion.p>
        <motion.p
          viewport={{ once: true }}
          custom={5}
          initial="pInit"
          whileInView="p2Visible"
          variants={textAnimation}
          className="block md:hidden"
        >
          ものづくりを通して
        </motion.p>
        <motion.p
          viewport={{ once: true }}
          custom={6}
          initial="pInit"
          whileInView="p2Visible"
          variants={textAnimation}
          className="block md:hidden"
        >
          あなたとワクワクできる時間を
        </motion.p>
        <motion.p
          viewport={{ once: true }}
          custom={7}
          initial="pInit"
          whileInView="p2Visible"
          variants={textAnimation}
          className="block md:hidden"
        >
          共有できると嬉しいです。
        </motion.p>
        <motion.p
          viewport={{ once: true }}
          custom={8}
          initial="pInit"
          whileInView="p2Visible"
          variants={textAnimation}
          className="block md:hidden"
        >
          紅茶を片手にくつろぎながら
        </motion.p>
        <motion.p
          viewport={{ once: true }}
          custom={9}
          initial="pInit"
          whileInView="p2Visible"
          variants={textAnimation}
          className="block md:hidden"
        >
          ゆっくり見ていってください。
        </motion.p>
      </div>
    </>
  );
}

export default AboutThisSite;
