/**
 * Created by nik on 01.07.2017.
 */

import React, {Component} from 'react';
import CustomTableComponent from '../../common/CustomTableComponent.jsx';
import {BASE_URL} from '../../utils/utils';

class DepartmentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }

    }

    componentDidMount() {
        fetch(BASE_URL + 'departments')
            .then(res => res.json())
            .then(data => {
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
                    columnNamesAttr={["DEPARTMENT NAME", "DEPARTMENT ID"]}
                    fieldNamesAttr={["department_name","department_id"]}
                    dataAttr={this.state.data}
                    infoAttr={{"url":"/department", "idEntity":"department_id"}}
                />
            </div>
        );
    }
}
export default DepartmentComponent;
