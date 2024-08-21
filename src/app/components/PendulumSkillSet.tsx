import React from "react";
import { motion } from "framer-motion";

const skills = [
  "HTML/CSS",
  "jQuery",
  "TypeScript",
  "Python",
  "VB.NET",
  "MySQL",
  "laravel",
  "Next.js",
  "livewire",
  "docker",
  "blender",
  "flutter",
];

const randomDuration = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const textAnimation = {
  skillInit: {
    opacity: 1,
    rotate: 0,
  },
  skillVisible: (index: number) => ({
    opacity: 1,
    rotate: [-20, 20, 0],
    transition: {
      duration: randomDuration(2, 5),
      ease: "easeOut",
    },
  }),
  
};

function PendulumSkillSet() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-12 px-2">
      {skills.map((skill, index) => {
        return (
          <div
            key={index}
            // ref={ref}
            className="relative flex justify-center items-start"
          >
            {/* 押しピン画像 */}
            <div className="absolute top-0 rounded-full bg-regal-blue z-10 w-2 h-2 md:w-3 md:h-3"></div>

            {/* 振り子アニメーション */}
            <motion.div
              className="w-24 h-16 md:w-44 md:h-32 bg-slate-100 border-2 border-gray-400 rounded-md flex items-center justify-center text-gray-900 text-xs md:text-base shadow-lg"
              style={{ transformOrigin: "top center" }}
              // viewport={{ once: true }}
              initial="skillInit"
              whileInView="skillVisible"
              variants={textAnimation}
              custom={index}
            >
              {skill}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

export default PendulumSkillSet;
