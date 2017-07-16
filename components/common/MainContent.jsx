/**
 * Created by nik on 01.07.2017.
 */

import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import JobComponent from '../hr/job/JobComponent.jsx';
import JobInfoComponent from '../hr/job/JobInfoComponent.jsx';

import DepartmentComponent from '../hr/department/DepartmentComponent.jsx';
import DepartmentInfoComponent from '../hr/department/DepartmentInfoComponent.jsx';

import EmployeeComponent from '../hr/employee/EmployeeComponent.jsx';
import EmployeeInfoComponent from  '../hr/employee/EmployeeInfoComponent.jsx';

import LocationComponent from '../hr/location/LocationComponent';
import LocationInfoComponent from '../hr/location/LocationInfoComponent';

import CountrieComponent from '../hr/countrie/CountrieComponent.jsx';
import CountrieInfoComponent from '../hr/countrie/CountrieInfoComponent.jsx';

import RegionComponent from '../hr/region/RegionComponent.jsx';
import HistoryComponent from '../hr/history/HistoryComponent.jsx';

import PersonComponent from '../hr/person/PersonComponent';
import PersonInfoComponent from '../hr/person/PersonInfoComponent';

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
                  <Route path='/countrie/:idEntity' component={CountrieInfoComponent}/>

                  <Route path='/departments' component={DepartmentComponent}/>
                  <Route path='/department/:idEntity' component={DepartmentInfoComponent}/>

                  <Route path='/jobs' component={JobComponent}/>
                  <Route path='/job/:idEntity' component={JobInfoComponent}/>

                  <Route path='/locations' component={LocationComponent}/>
                  <Route path='/location/:idEntity' component={LocationInfoComponent}/>

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
