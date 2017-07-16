/**
 * Created by nik on 01.07.2017.
 */

import React, {Component} from 'react';
import CustomTableComponent from '../../common/CustomTableComponent.jsx';
import {BASE_URL} from '../../utils/utils';

class JobComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            columnNameHeaders: [
                "JOB ID", "JOB TITLE", "MIN SALARY", "MAX SALARY"
            ]
        }
    }

    componentDidMount() {
        fetch(BASE_URL + 'jobs')
            .then(response => response.json())
            .then((data) => {
                this.setState({ data: data });
            });
    }

    render() {
        if (!this.state.data) {
            return <div>Loading</div>;
        }

        return (
            <div>
                <CustomTableComponent
                    columnNamesAttr={["JOB ID", "JOB TITLE"]}
                    fieldNamesAttr={["job_title","job_id"]}
                    dataAttr={this.state.data}
                    infoAttr={{"url":"/job", "idEntity":"job_id"}}
                />
            </div>
        );
    }
}

export default JobComponent;
