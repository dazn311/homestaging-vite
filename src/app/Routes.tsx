import {createBrowserRouter} from "react-router";
import App from "./App.tsx";
import Layout from "./LayOut.tsx";
import Document from "./Document.tsx";
import {NoFinded} from "../pages/no-finded/NoFinded.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: App },
      { path: "document", Component: Document },
      { path: "no-find", Component: NoFinded },
    ],
  },
]);