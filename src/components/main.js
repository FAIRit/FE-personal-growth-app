import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './landingpage';
import LoginPage from './login';
import AboutPage from './about';
import ContactPage from './contact';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/about" component={AboutPage} />
    <Route path="/contact" component={ContactPage} />
    <Route path="/login" component={LoginPage} />
  </Switch>
)

export default Main;