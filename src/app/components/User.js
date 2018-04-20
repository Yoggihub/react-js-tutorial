import React from 'react';
import { browserHistory } from 'react-router-dom';

export class User extends React.Component {
  onNavigateHome = () => {
    this.props.history.push('/home');
  }
  render() {
    return (
      <div>
        <h3>The User Page</h3>
        <p>User Id: Yoggi</p>
        <button onClick={this.onNavigateHome} className="btn btn-primary">Go Home!</button>
      </div>
    );
  }
}
