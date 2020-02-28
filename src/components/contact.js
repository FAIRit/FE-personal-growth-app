import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
      return(
        <div className="contact-body">
          <Grid className="contact-grid">
            <Cell col={6}>
              <h2>Elbieta Szulc</h2>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQFQXUUCVwaVkg/profile-displayphoto-shrink_200_200/0?e=1585785600&v=beta&t=3u2hGke949OAm9lkuYDPg_swq0RADgG4tRzayhbAt3M"
                alt="avatar"
                style={{height: '250px'}}
                 />
               <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
  
            </Cell>
            <Cell col={6}>
              <h2>Contact Me</h2>
              <hr/>
  
              <div className="contact-list">
                <List>
                  <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                      <i className="fa fa-phone-square" aria-hidden="true"/>
                      (123) 456-7890
                    </ListItemContent>
                  </ListItem>
  
                  <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                      <i className="fa fa-fax" aria-hidden="true"/>
                      (123) 456-7890
                    </ListItemContent>
                  </ListItem>
  
                  <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                      <i className="fa fa-envelope" aria-hidden="true"/>
                      someone@example.com
                    </ListItemContent>
                  </ListItem>
  
                  <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                      <i className="fa fa-skype" aria-hidden="true"/>
                      MySkypeID
                    </ListItemContent>
                  </ListItem>
  
  
                </List>
              </div>
            </Cell>
          </Grid>
        </div>
      )
    }
  }
  
  export default Contact;