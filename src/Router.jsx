import { createBrowserRouter } from "react-router-dom";

//載入Root
import Root from "./page/RootTRoute";

//載入Layout
import CurrentUserLayout from "./layout/CurrentUserLayout";
//載入頁面
import Home from "./page/Home";
import AdoptContainer from "./page/AdoptContainer";
import AdoptDetail from "./page/AdoptDetail";
import UserProfile from "./page/UserProfile";
import RescueContainer from "./page/RescueContainer";
import RescueDetail from "./page/RescueDetail";
import ErrorPage from "./page/ErrorPage";
import SignUp from "./page/SignUp";
import SignIn from "./page/SignIn";
import Achievement from "./page/Achievement";
import MyAdoptProjects from "./page/MyAdoptProjects";
export const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CurrentUserLayout>
        <Root />
      </CurrentUserLayout>
    ),
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "adopt",
        element: <AdoptContainer />,
      },
      {
        path: "adopt/myproject/:userId",
        element: <MyAdoptProjects />,
      },

      {
        path: "adopt/:id",
        element: <AdoptDetail />,
      },

      { path: "user/:id", element: <UserProfile /> },

      {
        path: "rescue",
        element: <RescueContainer />,
      },

      {
        path: "/myAchievement/:userId",
        element: <Achievement />,
      },
      { path: "rescue/:id", element: <RescueDetail /> },
    ],
  },
  {
    path: "/signUp",
    element: (
      <CurrentUserLayout>
        <SignUp />
      </CurrentUserLayout>
    ),
  },
  {
    path: "/signIn",
    element: (
      <CurrentUserLayout>
        <SignIn />
      </CurrentUserLayout>
    ),
  },
]);
