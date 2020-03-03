import React, { Component } from 'react';
import fire from '../config/fire';
import {Redirect} from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        console.log('lololo');
    }
    logout(e) {
        e.preventDefault();
        console.log('tratrtr');
        fire.auth().signOut()
        .then(()=>{ return <Redirect to="/login" />})
    }

    render() {
        return (
            <div>
                <h1>Welcome to Home</h1>
                <button onClick={this.logout}>Logout</button>
            </div>
        );

    }

}

export default Home;