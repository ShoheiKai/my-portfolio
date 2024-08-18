import React from "react";
import SkillRadarChart_1 from "./SkillRadarChart_1";
import SkillRadarChart_2 from "./SkillRadarChart_2";
import { delay, motion, useAnimationControls } from "framer-motion";

function MySkill() {
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
      x: 30,
    },
    pVisible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.2,
        duration: 1.3,
        ease: "easeOut",
      },
    }),
    p2Init: {
      opacity: 0,
      y: 30,
    },
    p2Visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 1.0,
        ease: "easeOut",
      },
    },
    itemInit: {
      opacity: 0,
      // scale: 0,
      // y:-50
    },
    itemVisible: {
      opacity: 1,
      scale: 1.25,
      // y:0,
      transition: {
        // type: "spring",
        duration: 0.8,
        // bounce: 0.7,
        // ease: "easeOut",
      },
    },
  };

  return (
    <>
      <div className="mt-12 mb-10 container mx-auto ">
        <motion.h1
          viewport={{ once: true }}
          initial="hInit"
          whileInView="hVisible"
          variants={textAnimation}
          className="font-shipmincho font-extrabold text-5xl text-center"
        >
          My skill set
        </motion.h1>
        <div className="flex flex-col justify-center md:flex-row md:my-5">
          <div className="flex flex-col items-center scale-75 md:scale-100 md:mr-24">
            <div>
              <motion.h2
                viewport={{ once: true }}
                initial="hInit"
                whileInView="hVisible"
                variants={textAnimation}
                className="font-notojp text-3xl "
              >
                実務
              </motion.h2>
            </div>
            <motion.div
              viewport={{ once: true }}
              initial="itemInit"
              whileInView="itemVisible"
              variants={textAnimation}
            >
              <SkillRadarChart_1 />
            </motion.div>
          </div>
          <div className="flex flex-col items-center scale-75 md:scale-100 md:ml-24">
            <div>
              <motion.h2
                viewport={{ once: true }}
                initial="hInit"
                whileInView="hVisible"
                variants={textAnimation}
                className="font-notojp text-3xl "
              >
                独学
              </motion.h2>
            </div>
            <motion.div
              viewport={{ once: true }}
              initial="itemInit"
              whileInView="itemVisible"
              variants={textAnimation}
            >
              <SkillRadarChart_2 />
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <motion.p
              viewport={{ once: true }}
              initial="p2Init"
              whileInView="p2Visible"
              // animate={controls}
              variants={textAnimation}
              className="font-notojp text-lg hidden md:block"
            >
              チャートの見方
              <br />
              「1:軽くふれた程度」、「2:実務で活用できるがもう少し習熟が必要」
              <br />
              「3:実務で問題なく活用が可能」、「4:スキルについてのあなたへたくさん教えられます」
            </motion.p>
            {/* モバイル対応 */}
            <motion.p
              viewport={{ once: true }}
              initial="p2Init"
              whileInView="p2Visible"
              // animate={controls}
              variants={textAnimation}
              className="font-notojp text-base block md:hidden px-2"
            >
              チャートの見方
              <br />
              「1:軽くふれた程度」
              <br />
              「2:実務で活用できるがもう少し習熟が必要」
              <br />
              「3:実務で問題なく活用が可能」
              <br />
              「4:スキルについてたくさん教えられます」
            </motion.p>
          </div>
          <div className="font-notojp text-base px-5 font-semibold leading-loose md:text-2xl md:leading-relaxed">
            <motion.p
              viewport={{ once: true }}
              custom={0}
              initial="pInit"
              whileInView="pVisible"
              // animate={controls}
              variants={textAnimation}
              className="hidden md:block"
            >
              実務では、プロジェクト内で設計から開発まで幅広く携わっており、浅く広くではありますが学び活用しています。
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
              独学では、ものづくりであなたへワクワク貢献度の幅を広げるために、まずはふれることで楽しみながらスキルアップすることを大事にしています。
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
              今後は、独学で学んでいる技術を活用してアプリ開発・WEBサイト開発を行い、アウトプットにも力を注いでいきます。
            </motion.p>

            {/* モバイル対応 */}
            <motion.p
              viewport={{ once: true }}
              custom={0}
              initial="pInit"
              whileInView="pVisible"
              // animate={controls}
              variants={textAnimation}
              className=" block md:hidden"
            >
              実務では、プロジェクト内で設計から開発まで幅広く携わっており、浅く広くではありますが学び活用しています。
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
              独学では、ものづくりであなたへワクワク貢献度の幅を広げるために、まずはふれることで楽しみながらスキルアップすることを大事にしています。
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
              今後は、独学で学んでいる技術を活用してアプリ開発・WEBサイト開発を行い、アウトプットにも力を注いでいきます。
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MySkill;
