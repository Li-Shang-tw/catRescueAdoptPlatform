import { createBrowserRouter } from "react-router-dom";

//載入Root
import Root from "./page/RootTRoute";

//載入Layout
import RescueLayout from "./layout/RescueLayout";
import AdoptLayout from "./layout/AdoptLayout";
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
        element: (
          <AdoptLayout>
            <AdoptContainer />
          </AdoptLayout>
        ),
      },
      {
        path: "adopt/myproject/:userId",
        element: (
          <AdoptLayout>
            <AdoptDetail />
          </AdoptLayout>
        ),
      },

      {
        path: "adopt/:id",
        element: (
          <AdoptLayout>
            <AdoptDetail />
          </AdoptLayout>
        ),
      },

      { path: "user/:id", element: <UserProfile /> },

      {
        path: "rescue",
        element: (
          <RescueLayout>
            <RescueContainer />
          </RescueLayout>
        ),
      },

      {
        path: "rescue/myproject/:userId",
        element: (
          <RescueLayout>
            <RescueContainer />
          </RescueLayout>
        ),
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
