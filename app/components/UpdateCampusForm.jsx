import React, { Component } from 'react';
import { connect } from 'react-redux';
import store, { updateCampus } from '../store';

  export default class UpdateCampusForm extends Component {
    
  constructor (props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    const updatedCampus = {
        name: event.target.name.value,
        id: this.props.id,
        image: '/images/'+ event.target.image.value+'.jpg'
    }
    store.dispatch(updateCampus(updatedCampus));
  }

  render() {
    return (
      <div>
      <form id="new-campus-form" onSubmit={this.handleSubmit}>
        <h3>Update campus:
        <div className="input-group input-group-lg">
            <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Campus Name"
            />
            <input
                className="form-control"
                type="text"
                name="image"
                placeholder="Campus Icon"
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