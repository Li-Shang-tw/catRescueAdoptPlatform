import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserAPI } from "../callAPI.js";
import UserCard from "../components/UserCard";
import Tabs from "../components/Tabs.jsx";
export default function OtherUserDetail() {
  const { id } = useParams();
  const [otherUser, setOtherUser] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserAPI(id);
      setOtherUser(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h2>其他用戶細節</h2>
      <div className="w-1/2 mx-auto">
        <UserCard currentUser={otherUser} style="justify-around" />
      </div>
      <Tabs
        rescueList={otherUser && otherUser.rescueProject}
        adoptList={otherUser && otherUser.adoptProject}
      />
    </>
  );
}
