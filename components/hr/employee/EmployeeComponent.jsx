/**
 * Created by nik on 01.07.2017.
 */

import React, {Component} from 'react';
import CustomTableComponent from '../../common/CustomTableComponent.js';
import {BASE_URL} from '../../utils/utils';

class EmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,

        }

    }

    componentDidMount() {
        fetch(BASE_URL + 'employees')
            .then(response => response.json())
            .then((data) => {
                this.setState({ data: data });
            });
    }

    render() {
        if (!this.state.data) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <CustomTableComponent
                    columnNamesAttr={["FIRST NAME", "LAST NAME"]}
                    fieldNamesAttr={["first_name","last_name"]}
                    dataAttr={this.state.data}
                    infoAttr={{"url":"/employee", "idEntity":"employee_id"}}
                />
            </div>
        );
    }
}
export default EmployeeComponent;
