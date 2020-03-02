import React, { Component } from 'react';
import './App.css';
import { Layout, Content } from 'react-mdl';
import Main from './components/main';
import HeaderLanding from './components/header';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
            <HeaderLanding/>
            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
        </Layout>
      </div>
    );
  }
}

export default App;