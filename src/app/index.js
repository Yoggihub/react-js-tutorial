import React from 'react';
import { render } from 'react-dom';
import { Home } from './components/Home';
import { Header } from './components/Header';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      homeLink: 'Home'
    };
  }
  onGreet() {
    alert('Hallo!');
  }

  onChangeLinkName(newName) {
    this.setState({
      homeLink: newName
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 com-xs-offset-1">
            <Header homeLink={this.state.homeLink} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 com-xs-offset-1">
            <Home
              name="Max"
              startingAge={27}
              greet={this.onGreet}
              changeLink={this.onChangeLinkName.bind(this)}
              // changeLink={() => this.onChangeLinkName()}
            />
          </div>
        </div>
      </div>

    );
  }
}

render(<App />, document.getElementById('app'));
