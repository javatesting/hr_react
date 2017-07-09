/**
 * Created by nik on 30.06.2017.
 */
import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

 class SideNavBar extends Component {
    render() {
        return (
            <div>
                <ul className="nav nav-sidebar">
                    <li >
                        <Link to="/employees">Employees</Link>
                    </li>
                    <li >
                        <Link to="/countries" >Countries</Link>
                    </li>
                    <li >
                        <Link to="/departments">Departments</Link>
                    </li>
                    <li >
                        <Link to="/jobs">Jobs</Link>
                    </li>
                    <li >
                        <Link to="/locations">Locations</Link>
                    </li>
                    <li >
                        <Link to="/regions">Regions</Link>
                    </li>
                    <li >
                        <Link to="/history">History</Link>
                    </li>
                    <li >
                        <Link to="/persons">Persons</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default SideNavBar;