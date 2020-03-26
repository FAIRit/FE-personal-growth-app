import React, { Component, Fragment } from 'react';
import { Grid } from 'react-mdl';
import PrimarySearchAppBar from '../../layouts/home.js'

class Summary extends Component {
    render() {
        return(
            <Fragment>
            <PrimarySearchAppBar />
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="summary-grid">
                    <h1>Summary Page</h1>
                </Grid>
            </div>
            </Fragment>
        )
    }
}
export default Summary;