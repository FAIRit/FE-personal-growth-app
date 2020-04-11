import React, { Component } from 'react';

class Landing extends Component {
    render() {
        return (
            <div className="landing-grid">
            <div className="header__text-box">
                <h1>Check how to measure your personal growth!</h1><br />
                <h2>Our aplication will help you change our life and control your habits.</h2>
                <br />
                <a href="login" className="btn btn--white btn---animated">Discover our app</a>
            </div>
            <footer id="footer">
            <p>COPYRIGHT © 2020 Ela Szulc</p>
        </footer>
        </div>
        )
    }
}
export default Landing;