import React, { Component, Fragment } from 'react';
import './App.css';
import { Layout, Content } from 'react-mdl';
import Main from '../components/Route/route';
import HeaderLanding from '../components/Layouts/headerLanding';
import fire from '../firebase/firebase';

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
              <Main auth={localStorage.user !== undefined}/>
          </Content>     
        </Layout>
      </div>
    </Fragment>
    );
  }
}

export default App;