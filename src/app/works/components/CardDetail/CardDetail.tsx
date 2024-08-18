import Image from "next/image";
import { Work } from "../../../data";

export default function CardDetail({ data }: { data: Work }) {
  return (
    <div className="p-10 w-50 bg-white rounded-lg flex flex-col items-center border-gray-700 border-2">
      <Image
        alt=""
        src={data.imageSrc}
        height={600}
        width={800}
        className="col-span-2 mb-6"
      />
      <div>
        <h2 className="text-[1.5rem] mb-2 text-center">{data.title}</h2>
        <p>{data.description}</p>
      </div>
    </div>
  );
}