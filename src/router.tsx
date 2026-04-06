import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout.tsx";
// pages
import LandingPage from "./pages/LandingPage.tsx";
import GetStartedLayout from "./layouts/GetStartedLayout.tsx";
import GetStartedPage from "./pages/GetStartedPage.tsx";
import CreateBasePage from "./pages/CreateBasePage.tsx";
import JoinBasePage from "./pages/JoinBasePage.tsx";
import HomePage from "./pages/HomePage.tsx";
import CalendarLayout from "./layouts/CalendarLayout.tsx";
import CalendarEventPage from "./pages/CalendarEventPage.tsx";
import CalendarPage from "./pages/CalendarPage.tsx";
import ListsLayout from "./layouts/ListsLayout.tsx";
import ListDetailsPage from "./pages/ListDetailsPage.tsx";
import ListsPage from "./pages/ListsPage.tsx";
import SignInPage from "./pages/SignInPage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";
// actions
import signUpAction from "./actions/signUpAction.ts";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "landing",
        Component: LandingPage,
      },
      {
        path: "sign-in",
        Component: SignInPage,
      },
      {
        path: "sign-up",
        Component: SignUpPage,
        action: signUpAction,
      },
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
]);

export default router;
