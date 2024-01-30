import { createBrowserRouter } from "react-router-dom";
//載入Mui主題
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/ThemeMui";

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
import MyProjects from "./page/MyProjects";
import OtherUsers from "./page/OtherUsers";
import OtherUserDetail from "./page/OtherUserDetail";
import RequestAdopts from "./page/RequestAdopts";
export const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ThemeProvider theme={theme}>
        <CurrentUserLayout>
          <Root />
        </CurrentUserLayout>
      </ThemeProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "adopt",
        element: <AdoptContainer />,
      },
      {
        path: "myproject/:userId",
        element: <MyProjects />,
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
      { path: "otherUsers", element: <OtherUsers /> },
      { path: "otherUser/:id", element: <OtherUserDetail /> },
      { path: "requestProject/:id", element: <RequestAdopts /> },
    ],
  },
  {
    path: "/signUp",
    element: (
      <ThemeProvider theme={theme}>
        <CurrentUserLayout>
          <SignUp />
        </CurrentUserLayout>
      </ThemeProvider>
    ),
  },
  {
    path: "/signIn",
    element: (
      <ThemeProvider theme={theme}>
        <CurrentUserLayout>
          <SignIn />
        </CurrentUserLayout>
      </ThemeProvider>
    ),
  },
]);
