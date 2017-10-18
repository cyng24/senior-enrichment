import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import StudentList from './StudentList';
import CampusList from './CampusList';
import SelectedCampus from './SelectedCampus';
import SelectedStudent from './SelectedStudent';

function Main () {
  return (
    <Router>
      <div id="main" className="container-fluid">
        <Header />
        <div className="col-xs-10">
          <Switch>
            <Route exact path="/campuses" component={CampusList} />
            <Route exact path="/students" component={StudentList} />
            <Route path="/campuses/:campusId" component={SelectedCampus} />
            <Route path="/students/:id" component={SelectedStudent} />
            <Route component={CampusList} />   
          </Switch>
        </div>
      </div>
  </Router>
  );
}

export default Main;