import { useParams } from "react-router-dom";
import { CurrentUserContext } from "../context/CurrentUserContext";
import { useContext } from "react";
export default function UserProfile() {
  //比對id與登入者的id是否相同
  const userData = useContext(CurrentUserContext);
  const { currentUser } = userData;
  console.log(currentUser);
  const { pathId } = useParams();
  return (
    <div>
      <h1>UserProfile{pathId}</h1>
    </div>
  );
}
