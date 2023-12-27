import { useParams } from "react-router-dom";

export default function RescueDetail() {
  const { id } = useParams();
  return (
    <div>
      <h1>RescueDetail{id}</h1>
    </div>
  );
}
