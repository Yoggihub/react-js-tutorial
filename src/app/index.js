import React from 'react';
import { render } from 'react-dom';
import { Home } from './components/Home';
import { Header } from './components/Header';

class App extends React.Component {
  render() {
    let user = {
      name: 'Anna',
      hobbies: ['Sports', 'Swimming', 'hiking']
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 com-xs-offset-1">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 com-xs-offset-1">
            <Home name="Max" age={27} user={user}>
              <p>This is a paragraph in home component</p>
            </Home>
          </div>
        </div>
      </div>

    );
  }
}

render(<App />, document.getElementById('app'));
