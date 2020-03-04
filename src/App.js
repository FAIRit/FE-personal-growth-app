import React, { Component, Fragment } from 'react';
import './App.css';
import { Layout, Content } from 'react-mdl';
import Main from './components/main';
import HeaderLanding from './components/header';
import fire from './config/fire';
import Home from './components/home';
import Login from './components/login';

class App extends Component {
/* firebase */
  constructor(props) {
    super(props);
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  render() {
    return (
    <Fragment>
      <div className="demo-big-content">
        <Layout>
          <HeaderLanding/>
            <Content>
                <div className="page-content" />
                <Main/>
                <div className="App">
                  {this.state.user ? (<Home />) : (<Login />)}
                </div>
            </Content>     
        </Layout>
      </div>
    </Fragment>
    );
  }
}

export default App;