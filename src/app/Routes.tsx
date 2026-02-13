import {createBrowserRouter} from "react-router";
import App from "./App.tsx";
import Layout from "./LayOut.tsx";
import Document from "../pages/document/Document.tsx";
import {NoFinded} from "../pages/no-finded/NoFinded.tsx";
import Projects from "../pages/projects/Projects.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: App },
      { path: "document", Component: Document },
      {
        path: "projects",
        Component: Projects,
        // loader: ({params, request}) => {
          //store.dispatch(getData());
          // return null;
        // }
      },
      { path: "no-find", Component: NoFinded },
      { path: "*", Component: NoFinded },
    ],
  },
]);