import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { delay, motion, useAnimationControls } from "framer-motion";

function Profile() {
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
        duration: 1.3,
        ease: "easeOut",
      },
    }),
    itemInit: {
      opacity: 0,
      x: -15,
    },
    itemVisible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.7,
        ease: "easeOut",
      },
    },
    item2Init: {
      opacity: 0,
      x: 20,
    },
    item2Visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        // duration: 1.1,
        duration: 0.8,
        delay: index * 0.7,
        ease: "easeOut",
      },
    }),
    imageInit: {
      opacity: 0,
      scale: 0,
      // x: 20,
    },
    imageVisible: (index: number) => ({
      opacity: 1,
      scale: 1,
      // x: 0,
      transition: {
        // duration: 1.1,
        duration: 0.8,
        delay: index * 0.7,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <div className="mt-12 mb-10 ">
        <motion.h1
          viewport={{ once: true }}
          initial="hInit"
          whileInView="hVisible"
          variants={textAnimation}
          className="mb-5 md:mb-10 font-shipmincho dark:text-dark-color font-extrabold text-3xl md:text-4xl text-center "
        >
          Profile
        </motion.h1>
        <motion.p
          viewport={{ once: true }}
          initial="pInit"
          whileInView="pVisible"
          variants={textAnimation}
          className="mb-12 font-notojp dark:text-dark-color text-lg text-center hidden md:block"
        >
          紅茶ももう少しありますね。一緒に私の人生もふりかえりましょう。
        </motion.p>

        {/* モバイル対応 */}
        <div className="leading-loose text-sm dark:text-dark-color">
          <motion.p
            viewport={{ once: true }}
            initial="pInit"
            whileInView="pVisible"
            variants={textAnimation}
            className="font-notojp  tracking-widest text-center block md:hidden "
          >
            紅茶ももう少しありますね。
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            initial="pInit"
            whileInView="pVisible"
            variants={textAnimation}
            className="mb-12 font-notojp tracking-widest text-center block md:hidden "
          >
            一緒に私の人生もふりかえりましょう。
          </motion.p>
        </div>

        <div className="flex flex-col w-3/4 mx-auto dark:text-dark-color">
          <div id="1" className="mb-10">
            <div className="flex font-shipmincho font-extrabold mb-4">
              <motion.div
                viewport={{ once: true }}
                initial="itemInit"
                whileInView="itemVisible"
                variants={textAnimation}
                className="my-auto mr-12 md:mr-24"
              >
                <p className="text-2xl md:text-3xl">1997～</p>
                <p className="text-lg md:text-xl">生誕</p>
              </motion.div>
              <motion.div
                viewport={{ once: true }}
                custom={1}
                initial="imageInit"
                whileInView="imageVisible"
                variants={textAnimation}
                className="flex"
              >
                <Image
                  src="/img/miyazaki.png"
                  //画像のパスをsrcで受け取る
                  alt="宮崎画像"
                  //altの文言をaltで受け取る
                  width={400}
                  height={400}
                  className="rounded-full w-40 h-40 hidden md:block"
                />
                {/* モバイル対応 */}
                <Image
                  src="/img/miyazaki.png"
                  //画像のパスをsrcで受け取る
                  alt="宮崎画像"
                  //altの文言をaltで受け取る
                  width={200}
                  height={200}
                  className="rounded-full w-32 h-32  block md:hidden"
                />
              </motion.div>
            </div>
            <div className="flex justify-end border-b-2">
              <div className="md:w-3/4">
                <motion.div
                  viewport={{ once: true }}
                  custom={1}
                  initial="item2Init"
                  whileInView="item2Visible"
                  variants={textAnimation}
                  className="md:px-5 md:py-4 mb-4"
                >
                  <p className="text-base mb-2 md:text-xl font-bold">
                    宮崎県宮崎市で生まれる
                  </p>
                  <p className="text-sm md:text-base font-medium">
                    記憶は定かではないが両親・姉兄に支えられすくすくと育った。
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
          <div id="2" className="mb-10 dark:text-dark-color">
            <div className="flex flex-col md:flex-row font-shipmincho font-extrabold mb-4">
              <motion.div
                viewport={{ once: true }}
                initial="itemInit"
                whileInView="itemVisible"
                variants={textAnimation}
                className="my-auto mr-12 mb-3 md:mb-0 md:mr-24"
              >
                <p className="text-2xl md:text-3xl">2013～</p>
                <p className="text-lg md:text-xl">幼少～高校</p>
              </motion.div>
              <div className="flex flex-1">
                <motion.div
                  viewport={{ once: true }}
                  custom={1}
                  initial="imageInit"
                  whileInView="imageVisible"
                  variants={textAnimation}
                >
                  <Image
                    src="/img/judo.png"
                    //画像のパスをsrcで受け取る
                    alt="柔道画像"
                    //altの文言をaltで受け取る
                    width={400}
                    height={400}
                    className="rounded-full w-40 h-40 mr-14 hidden md:block"
                  />
                  {/* モバイル対応 */}
                  <Image
                    src="/img/judo.png"
                    //画像のパスをsrcで受け取る
                    alt="柔道画像"
                    //altの文言をaltで受け取る
                    width={200}
                    height={200}
                    className="rounded-full w-32 h-32 mr-5 block md:hidden"
                  />
                </motion.div>
                <motion.div
                  viewport={{ once: true }}
                  custom={1}
                  initial="imageInit"
                  whileInView="imageVisible"
                  variants={textAnimation}
                >
                  <Image
                    src="/img/programing.png"
                    //画像のパスをsrcで受け取る
                    alt="プログラミン画像"
                    //altの文言をaltで受け取る
                    width={400}
                    height={400}
                    className="rounded-full w-40 h-40 hidden md:block"
                  />
                  {/* モバイル対応 */}
                  <Image
                    src="/img/programing.png"
                    //画像のパスをsrcで受け取る
                    alt="プログラミン画像"
                    //altの文言をaltで受け取る
                    width={200}
                    height={200}
                    className="rounded-full w-32 h-32 block md:hidden"
                  />
                </motion.div>
              </div>
            </div>
            <div className="flex justify-end border-b-2">
              <div className="md:w-3/4">
                <motion.div
                  viewport={{ once: true }}
                  custom={1}
                  initial="item2Init"
                  whileInView="item2Visible"
                  variants={textAnimation}
                  className=" md:px-5 md:py-4 mb-5 md:mb-4"
                >
                  <p className="mb-2 text-base md:text-xl font-bold">
                    柔道をはじめる
                  </p>
                  <p className="text-sm md:text-base font-medium">
                    兄の背中をみて保育園の年長から柔道をはじめ、大学まで続けました。腐れ縁です。
                  </p>
                </motion.div>
                <motion.div
                  viewport={{ once: true }}
                  custom={1.2}
                  initial="item2Init"
                  whileInView="item2Visible"
                  variants={textAnimation}
                  className="md:px-5 md:py-4 mb-4"
                >
                  <p className="mb-2 text-base md:text-xl font-bold">
                    PCに出会いものづくりの楽しさにふれる
                  </p>
                  <p className="text-sm md:text-base font-medium">
                    ニコニコ動画全盛期の中学時代にPCに出会い、ネットとものづくりの楽しさにふれ、
                    こんなに面白い世界があるのかとのめりこみましたね。
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
          <div id="3" className="mb-10 dark:text-dark-color">
            <div className="flex flex-col md:flex-row font-shipmincho font-extrabold mb-4">
              <motion.div
                viewport={{ once: true }}
                initial="itemInit"
                whileInView="itemVisible"
                variants={textAnimation}
                className="my-auto mr-12 mb-3 md:mb-0 md:mr-24 "
              >
                <p className="text-2xl md:text-3xl">2016～</p>
                <p className="text-lg md:text-xl">大学</p>
              </motion.div>
              <div className="flex flex-1">
                <motion.div
                  viewport={{ once: true }}
                  custom={1}
                  initial="imageInit"
                  whileInView="imageVisible"
                  variants={textAnimation}
                >
                  <Image
                    src="/img/nomikai.png"
                    //画像のパスをsrcで受け取る
                    alt="飲み会画像"
                    //altの文言をaltで受け取る
                    width={400}
                    height={400}
                    className="rounded-full w-40 h-40 mr-14 hidden md:block"
                  />
                  {/* モバイル対応 */}
                  <Image
                    src="/img/nomikai.png"
                    //画像のパスをsrcで受け取る
                    alt="飲み会画像"
                    //altの文言をaltで受け取る
                    width={200}
                    height={200}
                    className="rounded-full w-32 h-32 mr-5 block md:hidden "
                  />
                </motion.div>
                <motion.div
                  viewport={{ once: true }}
                  custom={1}
                  initial="imageInit"
                  whileInView="imageVisible"
                  variants={textAnimation}
                >
                  <Image
                    src="/img/douga.png"
                    //画像のパスをsrcで受け取る
                    alt="編集画像"
                    //altの文言をaltで受け取る
                    width={400}
                    height={400}
                    className="rounded-full w-40 h-40 hidden md:block"
                  />
                  {/* モバイル対応 */}
                  <Image
                    src="/img/douga.png"
                    //画像のパスをsrcで受け取る
                    alt="編集画像"
                    //altの文言をaltで受け取る
                    width={200}
                    height={200}
                    className="rounded-full w-32 h-32 block md:hidden"
                  />
                </motion.div>
              </div>
            </div>
            <div className="flex justify-end border-b-2">
              <div className="md:w-3/4">
                <motion.div
                  viewport={{ once: true }}
                  custom={1}
                  initial="item2Init"
                  whileInView="item2Visible"
                  variants={textAnimation}
                  className=" md:px-5 md:py-4 mb-5 md:mb-4"
                >
                  <p className="mb-2 text-base md:text-xl font-bold">
                    柔道・サークル・お酒、大学生デビューを果たす
                  </p>
                  <p className="text-sm md:text-base font-medium">
                    好奇心の塊で、興味がわいたものにはすぐにとびついていろいろ経験しました。
                  </p>
                </motion.div>
                <motion.div
                  viewport={{ once: true }}
                  custom={1.2}
                  initial="item2Init"
                  whileInView="item2Visible"
                  variants={textAnimation}
                  className=" md:px-5 md:py-4 mb-4"
                >
                  <p className="mb-2 text-base md:text-xl font-bold">
                    動画制作、サイト制作を経験する
                  </p>
                  <p className="text-sm md:text-base font-medium">
                    15秒ほどの動画制作やブログ制作などものづくりに時間たくさん使い気づいたら
                    夜が明けていたこともしばしばありました。
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
          <div id="4" className="mb-10 dark:text-dark-color">
            <div className="flex flex-col md:flex-row font-shipmincho font-extrabold mb-4">
              <motion.div
                viewport={{ once: true }}
                initial="itemInit"
                whileInView="itemVisible"
                variants={textAnimation}
                className="my-auto mr-12 mb-3 md:mb-0 md:mr-24 "
              >
                <p className="text-2xl md:text-3xl">2022～</p>
                <p className="text-lg md:text-xl">社会人突入</p>
              </motion.div>
              <div className="flex flex-1">
                <motion.div
                  viewport={{ once: true }}
                  custom={1}
                  initial="imageInit"
                  whileInView="imageVisible"
                  variants={textAnimation}
                >
                  <Image
                    src="/img/bar-tender.png"
                    //画像のパスをsrcで受け取る
                    alt="バーテンダー画像"
                    //altの文言をaltで受け取る
                    width={400}
                    height={400}
                    className="rounded-full w-40 h-40 mr-14 hidden md:block"
                  />
                  {/* モバイル対応 */}
                  <Image
                    src="/img/bar-tender.png"
                    //画像のパスをsrcで受け取る
                    alt="バーテンダー画像"
                    //altの文言をaltで受け取る
                    width={200}
                    height={200}
                    className="rounded-full w-32 h-32 mr-5 block md:hidden"
                  />
                </motion.div>
                <motion.div
                  viewport={{ once: true }}
                  custom={1}
                  initial="imageInit"
                  whileInView="imageVisible"
                  variants={textAnimation}
                >
                  <Image
                    src="/img/monodukuri.png"
                    //画像のパスをsrcで受け取る
                    alt="ものづくり画像"
                    //altの文言をaltで受け取る
                    width={400}
                    height={400}
                    className="rounded-full w-40 h-40 hidden md:block"
                  />

                  {/* モバイル対応 */}
                  <Image
                    src="/img/monodukuri.png"
                    //画像のパスをsrcで受け取る
                    alt="ものづくり画像"
                    //altの文言をaltで受け取る
                    width={400}
                    height={400}
                    className="rounded-full w-32 h-32 block md:hidden"
                  />
                </motion.div>
              </div>
            </div>
            <div className="flex justify-end border-b-2">
              <div className="md:w-3/4">
                <motion.div
                  viewport={{ once: true }}
                  custom={1}
                  initial="item2Init"
                  whileInView="item2Visible"
                  variants={textAnimation}
                  className=" md:px-5 md:py-4 mb-5 md:mb-4"
                >
                  <p className="mb-2 text-base md:text-xl font-bold">
                    バーテンダーと某キャラクター代理店営業を経験
                  </p>
                  <p className="text-sm md:text-base font-medium">
                    バーテンダーでは店長としてお店の経営も行い、代理店営業では日本全国飛び回り、
                    営業からキャラクターのボディガードまで手がけました。
                  </p>
                </motion.div>
                <motion.div
                  viewport={{ once: true }}
                  custom={1.2}
                  initial="item2Init"
                  whileInView="item2Visible"
                  variants={textAnimation}
                  className=" md:px-5 md:py-4 mb-4"
                >
                  <p className="mb-2 text-base md:text-xl font-bold">
                    忘れられないものづくりの楽しさ
                  </p>
                  <p className="text-sm md:text-base font-medium">
                    働きながらも動画制作やプログラミンの独学は続けて、ものづくりの楽しさを忘れら
                    れず、うずうずしていました。
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
          <div id="5" className="md:mb-10 dark:text-dark-color">
            <div className="flex flex-col md:flex-row font-shipmincho font-extrabold mb-4">
              <motion.div
                viewport={{ once: true }}
                initial="itemInit"
                whileInView="itemVisible"
                variants={textAnimation}
                className="my-auto mr-12 mb-3 md:mb-0 md:mr-24 "
              >
                <p className="text-2xl md:text-3xl">2023～</p>
                <p className="text-lg md:text-xl">東京進出</p>
              </motion.div>
              <div className="flex flex-1">
                <motion.div
                  viewport={{ once: true }}
                  custom={1}
                  initial="imageInit"
                  whileInView="imageVisible"
                  variants={textAnimation}
                >
                  <Image
                    src="/img/toukyou.png"
                    //画像のパスをsrcで受け取る
                    alt="東京画像"
                    //altの文言をaltで受け取る
                    width={400}
                    height={400}
                    className="rounded-full w-40 h-40 mr-14 hidden md:block"
                  />
                  {/* モバイル対応 */}
                  <Image
                    src="/img/toukyou.png"
                    //画像のパスをsrcで受け取る
                    alt="東京画像"
                    //altの文言をaltで受け取る
                    width={200}
                    height={200}
                    className="rounded-full w-32 h-32 mr-5 block md:hidden"
                  />
                </motion.div>
                <motion.div
                  viewport={{ once: true }}
                  custom={1}
                  initial="imageInit"
                  whileInView="imageVisible"
                  variants={textAnimation}
                >
                  <Image
                    src="/img/enjinia.png"
                    //画像のパスをsrcで受け取る
                    alt="エンジニア画像"
                    //altの文言をaltで受け取る
                    width={400}
                    height={400}
                    className="rounded-full w-40 h-40 hidden md:block"
                  />
                  {/* モバイル対応 */}
                  <Image
                    src="/img/enjinia.png"
                    //画像のパスをsrcで受け取る
                    alt="エンジニア画像"
                    //altの文言をaltで受け取る
                    width={200}
                    height={200}
                    className="rounded-full w-32 h-32 block md:hidden"
                  />
                </motion.div>
              </div>
            </div>
            <div className="flex justify-end dark:text-dark-colo">
              <div className="md:w-3/4">
                <motion.div
                  viewport={{ once: true }}
                  custom={1}
                  initial="item2Init"
                  whileInView="item2Visible"
                  variants={textAnimation}
                  className="md:px-5 md:py-3 mb-4"
                >
                  <p className="mb-2 text-base md:text-xl font-bold">
                    東京に進出し、IT業界へ
                  </p>
                  <p className="text-sm md:text-base font-medium">
                    ものづくりの楽しさをもっと経験して、ワクワクする人をもっと見たいと
                    東京に進出してきました。IT業界の会社に拾ってもらい日々研鑽しています。
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
