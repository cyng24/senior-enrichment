import React, { Component } from 'react';
import { connect } from 'react-redux';
import store, { postCampus } from '../store';

  export default class AddCampusForm extends Component {
    
  constructor (props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    const newCampus = {
        name: event.target.name.value,
        image: '/images/venus.jpg'
    }
    store.dispatch(postCampus(newCampus));
    this.setState({
      campus: ''
    })
  }

  render() {
    return (
      <div>
      <form id="new-campus-form" onSubmit={this.handleSubmit}>
        <h3>Add new campus:
        <div className="input-group input-group-lg">
          <input
            className="form-control"
            type="text"
            name="name"
            onChange={this.handleChange}
            placeholder="Campus Name"
          />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">Create</button>
          </span>
        </div>
        </h3>
      </form>
      </div>
    );
  }
}