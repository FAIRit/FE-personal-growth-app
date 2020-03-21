import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './landingpage';
import BlogPage from './blog';
import MissionPage from './mission';
import ContactPage from './contact';
import LoginPage from './login';
import HomePage from '../layouts/home';
import SummaryPage from './summary';
import GoalsPage from './mygoals';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/mission" component={MissionPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/contact" component={ContactPage} />
    <Route path="/blog" component={BlogPage} />
    <Route path="/home" component={HomePage} />
    <Route path="/summary" component={SummaryPage} />
    <Route path="/mygoals" component={GoalsPage} />
  </Switch>
)
export default Main;