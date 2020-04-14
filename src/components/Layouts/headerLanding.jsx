import React, { Component, Fragment } from "react";
import { Header, Navigation, Drawer } from "react-mdl";
import { Link } from "react-router-dom";
import "./headerLanding.css";

class HeaderBase extends Component {
  render() {
    return (
      <Fragment>
        <div className="headerLanding">
          <Header
            className="header-color"
            title={
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Personal Growth
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/blog">Blog</Link>
              <Link to="/mission">Mission</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
        </div>
        <Drawer
          title={
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Personal Growth
            </Link>
          }
        >
          <Navigation>
            <Link to="/blog">Blog</Link>
            <Link to="/mission">Mission</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
      </Fragment>
    );
  }
}

class HeaderLanding extends Component {
  render() {
    let headerToShow;
    if (
      window.location.pathname === "/start" ||
      window.location.pathname === "/login" ||
      window.location.pathname === "/home"
    ) {
      headerToShow = null;
    } else {
      headerToShow = <HeaderBase />;
    }
    return headerToShow;
  }
}
export default HeaderLanding;
