import Link from "next/link";
import Image from "next/image";

export default function Card({
  id,
  title,
  imageSrc,
  description,
  href,

}: {
  id: string;
  title: string;
  imageSrc: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={`/${href}`}>
      <div className="bg-white px-5 pt-5 pb-5 rounded-lg transform duration-500 hover:duration-500 hover:scale-110">
        <Image
          alt=""
          src={imageSrc}
          height={300}
          width={400}
          className="w-full object-cover mb-5"
        />
        <h2 className="font-notojp text-3xl text-center mb-2">{title}</h2>
        <p className="font-notojp text-base text-center">{description}</p>
      </div>
    </Link>
  );
}