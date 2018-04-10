import React from 'react';
import { render } from 'react-dom';
import { Home } from './components/Home';
import { Header } from './components/Header';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      homeLink: 'Home',
      homeMounted: true
    };
  }
  onGreet() {
    alert('Hallo!');
  }

  onChangeHomeMounted() {
    this.setState({
      homeMounted: !this.state.homeMounted
    });
  }
  onChangeLinkName(newName) {
    this.setState({
      homeLink: newName
    });
  }
  render() {
    let homeComp = '';
    if (this.state.homeMounted) {
      homeComp = (
        <Home
          name="Max"
          startingAge={27}
          greet={this.onGreet}
          changeLink={this.onChangeLinkName.bind(this)}
          initialLinkName={this.state.homeLink}
        />
      );
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 com-xs-offset-1">
            <Header homeLink={this.state.homeLink} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 com-xs-offset-1" />
            {homeComp}
        </div>
        <div className="row">
          <div className="col-xs-10 com-xs-offset-1" />
           <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">(Un) Mount Home Component </button>
        </div>
      </div>

    );
  }
}

render(<App />, document.getElementById('app'));
