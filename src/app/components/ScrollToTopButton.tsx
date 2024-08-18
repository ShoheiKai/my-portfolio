// // components/ScrollToTopButton.tsx
import { useState, useEffect } from "react";

type Props = {
  showAfter: number; // スクロール量後にボタン表示
  hideBefore?: number; // スクロール量前にボタン非表示
};

const ScrollToTopButton = ({ showAfter, hideBefore = 0 }: Props) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // console.log("現在のスクロール位置:", scrollY);

      if (window.scrollY >= showAfter && window.scrollY < hideBefore) {
        setIsShown(true);
      } else {
        setIsShown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showAfter, hideBefore]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isShown) return null;

  return (
    <div className="animate-fade animate-once">
      <button
        onClick={handleClick}
        className="fixed rotate-90 font-shipmincho font-extrabold right-2 bottom-10 md:right-11 md:bottom-10 transition duration-500  py-3 px-7 border-[1px] dark:text-yellow-600 dark:border-yellow-600 border-main-color text-main-color cursor-pointer hover:scale-105 hover:duration-500"
      >
        Page Top
        <span>
          <div className="mt-3">
            <div className="absolute w-4 left-[25px] top-[42px] -rotate-45 border-b-[1px] dark:text-yellow-600 dark:border-yellow-600 border-main-color text-main-color"></div>
            <div className="border-b-[1px] dark:text-yellow-600 dark:border-yellow-600 border-main-color text-main-color"></div>
          </div>
        </span>
      </button>
    </div>
  );
};

export default ScrollToTopButton;

// components/ScrollToTopButton.tsx
// components/ScrollToTopButton.tsx
// import { useState, useEffect } from "react";

// type Props = {
//   showAfter: number;
//   hideBefore?: number;
//   borderColor: string;
//   textColor: string;
// };

// const ScrollToTopButton = ({ showAfter, hideBefore = 0, borderColor, textColor }: Props) => {
//   const [isShown, setIsShown] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY >= showAfter && window.scrollY < hideBefore) {
//         setIsShown(true);
//       } else {
//         setIsShown(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [showAfter, hideBefore]);

//   const handleClick = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   if (!isShown) return null;

//   return (
//     <div className="animate-fade animate-once">
//       <button
//         onClick={handleClick}
//         className={`fixed rotate-90 font-shipmincho font-extrabold right-2 bottom-10 md:right-11 md:bottom-10 transition duration-500 py-3 px-7 border-[1px] ${borderColor} ${textColor} cursor-pointer hover:scale-105 hover:duration-500`}
//       >
//         Page Top
//         <span>
//           <div className="mt-3">
//             <div className={`absolute w-4 left-[25px] top-[42px] -rotate-45 border-b-[1px] ${borderColor} ${textColor}`}></div>
//             <div className={`border-b-[1px] ${borderColor} ${textColor}`}></div>
//           </div>
//         </span>
//       </button>
//     </div>
//   );
// };

// export default ScrollToTopButton;
