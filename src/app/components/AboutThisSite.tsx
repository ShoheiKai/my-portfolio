import React, { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";

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
    dropInit: {
      opacity: 0,
    },
    dropVisible: (index: number) => ({
      opacity: 1,
      transition: {
        repeat: Infinity,
        delay: index * 1.0,
        duration: index * 1.5,
        // ease: "easeOut",
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
        className="font-shipmincho font-extrabold pt-16 mb-20 text-3xl md:pt-0 md:mt-40 md:text-4xl md:mb-24 text-center"
      >
        About this site
      </motion.h1>
      <div className="flex flex-col md:flex-row md:mt-4">
        <div className="font-notojp text-sm leading-loose tracking-wider text-center md:mb-10 md:text-lg md:leading-loose">
          <motion.p
            viewport={{ once: true }}
            custom={0}
            initial="pInit"
            whileInView="pVisible"
            // animate={controls}
            variants={textAnimation}
            className="hidden md:block" 
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
            紅茶をでも片手にくつろぎながら見ていってください。
          </motion.p>

          {/* モバイル時対応 */}
          <motion.p
            viewport={{ once: true }}
            custom={0}
            initial="pInit"
            whileInView="p2Visible"
            // animate={controls}
            variants={textAnimation}
            className="block md:hidden" 
          >
            ここは、甲斐翔平のポートフォリオサイトです。
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            custom={1}
            initial="pInit"
            whileInView="p2Visible"
            variants={textAnimation}
            className="block md:hidden"
          >
            訪れてくれたあなたにもっと
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            custom={2}
            initial="pInit"
            whileInView="p2Visible"
            variants={textAnimation}
            className="block md:hidden"
          >
            私のことを知って欲しくて作成しました。
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            custom={3}
            initial="pInit"
            whileInView="p2Visible"
            variants={textAnimation}
            className="block md:hidden"
          >
            ものづくりを通してあなたと
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            custom={4}
            initial="pInit"
            whileInView="p2Visible"
            variants={textAnimation}
            className="block md:hidden"
          >
            ワクワクできる時間を共有できると嬉しいです。
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            custom={5}
            initial="pInit"
            whileInView="p2Visible"
            variants={textAnimation}
            className="block md:hidden"
          >
            紅茶を片手にくつろぎながら
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            custom={6}
            initial="pInit"
            whileInView="p2Visible"
            variants={textAnimation}
            className="block md:hidden"
          >
            ゆっくり見ていってください。
          </motion.p>
        </div>
        <div className="relative top-0 right-0 w-100 h-80 md:w-400 md:h-400 md:relative md:top-0 md:left-0 md:right-56 scale-75 md:scale-100">
          <div className="absolute w-16 h-16 top-0 right-2 md:top-10 md:-right-40">
            <Image
              src="/img/pot.png"
              alt="ティーポット"
              width={80}
              height={80}
              className="-rotate-[20deg]"
            />
          </div>
          <div className="absolute top-10 right-16 md:top-20 md:-right-24 md:left-auto">
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ repeat: Infinity, duration: 2, delay: 0 }}
              className="text-4xl"
            >
              ・
            </motion.div>
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ repeat: Infinity, duration: 2.2, delay: 0 }}
              className="text-2xl"
            >
              ・
            </motion.div>
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ repeat: Infinity, duration: 2.4, delay: 0 }}
              className="text-lg"
            >
              ・
            </motion.div>
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ repeat: Infinity, duration: 2.6, delay: 0 }}
              className="text-base"
            >
              ・
            </motion.div>
          </div>
          <div className="absolute bottom-20 right-12 w-20 h-20 md:bottom-4 md:-right-28 md:left-auto">
            <Image
              src="/img/teeCup.png"
              alt="ティーカップ"
              width={80}
              height={80}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutThisSite;
