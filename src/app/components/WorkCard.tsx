import Link from "next/link";
import Image from "next/image";

function WorkCard({
    id,
    title,
    imageSrc,
  }: {
    id: string;
    title: string;
    imageSrc: string;
  }) {
  return (
    <>
    <Link href={`/${id}`}>
      <div className="bg-white px-5 pt-5 pb-5 rounded-lg">
        <Image
          alt=""
          src={imageSrc}
          height={300}
          width={400}
          className="w-full object-cover mb-5"
        />
        <h2 className="text-[1.5rem]">{title}</h2>
      </div>
    </Link>
    </>
  );
}

export default WorkCard;
