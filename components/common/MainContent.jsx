/**
 * Created by nik on 01.07.2017.
 */

import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import JobComponent from '../hr/JobComponent.jsx';
import DepartmentComponent from '../hr/DepartmentComponent.jsx';
import EmployeeComponent from '../hr/EmployeeComponent.jsx';
import LocationComponent from '../hr/LocationComponent.jsx';
import CountrieComponent from '../hr/CountrieComponent.jsx';
import RegionComponent from '../hr/RegionComponent.jsx';
import HistoryComponent from '../hr/HistoryComponent.jsx';
import PersonComponent from '../hr/PersonComponent.jsx';
import HomeComponent from '../hr/HomeComponent.jsx';


class MainContent extends Component {


    render() {
        return (
          <div>
              <Switch>
                  <Route exact path='/' component={HomeComponent}/>
                  <Route path='/employees' component={EmployeeComponent}/>
                  <Route path='/countries' component={CountrieComponent}/>
                  <Route path='/departments' component={DepartmentComponent}/>
                  <Route path='/jobs' component={JobComponent}/>
                  <Route path='/locations' component={LocationComponent}/>
                  <Route path='/regions' component={RegionComponent}/>
                  <Route path='/history' component={HistoryComponent}/>
                  <Route path='/persons' component={PersonComponent}/>
              </Switch>
          </div>
        );
    }
}

export default MainContent;
