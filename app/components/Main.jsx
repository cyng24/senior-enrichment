import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import StudentList from './StudentList';
import CampusList from './CampusList';
import SelectedCampus from './SelectedCampus';
import SelectedStudent from './SelectedStudent';
import AddCampusForm from './AddCampusForm';
import AddStudentForm from './AddStudentForm';

function Main () {
  return (
    <Router>
      <div id="main" className="main-container">
        <Header />
        <div className="col-xs-10">
          <Switch>
            <Route exact path="/campuses" component={CampusList} />
            <Route exact path="/students" component={StudentList} />
            <Route exact path="/campuses/:campusId" component={SelectedCampus} />
            <Route exact path="/students/:id" component={SelectedStudent} />
            <Route exact path="/addCampus" component={AddCampusForm} />
            <Route exact path="/addStudent" component={AddStudentForm} />
            <Route component={CampusList} />   
          </Switch>
        </div>
      </div>
  </Router>
  );
}

export default Main;