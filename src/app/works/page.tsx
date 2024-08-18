import swagData from "../data";
import Card from "./components/Card/Card";

export default function Works() {
  const data = swagData;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max	 gap-6 m-10">
      {data.map(({ id, title, imageSrc }) => (
        <Card key={id} id={id} title={title} imageSrc={imageSrc}></Card>
      ))}
    </div>
  );
}