import CardDetail from "../../../components/CardDetail/CardDetail";
import swagData, { Work } from "../../../../data";
import Modal from "@/app/works/components/Modal/Modal";

export default function PhotoModal({
  params: { id },
}: {
  params: { id: string };
}) {
  const data: Work = swagData.find((p) => p.id === id)!;

  return (
   <Modal>
        <CardDetail data={data} />
   </Modal> 
  );
}