//載入共用元件-navigator
import { Outlet } from "react-router-dom";
import Navigator from "../components/Navigator";
import { useCheckLogin } from "../hooks/useCheckLogin";
export default function Root() {
  useCheckLogin();
  return (
    <>
      <Navigator />
      <Outlet />
    </>
  );
}
