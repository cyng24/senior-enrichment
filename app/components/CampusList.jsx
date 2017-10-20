import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddCampusForm from './AddCampusForm';
import store, { fetchCampuses, unpostCampus } from '../store'

export default class CampusList extends Component {

    constructor () {
        super();
        this.state = store.getState();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount () {
       store.dispatch(fetchCampuses());
       this.unsubscribe = store.subscribe( () => this.setState(store.getState()));
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    handleSubmit (event) {
        event.preventDefault();
        console.log("event value", event.target.value);
        store.dispatch(unpostCampus(event.target.value));
      }

    render() {
        const campuses = this.state.campuses;
        return (
            <campus>
            <div>
            <div id="campuses">
                {
                campuses.map(campus => (
                    <div className="col-xs-4" key={ campus.id }>
                    <Link className="thumbnail" to={`/campuses/${campus.id}`}>
                        <div className="caption">
                        <span id="image">{ campus.name }</span>
                        <span id="button" className="input-group-btn">
                            <button 
                            className="btn btn-default"
                            onClick={this.handleSubmit}
                            value={campus.id} type="submit">X</button>
                        </span>
                        </div>
                        <img id="image" src={ campus.image } />
                    </Link>
                    
                    </div>
                ))
                }
            </div>
            </div>
            <div>
                <AddCampusForm />
            </div>
            </campus>
        )
    }
}
