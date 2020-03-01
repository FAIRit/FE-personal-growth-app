import React, { Component } from 'react';
import { Header, Navigation, Drawer } from 'react-mdl';
import { Link } from 'react-router-dom';

class HeaderBase extends Component {
    render() {
        return(
            <div>
                <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white' }} to="/">Personal Growth</Link>} scroll>
                    <Navigation>
                        <Link to="/blog">Blog</Link>
                        <Link to="/mission">Mission</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer className="hamburger-menu" title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Personal Growth</Link>}>
                    <Navigation>
                        <Link to="/blog">Blog</Link>
                        <Link to="/mission">Mission</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
            </div>
        )
    }
}

class HeaderLanding extends Component {
    render() {
        let headerToShow;
        if (window.location.pathname==='/start') {
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