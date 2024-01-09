import { useState, useEffect } from "react";
import { RescueContext } from "./context/RescueContext";
import { getRescuingCatsAPI } from "./callAPI";
import rescueData from "./assets/rescueData.json";

export default function RescueLayout({ children }) {
  //先設定rescueCat的state
  const [rescueCats, setRescueCats] = useState(rescueData);
  //用useEffect來呼叫API
  useEffect(() => {
    const fetchData = async () => {
      const data = await getRescuingCatsAPI();
      setRescueCats(data);
    };
    fetchData();
  }, []);

  return (
    <RescueContext.Provider value={{ rescueCats, setRescueCats }}>
      {children}
    </RescueContext.Provider>
  );
}
