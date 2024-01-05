import { useParams } from "react-router-dom";
export default function UserProfile() {
  const { pathId } = useParams();

  return (
    <div>
      <h1>UserProfile{pathId}</h1>
    </div>
  );
}
