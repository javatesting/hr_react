/**
 * Created by nik on 01.07.2017.
 */

import React, {Component} from 'react';
import {BASE_URL} from '../../utils/utils';
import axios from 'axios';

class EmployeeInfoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fieldIdEntity: this.props.match.params.idEntity,
            employee: null
        }
    }


    componentDidMount() {
        axios
            .get(BASE_URL + 'employee/' + this.state.fieldIdEntity)
            .then(res => {
                    this.setState({ employee: res.data[0] });
                }
            );
    }


    render() {
        if (!this.state.employee) {
            return <div>Loading...</div>;
        }

        return (

            <div className="table-responsive" style={{width: '30%'}}>
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td>EMPLOYEE ID :</td>
                            <td>{this.state.employee.employee_id}</td>
                        </tr>
                        <tr>
                            <td>FIRST NAME :</td>
                            <td>{this.state.employee.first_name}</td>
                        </tr>
                        <tr>
                            <td>LAST NAME :</td>
                            <td>{this.state.employee.last_name}</td>
                        </tr>
                        <tr>
                            <td>EMAIL :</td>
                            <td>{this.state.employee.email}</td>
                        </tr>

                        <tr>
                            <td>PHONE NUMBER :</td>
                            <td>{this.state.employee.phone_number}</td>
                        </tr>

                        <tr>
                            <td>HIRE DATE :</td>
                            <td>{this.state.employee.hire_date}</td>
                        </tr>
                        <tr>
                            <td>JOB ID :</td>
                            <td>{this.state.employee.job_id}</td>
                        </tr>
                        <tr>
                            <td>SALARY :</td>
                            <td>{this.state.employee.salary}</td>
                        </tr>
                        <tr>
                            <td>COMMISSION PCT :</td>
                            <td>{this.state.employee.commission_pct}</td>
                        </tr>
                        <tr>
                            <td>MANAGER ID :</td>
                            <td>{this.state.employee.manager_id}</td>
                        </tr>
                        <tr>
                            <td>DEPARTMENT ID :</td>
                            <td>{this.state.employee.department_id}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default EmployeeInfoComponent;
