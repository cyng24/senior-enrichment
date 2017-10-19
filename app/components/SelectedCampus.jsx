import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store, { fetchCampus, fetchStudents } from '../store';

export default class SelectedCampus extends Component {

  constructor () {
    super();
    this.state = store.getState();
  }

  componentDidMount () {
    const campusId = this.props.match.params.campusId;
    store.dispatch(fetchCampus(campusId));
    store.dispatch(fetchStudents());
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
    console.log("students", students)
    return (
      <div>
      <h3>Campus: { campus.name }</h3>
        {/* <ul className="media-list">
          { students.map(student => { if(student.campusId === campus.id) {
            <div className="caption" key={ student.id } >
              <h5>
              <Link className="thumbnail" to={`/students/${student.id}`}> 
                  <span>{ student.name }</span>
              </Link>
              </h5>
            </div>
            }}) 
          }
        </ul> */}
      </div>
    );
  }
}
