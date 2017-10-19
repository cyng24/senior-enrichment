import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddCampusForm from './AddCampusForm';
import store, { fetchCampuses } from '../store'

export default class CampusList extends Component {

    constructor () {
        super();
        this.state = store.getState();
    }

    componentDidMount () {
       store.dispatch(fetchCampuses());
       this.unsubscribe = store.subscribe( () => this.setState(store.getState()));
    }

    componentWillUnmount() {
        this.unsubscribe();
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
                        </div>
                        <img id="image" src={ campus.image } />
                    </Link>
                    </div>
                ))
                }
            </div>
            </div>
            <div>
                <Link to={'/addCampus'}> + add Campus </Link>
            </div>
            </campus>
        )
    }
}
