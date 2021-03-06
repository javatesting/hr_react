/**
 * Created by nik on 01.07.2017.
 */

import React, {Component} from 'react';
import CustomTableComponent from '../../common/CustomTableComponent';
import {BASE_URL} from '../../utils/utils';

class RegionComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null

        }
    }

    componentDidMount() {
        fetch(BASE_URL + 'regions')
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
                    columnNamesAttr={["REGION NAME"]}
                    fieldNamesAttr={["region_name"]}
                    dataAttr={this.state.data}
                    infoAttr={{"url":"/region", "idEntity":"region_id"}}
                />
            </div>
        );
    }
}
export default RegionComponent;
