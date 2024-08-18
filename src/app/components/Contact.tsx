// "use client"; // これを追加

import React, { useRef } from "react";
import { delay, motion, useAnimationControls } from "framer-motion";

function Contact() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("メール送信");

    let data = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      message: messageRef.current?.value,
    };
    // console.log(nameRef.current?.value);
    // console.log(nameRef.current?.value);
    await fetch("api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) console.log("メース送信成功");
    });
  };

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
      y: 30,
    },
    pVisible: (index: number) => ({
      opacity: 1,
      y: 0,
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
      <div className="mb-10 py-10 ">
        <motion.h1
          viewport={{ once: true }}
          initial="hInit"
          whileInView="hVisible"
          variants={textAnimation}
          className="mb-8 md:mb-10 font-shipmincho font-extrabold text-5xl text-center"
        >
          Contact
        </motion.h1>
        <motion.p
          viewport={{ once: true }}
          custom={1}
          initial="pInit"
          whileInView="pVisible"
          variants={textAnimation}
          className="font-notojp text-2xl leading-relaxed text-center  hidden md:block"
        >
          最後まで読んでいただき、ありがとうございました。
          <br />
          ここで頑張れているのも支えてくれている皆さんのおかげです。
          <br />
          少しでも私のことを知っていただけたら嬉しいです。
          <br />
          何かありましたら下記のフォームからコメントいただきますようお願いします。
        </motion.p>

        {/* モバイル対応 */}
        <motion.p
          viewport={{ once: true }}
          custom={1}
          initial="pInit"
          whileInView="pVisible"
          variants={textAnimation}
          className="px-3 font-notojp text-lg leading-relaxed text-center block md:hidden "
        >
          最後まで読んでいただき、
          <br />
          ありがとうございました。
          <br />
          ここで頑張れているのも支えてくれている
          <br />
          皆さんのおかげです。
          <br />
          {/* 少しでも私のことを
          <br />
          知っていただけたら嬉しいす。          
          <br /> */}
          何かありましたら下記のフォームから
          <br />
          コメントいただきますようお願いします。
        </motion.p>
        <motion.div
          viewport={{ once: true }}
          custom={2}
          initial="pInit"
          whileInView="pVisible"
          variants={textAnimation}
          className="container mt-16 mx-auto"
        >
          <form
            action=""
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
            className="flex flex-col items-center"
          >
            <div className="font-shipmincho font-extrabold text-xl text-main-color">
              <div className="flex flex-col md:flex-row justify-around items-center mb-16 md:mb-32">
                <div className="flex flex-col md:flex-row border-b-2 border-dark-light mx-5 md:mx-10 mb-16 md:mb-0">
                  <label htmlFor="name" className="mr-5">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control w-10 bg-slate-50"
                    id="name"
                    required
                    ref={nameRef}
                  />
                </div>
                <div className="flex flex-col md:flex-row border-b-2 border-dark-light mx-5 md:mx-10">
                  <label htmlFor="email" className="mr-5">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control w-10 bg-slate-50"
                    id="email"
                    required
                    ref={emailRef}
                  />
                </div>
              </div>
              <div className="flex flex-col mb-10 border-b-2 border-dark-light mx-5 md:mx-10">
                <label htmlFor="comment" className="mr-5">
                  Comment
                </label>
                <textarea
                  name="comment"
                  id="comment"
                  className="form-control max-h-24 w-10 min-h-24 bg-slate-50"
                  required
                  ref={messageRef}
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="w-56 h-16 text-lg bg-custom-dark-light border-dark-light shadow-lg text-main-color font-bold py-2 px-4 border rounded transform duration-500 hover:duration-500 hover:scale-110 active:shadow-sm active:duration-100"
            >
              メッセージを送信する
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
}

export default Contact;
