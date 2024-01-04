import { useState } from "react";
import { RescueContext } from "./context/RescueContext";

import rescueData from "./assets/rescueData.json";

export default function RescueLayout({ children }) {
  //放container
  //放context的provider跟rescue相關的設定

  //設定rescueCat的state
  const [rescueCats, setRescueCats] = useState(rescueData);

  return (
    <RescueContext.Provider value={{ rescueCats, setRescueCats }}>
      {children}
    </RescueContext.Provider>
  );
}
