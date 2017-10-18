import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CampusList from './CampusList';

function Sidebar (props) {

    const campuses = props.campuses;
    return (
      <sidebar>
        <div className="sidebar-header">
          <h3 href="#">
            <div>Margaret Hamilton Interplanetary Academy</div>
            <i alt="Brand" className="glyphicon glyphicon-comment">
            </i>
          </h3>
        </div>
        <h5>Campuses</h5>
        <ul>
            {
                campuses.map(campus => {
                return (
                    <li key={campus.id}>
                    <Link to={`/campuses/${campus.id}`} activeClassName="active">
                        <span> {campus.name} </span>
                    </Link>
                    </li>
                )
                })
            }
            </ul>
      </sidebar>
    );
}

export default Sidebar;