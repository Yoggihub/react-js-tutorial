import React from 'react';

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.startingAge,
      status: 0
    };
  }

  incrementAge() {
    this.setState({
      age: this.state.age + 3
    });
  }
  render() {
    return (
      <div>
        <p>This is a Home component</p>
        {/* Comments: this.state.age is refering to the age stored in the state */}
        <p>Your name is {this.props.name}, your age is {this.state.age}</p>
        <p>Status: {this.state.status}</p>
        <hr />
        {/* Comments: this.incrementAge so this button will only execute when its been called */}
        {/* Comments: onClick={this.incrementAge.bind(this)} is anothe rway to trigger events on onCLick */}
        <button onClick={() => this.incrementAge()} className="btn btn-primary">Increment-Age</button>
      </div>
    );
  }
}

Home.propTypes = {
  name: React.PropTypes.string,
  age: React.PropTypes.number
};
