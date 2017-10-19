import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render () {
    return (
      <header>
      <nav>
        <h1>Margaret Hamilton Interplanetary Academy</h1>
        <Link id="link" to="/campuses">HOME</Link>
        <Link id="link" to="/students">STUDENTS</Link>
      </nav>
      </header>
    );
  }
}