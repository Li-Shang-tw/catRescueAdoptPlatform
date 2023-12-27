import { createBrowserRouter } from "react-router-dom";

//載入Root
import Root from "./page/RootTRoute";

//載入頁面
import Home from "./page/Home";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);
