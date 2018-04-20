import React from 'react';
import { NavLink } from 'react-router-dom';


// Changing the component. Header is now stateless component and we no longer use it as state. Change the components to stateless if you don't need a state
export const Header = props => (
  <nav className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <ul className="nav navbar-nav">
          <li><NavLink to="/home" activeStyle={{ color: 'red' }}>Home</NavLink></li>
          <li><NavLink to="/user" activeClassName="active">User</NavLink></li>
        </ul>
      </div>
    </div>
  </nav>
);
