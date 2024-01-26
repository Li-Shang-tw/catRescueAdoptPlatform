import { useState, useEffect } from "react";
import { AdoptContext } from "../context/AdoptContext";
import { getAdoptingCatsAPI } from "../callAPI";
import rescueData from "../assets/rescueData.json";

export default function AdoptLayout({ children }) {
  //先設定rescueCat的state
  const [adoptCats, setAdoptCats] = useState(rescueData);
  //用useEffect來呼叫API
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAdoptingCatsAPI();
      setAdoptCats(data);
    };
    fetchData();
  }, []);

  return (
    <AdoptContext.Provider value={{ adoptCats, setAdoptCats }}>
      {children}
    </AdoptContext.Provider>
  );
}
