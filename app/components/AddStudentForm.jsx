import React, { Component } from 'react';
import { connect } from 'react-redux';
import store, { postStudent } from '../store';

  export default class AddStudentForm extends Component {
    
  constructor (props) {
      super(props);
      this.state = {
        name: '',
        campusId: ''
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    if(event.target.name === "name") {
      this.setState({name: event.target.value} )
    } else if(event.target.name === "campus") {
      this.setState({campusId: event.target.value})
    }
  }

  handleSubmit(event){
    event.preventDefault();
    const newStudent = {
      name: this.state.name,
      campusId: parseInt(this.state.campusId)
    };
    console.log("newStudent", newStudent);
    store.dispatch(postStudent(newStudent));
    this.setState({
      name: '',
      campusId: ''
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