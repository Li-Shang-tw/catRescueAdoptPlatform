import { useParams } from "react-router-dom";
export default function UserProfile() {
  //比對id與登入者的id是否相同
  const { id } = useParams();
  return (
    <div>
      <h1>UserProfile{id}</h1>
    </div>
  );
}
