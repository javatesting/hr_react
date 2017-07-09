/**
 * Created by nik on 01.07.2017.
 */

import React, {Component} from 'react';
//import TableComponent from './../TableComponent.jsx';
import CustomTableComponent from '../common/CustomTableComponent.jsx';
import {BASE_URL} from '../utils/utils';
import axios from 'axios';

class PersonComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            columnNameHeaders: [
                "PERSON ID",
                "NAME",
                "LAST NAME",
                "AGE"

            ]
        }
    }

/**
 *
 *
 *
 */
 getHeaders() {
    return [
        "PERSON ID",
        "NAME"
    ];
}

getFields() {
    return ["person_id", "name"]
}

    componentDidMount() {
        axios
            .get(BASE_URL + 'persons')
            .then(res => {
                    this.setState({ data: res.data });
                }
            );
    }

    render() {
        if (!this.state.data) {
            return <div>Loading</div>;
        }

        return (
            <div>
                <CustomTableComponent
                    columnNamesAttr={this.getHeaders()}
                    fieldNamesAttr={this.getFields()}
                    dataAttr={this.state.data}
                    />
            </div>
        );
    }
}
export default PersonComponent;
