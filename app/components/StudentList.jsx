import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store, { fetchStudents, unpostStudent } from '../store';
import SelectedStudent from './SelectedStudent'
import AddStudentForm from './AddStudentForm';

export default class StudentList extends Component {

  constructor () {
    super();
    this.state = store.getState();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    store.dispatch(fetchStudents());
    this.unsubscribe = store.subscribe( () => this.setState(store.getState()));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleSubmit (event) {
    event.preventDefault();
    console.log("event value", event.target.value);
    store.dispatch(unpostStudent(event.target.value));
  }

//how would I use campus.getStudents that's created from campus.hasmany(student)

  render () {
    const students = this.state.students;
    return (
      <students>
      <div>
        <ul className="media-list">
          { students.map(student => {
            // <SelectedStudent id={student.id}/>
            return (
            <div className="caption" key={ student.id }>
                <h3> 
                    <span id="id">ID: { student.id }</span>
                    <Link className="thumbnail" to={`/students/${student.id}`}>
                    <span id="name">{ student.name }</span>
                    </Link>
                    <span id="campus">{ student.campus.name }</span>
                    <span id="button" className="input-group-btn">
                      <button 
                      className="btn btn-default"
                      onClick={this.handleSubmit}
                      value={student.id} type="submit">X</button>
                    </span>
                </h3>
            </div> 
            );
          }) 
          }
        </ul>
        <br />
        <Link to={'/addStudent'}>+ Add Student</Link>
      </div>
      </students>
    );
  }
}