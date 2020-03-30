import React, { Component} from 'react';
import fire from '../../firebase/firebase';
import { withRouter } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';

class Logout extends Component {
    constructor(props) {
        super(props);
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
            <MenuItem onClick={this.logout}>Logout</MenuItem>
        );
    }
}
export default withRouter(Logout);