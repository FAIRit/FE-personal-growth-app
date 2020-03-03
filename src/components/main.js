import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './landingpage';
import BlogPage from './blog';
import MissionPage from './mission';
import ContactPage from './contact';
import LoginPage from './login';
import HomePage from './home';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/mission" component={MissionPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/contact" component={ContactPage} />
    <Route path="/blog" component={BlogPage} />
    <Route path="/home" component={HomePage} />
  </Switch>
)
export default Main;