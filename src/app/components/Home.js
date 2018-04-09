import React from 'react';

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.startingAge,
      status: 0,
      homeLink: 'Changed Link'
    };
    setTimeout(() => {
      this.setState({
        status: 1
      });
    }, 3000);
  }

  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
  }

  // This function will only update the status section. Turn on the Rendering section in dev tools in chrome and select Paint flashing to see changes.
  incrementAge() {
    this.setState({
      age: this.state.age + 3
    });
  }

  render() {
    console.log(this.props);
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
        <hr />
        {/* We cannot do this here because greet is not a function. () => this.props.greet() */}
        <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
        <hr />
        <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>

      </div>
    );
  }
}

Home.propTypes = {
  name: React.PropTypes.string,
  age: React.PropTypes.number,
  greet: React.PropTypes.func
};
