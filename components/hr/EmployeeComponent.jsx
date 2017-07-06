/**
 * Created by nik on 01.07.2017.
 */

import React, {Component} from 'react';
import TableComponent from './../TableComponent.jsx';
import {BASE_URL} from '../utils/utils';

class EmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            columnNameHeaders: [
                "EMPLOYEE ID", "FIRST NAME", "LAST NAME",
                "EMAIL", "PHONE NUMBER", "HIRE DATE",
                "JOB ID", "SALARY", "COMMISSION PCT",
                "MANAGER ID", "DEPARTMENT ID"
            ]
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
                <TableComponent
                    colnames={this.state.columnNameHeaders}
                    datatable={this.state.data} />
            </div>
        );
    }
}
export default EmployeeComponent;
