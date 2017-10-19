import React, { Component } from 'react';
import { connect } from 'react-redux';
import store, { addStudent, postStudent } from '../store';

  export default class AddStudentForm extends Component {
    
  constructor () {
      super();
      this.state = {
        student: '',
        campus: ''
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    if(event.target.name === "name") {
      this.setState({student: event.target.value} )
    } else if(event.target.name === "campus") {
      this.setState({campus: event.target.value})
    }
    console.log("state", this.state);
  }

  handleSubmit(event){
    event.preventDefault();
    const newStudent = {
      student: this.state.student,
      campus: this.state.campus
    };
    postStudent(newStudent);
    this.setState({
      student: '',
      campus: ''
    })
  }

  render() {
    return (
      <div>
      <form id="new-student-form" onSubmit={this.handleSubmit}>
        <h3>Add new student:
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
        </h3>
      </form>
      </div>
    );
  }
}