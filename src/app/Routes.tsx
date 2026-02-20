import {createBrowserRouter} from "react-router";
import HomePage from "../pages/HomePage/HomePage.tsx";
import Layout from "./LayOut.tsx";
import Document from "../pages/document/Document.tsx";
import {NoFinded} from "../pages/no-finded/NoFinded.tsx";
import Projects from "../pages/projects/Projects.tsx";
import VideoPage from "../pages/video/Page.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "document", Component: Document },
      {
        path: "projects",
        Component: Projects,
        // loader: ({params, request}) => {
          //store.dispatch(getData());
          // return null;
        // }
      },
      { path: "videos", Component: VideoPage },
      { path: "no-find", Component: NoFinded },
      { path: "*", Component: NoFinded },
    ],
  },
]);