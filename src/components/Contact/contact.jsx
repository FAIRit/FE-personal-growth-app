import React, { Component } from 'react';
import { Grid } from 'react-mdl';
import './contact.css';

class Contact extends Component {
    render() {
      return(
        <Grid className="contact-grid">
            <h1>Contact me</h1>
            <br />
            <h3>If you would like to help me develop the application, just contact me via the email address: elszulc@wp.pl</h3>
        </Grid>
      )
    }
  }
  
  export default Contact;