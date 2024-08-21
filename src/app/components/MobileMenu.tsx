import React, { useState } from "react";
import { animateScroll as scroll, Link as LinkScroll } from "react-scroll";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import { motion, useAnimationControls } from "framer-motion";

function MobileMenu() {
  const [open, setOpen] = useState(false);

  const onClickOpen = () => {
    setOpen(true);
  };

  const onClickClose = () => {
    setOpen(false);
  };

  const textAnimation = {
    navInit: {
      opacity: 0,
      x: 15,
    },
    navVisible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    openInit: {
      opacity: 1,
      scale: 0,
    },
    openVisible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <div className="relative h-30 top:0 cursor-pointer">
        {!open && (
          <div
            // initial="openInit"
            // whileInView="openVisible"
            // variants={textAnimation}
            onClick={onClickOpen}
            className="flex flex-col justify-center items-center w-14 cursor-pointer"
          >
            <motion.div
              initial="openInit"
              whileInView="openVisible"
              variants={textAnimation}
              className="border-4 rounded-lg dark:border-dark-color border-main-color mb-1 w-12 h-1"
            ></motion.div>
            <motion.div
              initial="openInit"
              whileInView="openVisible"
              variants={textAnimation}
              className="border-4 rounded-lg dark:border-dark-color border-main-color mb-1 w-10 h-1"
            ></motion.div>
            <motion.div
              initial="openInit"
              whileInView="openVisible"
              variants={textAnimation}
              className="border-4 rounded-lg dark:border-dark-color border-main-color top-2 w-8 h-1"
            ></motion.div>
          </div>
        )}
        {open && (
          <motion.div
            initial="openInit"
            whileInView="openVisible"
            variants={textAnimation}
            onClick={onClickClose}
            className="flex flex-col justify-center items-center w-14 cursor-pointer"
          >
            <div className="absolute top-3 right-2% border-4 rounded-lg dark:border-dark-color border-main-color w-10 transform rotate-45"></div>
            <div className="absolute top-3 right-2% border-4 rounded-lg dark:border-dark-color border-main-color w-10 transform -rotate-45"></div>
          </motion.div>
        )}
      </div>

      {/* ナビゲーションメニュー */}
      {open && (
        <div className="absolute top-14 right-5 z-10 text-base dark:text-dark-color text-main-color cursor-pointer">
          <motion.nav
            // viewport={{ once: true }}
            initial="navInit"
            whileInView="navVisible"
            variants={textAnimation}
            className="flex flex-col items-end"
          >
            <LinkScroll
              to="About"
              smooth={true}
              duration={600}
              offset={0}
              className=" transform hover:text-xl duration-200 hover:border-b-4 hover:border-dark-light"
            >
              About this site
            </LinkScroll>
            <LinkScroll
              to="AboutMe"
              smooth={true}
              duration={1000}
              offset={0}
              className=" transform hover:text-xl duration-200 hover:border-b-4 hover:border-dark-light"
            >
              About me
            </LinkScroll>
            <LinkScroll
              to="MySkill"
              smooth={true}
              duration={1000}
              offset={0}
              className="transform hover:text-xl duration-200 hover:border-b-4 hover:border-dark-light"
            >
              My skill
            </LinkScroll>
            <LinkScroll
              to="Portfolio"
              smooth={true}
              duration={1000}
              offset={0}
              className="transform hover:text-xl duration-200 hover:border-b-4 hover:border-dark-light"
            >
              Portfolio
            </LinkScroll>
            <LinkScroll
              to="Works"
              smooth={true}
              duration={1000}
              offset={0}
              className="transform hover:text-xl duration-200 hover:border-b-4 hover:border-dark-light"
            >
              Works
            </LinkScroll>
            <LinkScroll
              to="Contact"
              smooth={true}
              duration={1000}
              offset={0}
              className="transform hover:text-xl duration-200 hover:border-b-4 hover:border-dark-light"
            >
              Contact
            </LinkScroll>
          </motion.nav>
        </div>
      )}
    </>
  );
}

export default MobileMenu;
