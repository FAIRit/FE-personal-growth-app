import React, { Component } from 'react';
import { Grid } from 'react-mdl';
import './blog.css';

class Blog extends Component {
    render() {
        return(
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="blog-grid">
                    <h1>Blog Page</h1><br />
                    <h3>How to work witch our procrastination?</h3>
                    <h4>There are several techniques that will help you in the fight against your procrastination. 
                    You have already heard about many of them.
                    The Personal Growth App was created to help you fight yourself.</h4>
                    <a href="#" class="btn-text">Read more &rarr;</a>
                </Grid>
            </div>
        )
    }
}
export default Blog;