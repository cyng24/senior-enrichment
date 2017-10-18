import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render () {
    return (
      <header>
      <nav>
        <h3>Margaret Hamilton Interplanetary Academy</h3>
        <Link to="/campuses">HOME</Link>
        <Link to="/students">STUDENTS</Link>
      </nav>
      </header>
    );
  }
}