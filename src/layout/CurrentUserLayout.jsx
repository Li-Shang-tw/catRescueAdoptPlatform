import { useState } from "react";
import { CurrentUserContext } from "../context/CurrentUserContext";

export default function CurrentUserLayout({ children }) {
  //放container
  //放context的provider跟rescue相關的設定

  //設定rescueCat的state
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
}
