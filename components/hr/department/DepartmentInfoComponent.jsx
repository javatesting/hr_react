/**
 * Created by nik on 01.07.2017.
 */

import React, {Component} from 'react';
import {BASE_URL} from '../../utils/utils';
import axios from 'axios';

class DepartmentInfoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fieldIdEntity: this.props.match.params.idEntity,
            department: null
        }
    }


    componentDidMount() {
        axios
            .get(BASE_URL + 'department/' + this.state.fieldIdEntity)
            .then(res => {
                    this.setState({ department: res.data[0] });
                }
            );
    }


    render() {
        if (!this.state.department) {
            return <div>Loading...</div>;
        }

        return (
            <div className="table-responsive" style={{width: '30%'}}>
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td>DEPARTMENT ID</td>
                            <td>{this.state.department.department_id}</td>
                        </tr>
                        <tr>
                            <td>DEPARTMENT NAME</td>
                            <td>{this.state.department.department_name}</td>
                        </tr>
                        <tr>
                            <td>MANAGER ID</td>
                            <td>{this.state.department.manager_id}</td>
                        </tr>
                        <tr>
                            <td>LOCATION ID</td>
                            <td>{this.state.department.location_id}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default DepartmentInfoComponent;
