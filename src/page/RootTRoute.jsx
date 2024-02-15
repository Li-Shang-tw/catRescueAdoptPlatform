//載入共用元件-navigator
import { Outlet } from "react-router-dom";
import Navigator from "../components/Navigator";
import { useCheckLogin } from "../hooks/useCheckLogin";
import AddWidget from "../components/AddWidget";
export default function Root() {
  useCheckLogin();
  return (
    <>
      <Navigator />
      <Outlet />
      <AddWidget />
    </>
  );
}
