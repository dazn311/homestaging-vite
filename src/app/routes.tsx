import {createBrowserRouter} from "react-router";
import {HomePage, NoFindPage} from "@/pages";
import Layout from "@/app/LayOut.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      {
        path: "document",
        lazy: () => import("@/pages/document/Document.page"),
        // Component: DocumentPage
      },
      {
        path: "projects",
        lazy: () => import("@/pages/projects/Projects.page"),
        // loader: ({params, request}) => {
          //store.dispatch(getData());
          // return null;
        // }
      },
      {
        path: "videos",
        // Component: VideoPage
        lazy: () => import("@/pages/video/Video.page"),
      },
      { path: "no-find", Component: NoFindPage },
      { path: "*", Component: NoFindPage },
    ],
  },
]);