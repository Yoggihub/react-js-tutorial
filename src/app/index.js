import React from 'react';
import { render } from 'react-dom';
import { Home } from './components/Home';
import { Header } from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 com-xs-offset-1">
            <Header homeLink="Home"/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 com-xs-offset-1">
            <Home name="Max" startingAge={27} />
          </div>
        </div>
      </div>

    );
  }
}

render(<App />, document.getElementById('app'));
