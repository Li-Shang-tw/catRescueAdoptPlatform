import { useParams } from "react-router-dom";
export default function OtherUserDetail() {
  const { id } = useParams();
  return (
    <>
      <h2>其他用戶細節{id}</h2>
    </>
  );
}
