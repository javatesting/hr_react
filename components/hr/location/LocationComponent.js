/**
 * Created by nik on 01.07.2017.
 */

import React, {Component} from 'react';
import CustomTableComponent from '../../common/CustomTableComponent.js';
import {BASE_URL} from '../../utils/utils';
class LocationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null

        }
    }


    componentDidMount() {
        fetch(BASE_URL + 'locations')
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
                    columnNamesAttr={["CITY"]}
                    fieldNamesAttr={["city"]}
                    dataAttr={this.state.data}
                    infoAttr={{"url":"/location", "idEntity":"location_id"}}
                />
            </div>
        );
    }
}
export default LocationComponent;
