import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';
import { Home } from './components/Home';
import { Root } from './components/Root';
import { User } from './components/User';

class App extends React.Component {
  render() {
    return (
      // <BrowserRouter>
      //   <div>
      //     <Route path="/" component={Root} />
      //     <Route path="/user" component={User} />
      //     <Route path="/home" component={Home} />
      //   </div>
      // </BrowserRouter>
      // This will use the {this.props.children in the Root class and first load the header and then the childrens in the Root}
      <Router history={browserHistory}>
        <Root>
          <Route path="/user" component={User} />
          <Route path="/home" component={Home} />
        </Root>
      </Router>
    );
  }
}

render(<App />, document.getElementById('app'));
