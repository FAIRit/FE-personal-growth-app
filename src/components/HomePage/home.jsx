import React, { Component, Fragment } from 'react';
import HeaderDashboard from '../Layout/HeaderDashboard';
import Sidebar from '../Layout/Sidebar';
import Content from '../Layout/Content';

class HomePage extends Component {
    render() {
        return(
          <Fragment>
             <HeaderDashboard />
             <Content />
          </Fragment>
        )
    }
  }
export default HomePage;
