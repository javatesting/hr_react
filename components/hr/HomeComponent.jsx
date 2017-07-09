/**
 * Created by nik on 01.07.2017.
 */

import React, {Component} from 'react';
import TableComponent from './../TableComponent.jsx';
import {BASE_URL} from '../utils/utils';

class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,

        }
    }



    render() {
        return (
            <div>
               <h1>home</h1>
            </div>
        );
    }
}
export default HomeComponent;
