/**
 * Created by nik on 01.07.2017.
 */

import React, {Component} from 'react';
import {BASE_URL} from '../../utils/utils';
import axios from 'axios';

class LocationInfoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fieldIdEntity: this.props.match.params.idEntity,
            location: null
        }
    }


    componentDidMount() {
        axios
            .get(BASE_URL + 'location/' + this.state.fieldIdEntity)
            .then(res => {
                    this.setState({ location: res.data[0] });
                }
            );
    }


    render() {
        if (!this.state.location) {
            return <div>Loading...</div>;
        }

        return (
            <div className="table-responsive" style={{width: '30%'}}>
                <table className="table table-bordered">
                    <tbody>
                    <tr>
                        <td>LOCATION ID</td>
                        <td>{this.state.location.location_id}</td>
                    </tr>
                    <tr>
                        <td>STREET ADDRESS</td>
                        <td>{this.state.location.street_address}</td>
                    </tr>
                    <tr>
                        <td>POSTAL CODE</td>
                        <td>{this.state.location.postal_code}</td>
                    </tr>
                    <tr>
                        <td>CITY</td>
                        <td>{this.state.location.city}</td>
                    </tr>
                    <tr>
                        <td>STATE PROVINCE</td>
                        <td>{this.state.location.state_province}</td>
                    </tr>
                    <tr>
                        <td>COUNTRY ID</td>
                        <td>{this.state.location.country_id}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default LocationInfoComponent;
