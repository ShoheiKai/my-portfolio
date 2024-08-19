"use client"; // これを追加

import React from "react";
import Image from "next/image";
import { delay, motion, useAnimationControls } from "framer-motion";

function AboutMe() {
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
      x: 15,
    },
    pVisible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
    imageInit: {
      opacity: 0,
      scale: 0,
      rotate: 360,
      // y:-10
    },
    imageVisible: {
      opacity: 1,
      scale: 1,
      // y:0,
      rotate: 0,
      transition: {
        type: "spring",
        duration: 2.5,
        bounce: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <motion.h1
        viewport={{ once: true }}
        initial="hInit"
        whileInView="hVisible"
        variants={textAnimation}
        className=" font-shipmincho font-extrabold md:mt-5 md:mb-20 md:py-12 text-3xl md:text-4xl text-center dark:text-dark-color"
      >
        About me
      </motion.h1>
      <div className="flex flex-col md:flex-row justify-center items-center dark:text-dark-color">
        <motion.div
          viewport={{ once: true }}
          initial="imageInit"
          whileInView="imageVisible"
          // animate={controls}
          variants={textAnimation}
          whileTap={{ scale: 1.2, rotateX: 10 }}
          className="my-12 md:my-0" //animate-jump-in animate-once animate-duration-[800ms]
        >
          <Image
            src="/img/daruma-icon.png"
            alt="Daruma_Icon"
            width={256}
            height={256}
            // width={100}
            // height={100}
            className="bg-custom-dark-light rounded-xl cursor-pointer"
          />
        </motion.div>
        <div className="py-4 pl-6 pr-4 font-notojp text-sm leading-loose md:tracking-widest md:px-0 md:p-0 md:ml-32 md:text-base md:leading-loose ">
          {/* PCの時に表示する文字量 */}
          <motion.p
            viewport={{ once: true }}
            custom={0}
            initial="pInit"
            whileInView="pVisible"
            // animate={controls}
            variants={textAnimation}
            className="hidden md:block" //animate-fade-left animate-once animate-ease-out
          >
            宮崎生まれ宮崎育ち、野原を駆け巡る野生児でした。
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            custom={1}
            initial="pInit"
            whileInView="pVisible"
            // animate={controls}
            variants={textAnimation}
            className="hidden md:block"
          >
            中学の時に初めてPCで、ディスプレイ上で動く時計を表
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            custom={2}
            initial="pInit"
            whileInView="pVisible"
            // animate={controls}
            variants={textAnimation}
            className="hidden md:block"
          >
            示できた感動からエンジニアを志し、宮崎大学で情報系
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            custom={3}
            initial="pInit"
            whileInView="pVisible"
            // animate={controls}
            variants={textAnimation}
            className="hidden md:block"
          >
            の学科に通いながら、情報技術の学習を行いました。
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            custom={4}
            initial="pInit"
            whileInView="pVisible"
            // animate={controls}
            variants={textAnimation}
            className="hidden md:block"
          >
            社会に出てからは、バーテンダーや某キャラクターの代理店
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            custom={5}
            initial="pInit"
            whileInView="pVisible"
            // animate={controls}
            variants={textAnimation}
            className="hidden md:block"
          >
            の営業職に従事していましたが、ものづくりの楽しさが忘れ
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            custom={6}
            initial="pInit"
            whileInView="pVisible"
            // animate={controls}
            variants={textAnimation}
            className="hidden md:block"
          >
            られず、受託開発・SES事業を行う会社に転職。上流工程
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            custom={7}
            initial="pInit"
            whileInView="pVisible"
            // animate={controls}
            variants={textAnimation}
            className="hidden md:block"
          >
            から下流工程まで幅広い内容のプロジェクトに参画し、
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            custom={8}
            initial="pInit"
            whileInView="pVisible"
            // animate={controls}
            variants={textAnimation}
            className="hidden md:block"
          >
            フロントエンド、バックエンド問わず経験を積んできました。
          </motion.p>

          {/* モバイルの時の一列分の文章量を変更する */}
          <motion.p
            viewport={{ once: true }}
            custom={0}
            initial="pInit"
            whileInView="pVisible"
            // animate={controls}
            variants={textAnimation}
            className="block md:hidden" //animate-fade-left animate-once animate-ease-out
          >
            宮崎生まれ宮崎育ち、野原を駆け巡る野生児でした。
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            custom={1}
            initial="pInit"
            whileInView="pVisible"
            // animate={controls}
            variants={textAnimation}
            className="block md:hidden"
          >
            中学の時に初めてPCで、ディスプレイ上で動く時計を表示できた感動からエンジニアを志し、宮崎大学で情報系の学科に通いながら、情報技術の学習を行いました。
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            custom={2}
            initial="pInit"
            whileInView="pVisible"
            // animate={controls}
            variants={textAnimation}
            className="block md:hidden"
          >
            社会に出てからは、バーテンダーや某キャラクターの代理店の営業職に従事していましたが、ものづくりの楽しさが忘れられず、受託開発・SES事業を行う会社に転職。
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            custom={3}
            initial="pInit"
            whileInView="pVisible"
            // animate={controls}
            variants={textAnimation}
            className="block md:hidden"
          >
            上流工程から下流工程まで幅広い内容のプロジェクトに参画し、フロントエンド、バックエンド問わず経験を積んできました。
          </motion.p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
