import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store, { fetchCampus, fetchStudents } from '../store';
import UpdateCampusForm from './UpdateCampusForm';

export default class SelectedCampus extends Component {

  constructor () {
    super();
    this.state = store.getState();
  }

  componentDidMount () {
    const campusId = this.props.match.params.campusId;
    store.dispatch(fetchStudents());
    store.dispatch(fetchCampus(campusId));
    this.unsubscribe = store.subscribe( () => this.setState(store.getState()));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

//how would I use campus.getStudents that's created from campus.hasmany(student)

  render () {
    const {campus} = this.state;
    console.log("campus", campus);
    const {students} = this.state;
    const campusStudents = students.filter((student) => {if(student.campusId === campus.id){return student}})
    console.log("students", campusStudents);
    return (
      <div>
      <h2>Campus: { campus.name }</h2>
      <h4>ID: { campus.id }</h4>
      <h4>Students: </h4>
        <ul className="media-list">
          { campusStudents.map(student => { return(
            <li className="caption" key={ student.id } >
              <Link className="thumbnail" to={`/students/${student.id}`}> { student.name } </Link>
            </li>
          )}) 
          }
        </ul>
        <br />
        <Link to={'/addStudent'}>+ Add Student To { campus.name }</Link>
        <br />
        <UpdateCampusForm id={campus.id} />
      </div>
    );
  }
}
