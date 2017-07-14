/**
 * Created by nik on 07.07.2017.
 */

import React, {Component} from 'react';
import LinkToInfo from '../common/LinkToInfo.jsx';

class CustomTableComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            columnNamesField: this.props.columnNamesAttr,
            fieldNamesField: this.props.fieldNamesAttr,
            dataField: this.props.dataAttr,
            infoField: this.props.infoAttr
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
                                                    infoAttr={this.state.infoField}
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
            dataField: this.props.dataAttr,
            infoField: this.props.infoAttr
        }
    }

    getValue() {
        let idEntity = this.state.infoField.idEntity;
        return this.state.dataField[idEntity];
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
                <LinkToInfo
                    urlAttr={this.state.infoField.url}
                    valueAttr={this.getValue()}
                />
            </tr>
        );
    }
}

export default CustomTableComponent;
