import { useParams } from "react-router-dom";
import { useReducer } from "react";
import UserReducer from "../userReducer";
export default function UserProfile() {
  const [users, dispatch] = useReducer(UserReducer);
  function handleGetUsers() {
    dispatch({
      type: "getUsers",
    });
  }
  handleGetUsers();
  console.log(users);
  const { id } = useParams();

  return (
    <div>
      <h1>UserProfile{id}</h1>
    </div>
  );
}
