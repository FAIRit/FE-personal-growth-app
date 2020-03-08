import React, { Component} from 'react';
import fire from '../config/fire';

class Logout extends Component {
    constructor(props) {
        console.log('konstruktor1',props)
        super(props);
        console.log('konstruktor',props)
        this.logout = this.logout.bind(this);
    }
    logout(e) {
        e.preventDefault();
        fire.auth().signOut()
        .then(()=>{ 
            return this.props.history.push("/login")
        })
        .catch(error => {console.log(error)}
        );
    }

    render() {
        return (
            <button onClick={this.logout}>Logout</button>
        );
    }
}
export default Logout;