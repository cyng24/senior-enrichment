import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { removeStudent } from '../store';
import AddStudentForm from './AddStudentForm';

export default class StudentList extends Component {

  constructor () {
    super();
    this.state = {
      students: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    axios.get(`/api/students`)
      .then(res => res.data)
      .then(students => this.setState({
        students
      }));
  }

  handleSubmit (event) {
    event.preventDefault();
    console.log("event value", event.target.value);
    removeStudent(event.target.value)
    
  }

//how would I use campus.getStudents that's created from campus.hasmany(student)

  render () {
    const students = this.state.students;
    return (
      <div>
        <ul className="media-list">
          { students.map(student => {
            return (
            <div className="caption" key={ student.id }>
                <h5> 
                    <span>{ student.id }</span>
                    <Link className="thumbnail" to={`/students/${student.id}`}>
                    <span>{ student.name }</span>
                    </Link>
                    <span>{ student.campus.name }</span>
                    <span className="input-group-btn">
                      <button 
                      className="btn btn-default"
                      onClick={this.handleSubmit}
                      value={student.id} type="submit">X</button>
                    </span>
                </h5>
            </div>
            );
            }) 
          }
        </ul>
        <AddStudentForm />
      </div>
    );
  }
}