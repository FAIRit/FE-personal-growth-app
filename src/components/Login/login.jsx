import React, { Component} from 'react';
import fire from '../../firebase/firebase';
import SignIn from '../SigninPage/SignIn.js'
import { Grid } from 'react-mdl';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      isLogin: true,
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth()
        .signInWithEmailAndPassword(this.state.email.trim(), this.state.password)
        .then(()=>{ return this.props.history.push("/home") })
        .catch(error => {alert(error)}
        );
  }

  redirect(e) {
    var user = fire.auth().currentUser;
    if (user) {
      return this.props.history.push("/home") }
    else {
      return this.props.history.push("/login")
    }
  }
  
  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then(()=>{ return this.props.history.push("/home") })
    .catch((error) => {alert(error)})
  }
  
  render() {
    return (
        <Grid className="login-grid">
          <SignIn
            handleLogin={this.login}
            handleEmail={this.handleChange}
            handlePassword={this.handleChange}
            handleSignup={this.signup}
          />
        </Grid>
    );
  }
}
export default Login;