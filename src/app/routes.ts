import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Team } from "./pages/Team";
import { Contact } from "./pages/Contact";
import { Imprint } from "./pages/Imprint";
import { Privacy } from "./pages/Privacy";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "team", Component: Team },
      { path: "contact", Component: Contact },
      { path: "imprint", Component: Imprint },
      { path: "privacy", Component: Privacy },
    ],
  },
]);
