/**
 * Created by nik on 01.07.2017.
 */

import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import JobComponent from '../hr/job/JobComponent.jsx';
import DepartmentComponent from '../hr/department/DepartmentComponent.jsx';

import EmployeeComponent from '../hr/employee/EmployeeComponent.jsx';
import EmployeeInfoComponent from  '../hr/employee/EmployeeInfoComponent.jsx';

import LocationComponent from '../hr/location/LocationComponent.jsx';
import CountrieComponent from '../hr/countrie/CountrieComponent.jsx';
import RegionComponent from '../hr/region/RegionComponent.jsx';
import HistoryComponent from '../hr/history/HistoryComponent.jsx';

import PersonComponent from '../hr/person/PersonComponent.jsx';
import PersonInfoComponent from '../hr/person/PersonInfoComponent.jsx';

import HomeComponent from '../hr/HomeComponent.jsx';

class MainContent extends Component {


    render() {
        return (
          <div>
              <Switch>
                  <Route exact path='/' component={HomeComponent}/>

                  <Route path='/employees' component={EmployeeComponent}/>
                  <Route path='/employee/:idEntity' component={EmployeeInfoComponent}/>

                  <Route path='/countries' component={CountrieComponent}/>
                  <Route path='/departments' component={DepartmentComponent}/>
                  <Route path='/jobs' component={JobComponent}/>
                  <Route path='/locations' component={LocationComponent}/>
                  <Route path='/regions' component={RegionComponent}/>
                  <Route path='/history' component={HistoryComponent}/>

                  <Route path='/persons' component={PersonComponent}/>
                  <Route path='/person/:idEntity' component={PersonInfoComponent}/>
              </Switch>
          </div>
        );
    }
}

export default MainContent;
