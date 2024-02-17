import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserAPI } from "../callAPI.js";
import UserCard from "../components/UserCard";
import Tabs from "../components/Tabs.jsx";
import OtherUserProjects from "../components/OtherUserProjects.jsx";
export default function OtherUserDetail() {
  const { id } = useParams();
  const [otherUser, setOtherUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserAPI(id);
      setOtherUser(data);
    };
    fetchData();
  }, [id]);

  return (
    <>
      <h2>其他用戶細節</h2>
      <div className="w-1/2 mx-auto">
        <UserCard
          user={otherUser}
          style=" flex py-5 justify-around items-center"
        />
      </div>
      {otherUser?.role === "rescuer" && (
        <Tabs
          id={id}
          rescueList={otherUser?.rescueProject}
          adoptList={otherUser?.adoptProject}
        />
      )}
      {otherUser?.role === "adopter" && (
        <div>
          <h3>認養紀錄</h3>
          <OtherUserProjects
            projectList={otherUser?.petProject}
            type="pet"
            userId={id}
          />
        </div>
      )}
    </>
  );
}
