import React, { Component, Fragment } from 'react';
import { Grid } from 'react-mdl';
import PrimarySearchAppBar from '../layouts/home.js'

class MyGoals extends Component {
    render() {
        return(
            <Fragment>
            <PrimarySearchAppBar />
                <div style={{ width: '100%', margin: 'auto' }}>
                    <Grid className="mygoals-grid">
                        <h1>My goals Page</h1>
                    </Grid>
                </div>
            </Fragment>
        )
    }
}
export default MyGoals;