import React, { Component } from 'react';
import { Grid } from 'react-mdl';

class Blog extends Component {
    render() {
        return(
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="blog-grid">
                    <h1>Blog Page</h1>
                </Grid>
            </div>
        )
    }
}
export default Blog;