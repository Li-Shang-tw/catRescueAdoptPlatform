import UserCard from "./UserCard";
import { getUserAPI } from "../callAPI";
import { useState, useEffect } from "react";
export default function RequestCardList({
  userList,
  project,
  setAdoptProject,
  handleApprove,
}) {
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
      <h3 className="font-bold text-2xl mb-7">申請中的認養者</h3>
      <ul className="flex">
        {users &&
          users.length !== 0 &&
          users.map((user) => (
            <li key={user && user.id}>
              <UserCard
                user={user}
                type="3"
                style="flex-col px-7 py-6"
                project={project}
                setAdoptProject={setAdoptProject}
                className="mr-5"
                handleApprove={handleApprove}
              />
            </li>
          ))}
      </ul>
    </>
  );
}
