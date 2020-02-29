import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './landingpage';
import BlogPage from './blog';
import MissionPage from './mission';
import ContactPage from './contact';
import StartPage from './start';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/start" component={StartPage} />
    <Route path="/mission" component={MissionPage} />
    <Route path="/contact" component={ContactPage} />
    <Route path="/blog" component={BlogPage} />
  </Switch>
)

export default Main;