/**
 * Created by nik on 01.07.2017.
 */

import React, {Component} from 'react';
import TableComponent from '../common/TableComponent.jsx';
import {BASE_URL} from '../utils/utils';

class CountrieComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            columnNameHeaders: [
                "COUNTRY ID", "COUNTRY NAME", "REGION ID"
            ]
        }
    }

    componentDidMount() {
        fetch(BASE_URL + 'countries')
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
                <TableComponent
                    colnames={this.state.columnNameHeaders}
                    datatable={this.state.data} />
            </div>
        );
    }
}
export default CountrieComponent;
