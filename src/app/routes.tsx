import {createBrowserRouter} from "react-router";
import {HomePage, NoFindPage} from "@/pages";
import Layout from "@/app/LayOut.tsx";
import {ROUTES} from "@/shared/model/routes.ts";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      {
        path: ROUTES.DOCUMENT,
        lazy: () => import("@/pages/document/Document.page"),
        // Component: DocumentPage
      },
      {
        path: ROUTES.PROJECTS,
        lazy: () => import("@/pages/projects/Projects.page"),
        // loader: ({params, request}) => {
          //store.dispatch(getData());
          // return null;
        // }
      },
      {
        path: ROUTES.VIDEOS,
        // Component: VideoPage
        lazy: () => import("@/pages/video/Video.page"),
      },
      { path: "no-find", Component: NoFindPage },
      { path: "*", Component: NoFindPage },
    ],
  },
]);