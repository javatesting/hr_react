/**
 * Created by nik on 01.07.2017.
 */

import React, {Component} from 'react';
import {BASE_URL} from '../../utils/utils';
import axios from 'axios';

class JobInfoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fieldIdEntity: this.props.match.params.idEntity,
            job: null
        }
    }


    componentDidMount() {
        axios
            .get(BASE_URL + 'job/' + this.state.fieldIdEntity)
            .then(res => {
                    this.setState({ job: res.data[0] });
                }
            );
    }


    render() {
        if (!this.state.job) {
            return <div>Loading...</div>;
        }

        return (
            <div className="table-responsive" style={{width: '30%'}}>
                <table className="table table-bordered">
                    <tbody>
                    <tr>
                        <td>JOB ID :</td>
                        <td>{this.state.job.job_id}</td>
                    </tr>
                    <tr>
                        <td>JOB TITLE :</td>
                        <td>{this.state.job.job_title}</td>
                    </tr>
                    <tr>
                        <td>MIN SALARY :</td>
                        <td>{this.state.job.min_salary}</td>
                    </tr>
                    <tr>
                        <td>MAX SALARY :</td>
                        <td>{this.state.job.max_salary}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default JobInfoComponent;
