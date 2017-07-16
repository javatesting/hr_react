/**
 * Created by nik on 01.07.2017.
 */

import React, {Component} from 'react';
import {BASE_URL} from '../../utils/utils';
import axios from 'axios';

class PersonInfoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fieldIdEntity: this.props.match.params.idEntity,
            persona: null
        }
    }


    componentDidMount() {
        axios
            .get(BASE_URL + 'person/' + this.state.fieldIdEntity)
            .then(res => {
                    this.setState({ persona: res.data[0] });
                }
            );
    }


    render() {
        if (!this.state.persona) {
            return <div>Loading...</div>;
        }

        return (
            <div className="table-responsive" style={{width: '30%'}}>
                <table className="table table-bordered">
                    <tbody>
                    <tr>
                        <td>Person Id</td>
                        <td>{this.state.persona.person_id}</td>
                    </tr>
                    <tr>
                        <td>Name :</td>
                        <td>{this.state.persona.name}</td>
                    </tr>
                    <tr>
                        <td>Last name :</td>
                        <td>{this.state.persona.last_name}</td>
                    </tr>
                    <tr>
                        <td>Age :</td>
                        <td>{this.state.persona.age}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default PersonInfoComponent;
