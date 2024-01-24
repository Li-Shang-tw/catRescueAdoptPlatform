import { useSearchParams } from "react-router-dom";
export default function otherUsers() {
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role");

  return (
    <div>
      <h1>otherUsers{role}</h1>
    </div>
  );
}
