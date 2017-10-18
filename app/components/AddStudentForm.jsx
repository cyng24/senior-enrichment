import React, { Component } from 'react';
import { connect } from 'react-redux';
import store, { addStudent, postStudent } from '../store';

  function AddStudentForm (props) {

    const {handleSubmit, handleChangeName, handleChangeCampus} = props;

    return (
      <div>
      <form id="new-student-form" onSubmit={handleSubmit}>
        <label>Add new student: </label>
        <div className="input-group input-group-lg">
          <input
            className="form-control"
            type="text"
            name="name"
            value={props.student}
            onChange={handleChangeName}
            placeholder="Student Name"
          />
          <input
            className="form-control"
            type="text"
            name="name"
            value={props.campus}
            onChange={handleChangeCampus}
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

const mapState = function(state) {
  return {
    newStudent: state.newStudent
  };
};

const mapDispatch = function(dispatch) {
  return {
    handleChangeName(event){
      dispatch(addStudent(event.target.value))
    },
    handleChangeCampus(event){
      dispatch(addStudent(event.target.value))
    },
    handleSubmit(event){
      event.preventDefault();
      dispatch(postStudent(event.target.newStudent.value));
    }
  }
}

export default AddStudentForm;