/**
 * Created by nik on 02.07.2017.
 */
import React, {Component} from 'react';

class TableComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            columnNames: this.props.colnames,
            rawData: this.props.datatable
        }
    }

    render() {
        return (

            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        {
                            this.state
                                .columnNames
                                .map( (columnName, i) => <td key={i}>{columnName}</td> )
                        }
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state
                            .rawData
                            .map(
                                (row, i) => <TableRowComponent key={i} row={row}/>
                            )
                    }
                    </tbody>
                </table>
            </div>

        );
    }
}

class TableRowComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataRow: this.props.row,
            keys: Object.keys(this.props.row).map((value)=>(value))
        }
    }

    render() {
        return (
            <tr>
                {
                    this.state
                        .keys
                        .map((item, i) => <td key={i}>{this.state.dataRow[item]}</td>)
                }
            </tr>
        );
    }
}

export default TableComponent;