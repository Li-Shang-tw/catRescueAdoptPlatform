import { useSearchParams } from "react-router-dom";

export default function Achievement() {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");

  return (
    <div>
      <h2>成就</h2>
    </div>
  );
}
