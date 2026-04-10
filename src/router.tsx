import { createBrowserRouter } from "react-router";

// layouts
import RootLayout from "./layouts/RootLayout.tsx";
import HomeLayout from "./layouts/HomeLayout.tsx";
import CalendarLayout from "./layouts/CalendarLayout.tsx";
import GetStartedLayout from "./layouts/GetStartedLayout.tsx";
import ListsLayout from "./layouts/ListsLayout.tsx";
// pages
import CalendarEventPage from "./pages/CalendarEventPage.tsx";
import CalendarPage from "./pages/CalendarPage.tsx";
import CreateBasePage from "./pages/CreateBasePage.tsx";
import GetStartedPage from "./pages/GetStartedPage.tsx";
import JoinBasePage from "./pages/JoinBasePage.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import ListDetailsPage from "./pages/ListDetailsPage.tsx";
import ListsPage from "./pages/ListsPage.tsx";
import SignInPage from "./pages/SignInPage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";
// actions
import signUpAction from "./lib/actions/signUpAction.ts";
import signInAction from "./lib/actions/signInAction.ts";
// loaders
import authLoader from "./lib/loaders/authLoader.ts";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: LandingPage,
      },
      {
        path: "sign-in",
        Component: SignInPage,
        action: signInAction,
      },
      {
        path: "sign-up",
        Component: SignUpPage,
        action: signUpAction,
      },
      {
        path: "home",
        Component: HomeLayout,
        loader: authLoader,
        children: [
          {
            path: "calendar",
            Component: CalendarLayout,
            children: [
              {
                index: true,
                Component: CalendarPage,
              },
              {
                path: ":id",
                Component: CalendarEventPage,
              },
            ],
          },
          {
            path: "lists",
            Component: ListsLayout,
            children: [
              {
                index: true,
                Component: ListsPage,
              },
              {
                path: ":id",
                Component: ListDetailsPage,
              },
            ],
          },
          {
            path: "get-started",
            Component: GetStartedLayout,
            children: [
              {
                index: true,
                Component: GetStartedPage,
              },
              {
                path: "create",
                Component: CreateBasePage,
              },
              {
                path: "join",
                Component: JoinBasePage,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
