import React, { Component, Fragment } from 'react';
import { Header, Navigation, Drawer } from 'react-mdl';
import { Link } from 'react-router-dom';

class HeaderBase extends Component {
    render() {
        return(
            <Fragment>
                <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white' }} to="/">Personal Growth</Link>} scroll>
                    <Navigation>
                        <Link to="/blog">Blog</Link>
                        <Link to="/mission">Mission</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Personal Growth</Link>}>
                    <Navigation>
                        <Link to="/blog">Blog</Link>
                        <Link to="/mission">Mission</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
            </Fragment>
        )
    }
}

class HeaderLanding extends Component {
    render() {
        let headerToShow;
        if (window.location.pathname==='/start' || window.location.pathname==='/login' || window.location.pathname==='/home' ||  window.location.pathname==='/mygoals') {
            headerToShow = null;

        } else {
            headerToShow = <HeaderBase/>
        }
        return(
            headerToShow
        )
    }
}
export default HeaderLanding;