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
      <h2 className="font-bold text-2xl  pt-5 px-10">其他用戶細節</h2>
      <div className="w-2/5 mx-auto mb-5">
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
        <div style={{ backgroundColor: "#ffdb7d" }}>
          <h3 className="font-bold text-2xl  pt-5 px-10">認養紀錄</h3>
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
