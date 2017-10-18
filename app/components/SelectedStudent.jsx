import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import store from '../store';

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

//how would I use campus.getStudents that's created from campus.hasmany(student)

  render () {
    const {student} = this.state;
    const {campus} = this.state;
    return (
      <div>
      <h3>Student: { student.name }</h3>
        <ul className="media-list">
            <div className="caption" key={ student.id } >
              <ul>
                  <li>ID: { student.id }</li>
                  <li>CAMPUS: 
                  <Link className="thumbnail" to={`/campuses/${campus.id}`}>
                  { campus.name }
                  </Link>
                  </li>
              </ul>
            </div>
        </ul>
      </div>
    );
  }
}
