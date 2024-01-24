import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getOtherUsersAPI } from "../callAPI.js";
export default function OtherUsers() {
  const [otherUsers, setOtherUsers] = useState(null);
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role");
  useEffect(() => {
    const fetchData = async () => {
      const data = await getOtherUsersAPI(role);
      setOtherUsers(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>otherUsers{role}</h1>
    </div>
  );
}
