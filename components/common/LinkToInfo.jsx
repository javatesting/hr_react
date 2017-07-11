/**
 * Created by nik on 01.07.2017.
 */

import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';


class LinkToInfo extends Component {
 constructor(props){
     super(props);
     this.state = {
         urlField: this.props.urlAttr,
         valueField: this.props.valueAttr
     }
 }

 goTo() {
     return this.state.urlField + '/' +this.state.valueField
 }
    render() {
        return (
          <td>
              <Link  to={this.goTo()}>INFO</Link>
          </td>
        );
    }
}

export default LinkToInfo;
