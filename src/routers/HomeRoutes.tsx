import { Home } from "../components/pages/Home";
import { LinkPage } from "../components/pages/LinkPage";

export const homeRoutes = [
    {
      path: "/",
      exact: true,
      children: <Home/>
    },
    {
        path: "/link1",
        exact: false,
        children: <LinkPage contents="リンク1ページです"/>
    },
    {
      path: "/link2",
      exact: false,
      children: <LinkPage contents="リンク2ページです"/>
    }
];