//載入共用元件-navigator
import { Outlet } from "react-router-dom";
import Navigator from "../components/Navigator";
export default function Root() {
  return (
    <>
      <Navigator />
      <Outlet />
    </>
  );
}
