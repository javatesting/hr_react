/**
 * Created by nik on 01.07.2017.
 */

import React, {Component} from 'react';
import {BASE_URL} from '../../utils/utils';
import axios from 'axios';

class CountrieInfoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fieldIdEntity: this.props.match.params.idEntity,
            countrie: null
        }
    }


    componentDidMount() {
        axios
            .get(BASE_URL + 'countrie/' + this.state.fieldIdEntity)
            .then(res => {
                    this.setState({ countrie: res.data[0] });
                }
            );
    }


    render() {
        if (!this.state.countrie) {
            return <div>Loading...</div>;
        }

        return (
            <div className="table-responsive" style={{width: '30%'}}>
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td>COUNTRY ID</td>
                            <td>{this.state.countrie.country_id}</td>
                        </tr>
                        <tr>
                            <td>COUNTRY NAME</td>
                            <td>{this.state.countrie.country_name}</td>
                        </tr>
                        <tr>
                            <td>REGION ID</td>
                            <td>{this.state.countrie.region_id}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default CountrieInfoComponent;
