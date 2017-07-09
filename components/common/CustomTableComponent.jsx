/**
 * Created by nik on 07.07.2017.
 */

import React, {Component} from 'react';

class CustomTableComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            columnNamesField: this.props.columnNamesAttr,
            fieldNamesField: this.props.fieldNamesAttr,
            dataField: this.props.dataAttr
        }
    }


    render(){

        return (
            <div className="table-responsive">
                <table className="table table-striped">
                    <HeaderTableComponent columnNamesAttr={this.state.columnNamesField} />
                    <tbody>
                    {
                        this.state
                            .dataField
                            .map( (item, i) => <RowTableComponent
                                                    key={i}
                                                    fieldNamesAttr={this.state.fieldNamesField}
                                                    dataAttr={item}
                                                />)
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

class HeaderTableComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            columnNamesField: this.props.columnNamesAttr
        }
    }

    render(){
        return (
            <thead>
            <tr>
                {
                    this.state
                        .columnNamesField
                        .map( (columnName, i) => <td key={i}>{columnName}</td> )
                }
            </tr>
            </thead>
        );
    }
}

class RowTableComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            fieldNamesField: this.props.fieldNamesAttr,
            dataField: this.props.dataAttr
        }
    }

    render()
    {

        return (
            <tr>
                {
                    this.state
                        .fieldNamesField
                        .map( (item, i) => <td key={i}>{this.state.dataField[item]}</td>)
                }
            </tr>
        );
    }
}

export default CustomTableComponent;
