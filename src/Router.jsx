import { createBrowserRouter } from "react-router-dom";

//載入Root
import Root from "./page/RootTRoute";

//載入頁面
import Home from "./page/Home";
import AdoptOverview from "./page/AdoptOverView";
import AdoptDetail from "./page/AdoptDetail";
import UserProfile from "./page/UserProfile";
import RescueContainer from "./page/RescueContainer";
import RescueDetail from "./page/RescueDetail";
import ErrorPage from "./page/ErrorPage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "adopt", element: <AdoptOverview /> },
      { path: "adopt/:id", element: <AdoptDetail /> },
      { path: "user/:id", element: <UserProfile /> },
      { path: "rescue", element: <RescueContainer /> },
      { path: "rescue/:id", element: <RescueDetail /> },
    ],
  },
]);
