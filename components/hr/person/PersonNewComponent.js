/**
 * Created by nik on 17.07.2017.
 */
import React, {Component} from 'react';
import axios from 'axios';

class PersonNewComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            last_name:'',
            age: ''
        }

    }

    handleSubmit(e) {
        e.preventDefault();

        const formPayload = {
            name: this.state.name,
            last_name: this.state.last_name,
            age: this.state.age
        };

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
                             <td><input className="form-control" value={this.state.name}/></td>
                         </tr>
                         <tr>
                             <td><label>Last name :</label></td>
                             <td><input className="form-control" value={this.state.last_name}/></td>
                         </tr>
                         <tr>
                             <td><label>Age :</label></td>
                             <td><input className="form-control" value={this.state.age}/></td>
                         </tr>
                         </tbody>
                     </table>
                 </div>
             </form>
         );
    }
}
export default PersonNewComponent;