import { memo, FC } from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { LinkPage } from "../components/pages/LinkPage";
import { homeRoutes } from "./HomeRoutes";

export const Router: FC = memo(() => {
  return (
    <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/home" render={({ match: { url } }) => (
            <Switch>
                {homeRoutes.map((route) => (
                    <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
                        {route.children}
                    </Route>
                ))}
            </Switch>
        )} />
        <Route exact path="/mail">
          <LinkPage contents="Mailページです"/>
        </Route>
        <Route exact path="/analitics">
          <LinkPage contents="分析ページです"/>
        </Route>
    </Switch>
  );
});