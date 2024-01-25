import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserAPI } from "../callAPI.js";
export default function OtherUserDetail() {
  const { id } = useParams();
  const [otherUser, setOtherUser] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserAPI(id);
      console.log(data);
      setOtherUser(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h2>其他用戶細節{id}</h2>
      <p>{otherUser && otherUser.name}</p>
    </>
  );
}
