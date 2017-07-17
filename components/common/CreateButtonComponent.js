/**
 * Created by nik on 17.07.2017.
 */

import React, {Component} from 'react';

class CreateButonComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            linkField: this.props.link

        };

        this.goToForm = this.goToForm.bind(this);
    }

    goToForm(){
        this.props.other.push(this.props.link);
    }

    render(){
        return (
            <button  className="btn btn-danger btn-circle"
                     onClick={this.goToForm}
                     style={{position: 'fixed', bottom: '5%', right: '3%'}}> + </button>
        );
    }
}
// const CreateButonComponent = () => (
//     <button  className="btn btn-danger btn-circle"
//              style={{position: 'fixed', bottom: '5%', right: '3%'}}> +  </button>
// );
export default CreateButonComponent;