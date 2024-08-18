import swagData, { Work } from "../../data";
import CardDetail from '../components/CardDetail/CardDetail';

export default function WorkPage({
  params: { id },
}: {
  params: { id: string };
}) {
  // データ全体から、idがURLと一致するデータを返す
  const data: Work = swagData.find((p) => p.id === id)!;

  return (
    <div className="w-8/12 container mx-auto my-10">
      <CardDetail data={data} />
    </div>
  );
}