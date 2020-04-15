import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Landing from "../Landing/landingpage";
import BlogPage from "../Blog/blog";
import MissionPage from "../MissionPage/mission";
import ContactPage from "../Contact/contact";
import LoginPage from "../Login/login";
import GoalsPage from "../MyGoals/mygoals";
import Dashboard from "../Dashboard/dashboardPage";

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

const Main = (props) => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/mission" component={MissionPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/contact" component={ContactPage} />
    <Route path="/blog" component={BlogPage} />
    <Route path="/home" component={Dashboard} />
    <Route path="/mygoals" component={GoalsPage} />
  </Switch>
);
export default Main;
