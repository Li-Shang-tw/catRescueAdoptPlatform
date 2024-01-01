import { useParams } from "react-router-dom";

export default function AdoptDetail() {
  const { id } = useParams();
  return (
    <>
      <h1>AdoptDetail{id}</h1>
    </>
  );
}
