import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import store from '../store';

export default class SelectedCampus extends Component {

  constructor () {
    super();
    this.state = {
      students: [],
      campus: {}
    };
  }

  componentDidMount () {
    const campusId = this.props.match.params.campusId;
      axios.get(`/api/campuses/${campusId}/students`)
        .then(res => res.data)
        .then(students => this.setState({
          students
        }));
      axios.get(`/api/campuses/${campusId}`)
        .then(res => res.data)
        .then(campus => this.setState({
          campus
        }));
  }

//how would I use campus.getStudents that's created from campus.hasmany(student)

  render () {
    const {campus} = this.state;
    const {students} = this.state;
    return (
      <div>
      <h3>Campus: { campus.name }</h3>
        <ul className="media-list">
          { students.map(student => 
            <div className="caption" key={ student.id } >
              <h5>
              <Link className="thumbnail" to={`/students/${student.id}`}> 
                  <span>{ student.name }</span>
              </Link>
              </h5>
            </div>
            ) 
          }
        </ul>
      </div>
    );
  }
}
