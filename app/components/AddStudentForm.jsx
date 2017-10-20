import React, { Component } from 'react';
import { connect } from 'react-redux';
import store, { postStudent } from '../store';

  export default class AddStudentForm extends Component {
    
  constructor (props) {
      super(props);
      // this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(event){
  //  console.log('in handle change')
  // }

  handleSubmit(event){
    event.preventDefault();
    const name = event.target.name.value;
    const campusId = event.target.campus.value;
    console.log('name', name, "campus", campusId);
    
    const newStudent = {
      name,
      campusId
    }

    store.dispatch(postStudent(newStudent));
  }

  render() {

    return (
      <div>
      <form id="new-student-form" onSubmit={this.handleSubmit}>
        <h3>Add new student: </h3>
        <div className="input-group input-group-lg">
          <input
            className="form-control"
            type="text"
            name="name"
            onChange={this.handleChange}
            placeholder="Student Name"
          />
          <input
            className="form-control"
            type="text"
            name="campus"
            onChange={this.handleChange}
            placeholder="Campus"
          />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">Enroll</button>
          </span>
        </div>
       
      </form>
      </div>
    );
  }
}