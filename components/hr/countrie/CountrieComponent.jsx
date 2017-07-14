/**
 * Created by nik on 01.07.2017.
 */

import React, {Component} from 'react';
import CustomTableComponent from '../../common/CustomTableComponent.jsx';
import {BASE_URL} from '../../utils/utils';

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
                <CustomTableComponent
                    columnNamesAttr={["COUNTRY NAME", "REGION_ID"]}
                    fieldNamesAttr={["country_name","region_id"]}
                    dataAttr={this.state.data}
                    infoAttr={{"url":"/countrie", "idEntity":"country_id"}}
                />
            </div>
        );
    }
}
export default CountrieComponent;
