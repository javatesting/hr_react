/**
 * Created by nik on 01.07.2017.
 */

import React, {Component} from 'react';
import {BASE_URL} from '../../utils/utils';
import axios from 'axios';

class RegionInfoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fieldIdEntity: this.props.match.params.idEntity,
            region: null
        }
    }


    componentDidMount() {
        axios
            .get(BASE_URL + 'region/' + this.state.fieldIdEntity)
            .then(res => {
                    this.setState({ region: res.data[0] });
                }
            );
    }


    render() {
        if (!this.state.region) {
            return <div>Loading...</div>;
        }

        return (
            <div className="table-responsive" style={{width: '30%'}}>
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td>REGION ID</td>
                            <td>{this.state.region.region_id}</td>
                        </tr>
                        <tr>
                            <td>REGION NAME</td>
                            <td>{this.state.region.region_name}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default RegionInfoComponent;
