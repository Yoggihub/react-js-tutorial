import React from 'react';

export class Home extends React.Component {
  constructor(props) {
    super();
    this.age = props.age;
  }

  incrementAge() {
    this.age += 3;
    console.log(this.age);
  }
  render() {
    return (
      <div>
        <p>This is a Home component</p>
        <p>Your name is {this.props.name}, your age is {this.age}</p>
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
