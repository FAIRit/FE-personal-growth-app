import React, { Component } from 'react';
import { FaSun } from 'react-icons/fa';

class HeaderDashboard extends Component {
    render() {
    return ( 
        <header className="header" data-testid="header">
            <nav>
                <div className="logo">
                    <img src="img/logo.png" alt="personalgrowth" />
                </div>
                <div className="settings">
                    <ul>
                        <li>+</li>
                        <li><FaSun /></li>
                    </ul>
                </div>
            </nav>
        </header>
        )
    }
}
export default HeaderDashboard;