import React from 'react';


// Changing the component. Header is now stateless component and we no longer use it as state. Change the components to stateless if you don't need a state
export const Header = props => (
  <nav className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <ul className="nav navbar-nav">
          <li><a href="">Home</a></li>
          <li><a href="">User</a></li>
        </ul>
      </div>
    </div>
  </nav>
);
