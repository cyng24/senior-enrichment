import React, { Component } from 'react';
import { connect } from 'react-redux';
import store, { updateStudent } from '../store';

  export default class UpdateStudentForm extends Component {
    
  constructor (props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    const updatedStudent = {
        name: event.target.name.value,
        id: this.props.id,
        campusId: parseInt(event.target.campus.value)
    }
    store.dispatch(updateStudent(updatedStudent));
  }

  render() {
    return (
      <div>
      <form id="new-campus-form" onSubmit={this.handleSubmit}>
        <h3>Update student:
        <div className="input-group input-group-lg">
            <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Student Name"
            />
            <input
                className="form-control"
                type="text"
                name="campus"
                placeholder="Campus"
            /> 
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">Update</button>
          </span>
        </div>
        </h3>
      </form>
      </div>
    );
  }
}