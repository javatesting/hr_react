/**
 * Created by nik on 17.07.2017.
 */
import React, {Component} from 'react';
import axios from 'axios';
import {BASE_URL} from '../../utils/utils';

class PersonNewComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            last_name:'',
            age: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        const formPayload = {
            name: this.state.name,
            last_name: this.state.last_name,
            age: this.state.age
        };
        // axios
        //     .post(BASE_URL + 'person/add', formPayload)
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
        //
        fetch(BASE_URL + 'person/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formPayload)
        })
        // console.log('Send this in a POST request:', formPayload);
        // this.handleClearForm(e);
    }


    render() {

         return (
             <form onSubmit={this.handleSubmit}>
                 <div className="table-responsive" style={{width: '30%'}}>
                     <table className="table table-bordered">
                         <tbody>
                         <tr>
                             <td><label>Name :</label></td>
                             <td><input className="form-control" value={this.state.name} onChange={e => this.setState({ name: e.target.value })}/></td>
                         </tr>
                         <tr>
                             <td><label>Last name :</label></td>
                             <td><input className="form-control" value={this.state.last_name} onChange={e => this.setState({ last_name: e.target.value })}/></td>
                         </tr>
                         <tr>
                             <td><label>Age :</label></td>
                             <td><input className="form-control" value={this.state.age} onChange={e => this.setState({ age: e.target.value })}/></td>
                         </tr>
                         <tr>
                             <td><button  type="submit" className="btn btn-success">Create</button></td>
                             <td><button className="btn btn-danger">Cancel</button></td>
                         </tr>
                         </tbody>
                     </table>
                 </div>
             </form>
         );
    }
}
export default PersonNewComponent;