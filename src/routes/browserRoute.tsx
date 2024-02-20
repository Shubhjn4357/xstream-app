import { createBrowserRouter} from "react-router-dom";
import App from "../App";
import { Main, NoMatch } from "../pages";

const router = createBrowserRouter([
    {
      path:"/",
      element:<App/>,
      children: [
        {
          path:"",
          element:<Main/>,
          children:[
            {
              index:true,
              async lazy() {
                const {Home } = await import("../pages");
                return { Component: Home};
              },
            },
            {
              path:"/animelist",
              async lazy() {
                const {AnimeList } = await import("../pages");
                return { Component: AnimeList};
              },
            },
            {
              path:"sourcedetail/:type/:id",
              async lazy() {
                const {SourceInfo } = await import("../pages");
                return { Component: SourceInfo};
              },
            },
            {
              path:"bookmark",
              async lazy() {
                const {BookMark } = await import("../pages");
                return { Component: BookMark};
              },
            },
            {
              path:"profile",
              async lazy() {
                const {UserProfile } = await import("../pages");
                return { Component: UserProfile};
              },
            },
            {
              path:"watchanime",
              async lazy() {
                const {WatchAnime } = await import("../pages");
                return { Component: WatchAnime};
              },
            },
            {
              path:"setting",
              async lazy() {
                const {Setting } = await import("../pages");
                return { Component: Setting};
              },
            },
            {
              path:"search",
              async lazy() {
                const {Search } = await import("../pages");
                return { Component: Search};
              },
            },
          ]
        },
        {
          path: "auth",
          async lazy() {
            const {Auth } = await import("../pages");
            return { Component: Auth };
          },
        },
      ],
    },
    {
      path: "*",
      element: <NoMatch />,
    },
  ]);
  export default router;