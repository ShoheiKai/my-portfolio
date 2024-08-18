import React from "react";
import Image from "next/image";

function Card(props: any) {
  return (
    <div onClick={props.onClick} className="hover:cursor-pointer">
      <Image
        src={props.src}
        alt={"色変更アイコン"}
        width={40}
        height={40}
        className="object-contain md:ml-36 hover:scale-125 transition duration-200"
      />
    </div>
  );
}

export default Card;
