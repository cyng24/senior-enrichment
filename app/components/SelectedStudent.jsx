import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import store from '../store';
import UpdateStudentForm from './UpdateStudentForm';

export default class SelectedStudent extends Component {

  constructor () {
    super();
    this.state = {
      student: {},
      campus: {}
    };
  }

  componentDidMount () {
    const studentId = this.props.match.params.id;
      axios.get(`/api/students/${studentId}`)
        .then(res => res.data)
        .then(student => this.setState({
          student: student, campus: student.campus
        }));
  }

  render () {
    const {student} = this.state;
    const {campus} = this.state;
    return (
      <div>
        <h2>Student: { student.name }</h2>
        <h4>ID: { student.id }</h4>
        <h4>CAMPUS: <Link className="thumbnail" to={`/campuses/${campus.id}`}>{ campus.name }</Link></h4>
        <br />
        <UpdateStudentForm id={student.id} />
      </div>
    );
  }
}
