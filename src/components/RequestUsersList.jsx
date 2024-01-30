import UserCard from "./UserCard";
import { getUserAPI } from "../callAPI";
import { useState, useEffect } from "react";
export default function RequestCardList({ userList, projectId }) {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await Promise.all(
        userList.map((userId) => getUserAPI(userId))
      );
      setUsers(data);
    };
    fetchData();
  }, [userList]);

  return (
    <>
      <h3>申請中的認養者</h3>
      <ul className="flex">
        {users &&
          users.map((user) => (
            <li key={user.id}>
              <UserCard
                user={user}
                type="3"
                style="flex-col"
                projectId={projectId}
                className="mr-5"
              />
            </li>
          ))}
      </ul>
    </>
  );
}
