import React, {Component} from 'react';
import { FaInbox, FaRegCalendar, FaCalendarDay, FaRegCalendarAlt, FaChevronDown } from 'react-icons/fa';

class Sidebar extends Component {
    render() {
    return ( 
        <div className="sidebar">
            <ul className="sidebar__generic">
                <li>
                    <span>
                        <FaInbox />
                    </span>
                    <span>Dashboard</span>
                </li>
                <li>
                    <span>
                        <FaRegCalendar />
                    </span>
                    <span>Today</span>
                </li>
                <li>
                    <span>
                        <FaCalendarDay />
                    </span>
                    <span>Tommorow</span>
                </li>
                <li>
                    <span>
                        <FaRegCalendarAlt />
                    </span>
                    <span>Next 7 days</span>
                </li>
            </ul>

            <div className="sidebar__middle">
                <span><FaChevronDown /></span>
                <h2>Categories</h2>
            </div>
            <ul className="sidebar__projects">Categories will be here</ul>
            To do: Add category component here!
        </div>
        )
    }
}
export default Sidebar;