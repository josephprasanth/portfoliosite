import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayBio: false
    };
  }
  render() {
    return (
      <div>
        <h1>Hello </h1>
        <p>My name is Joseph. I'm a software engineer</p>
        <p>I am always on the lookout for challenging projects</p>
        {this.state.displayBio ? (
          <div>
            <p>I am currently residing in Stockholm</p>
            <p>
              My favourite language is Javascript and I think React.js is
              awesome
            </p>
            <p>Besides coding I also love solving tangrams </p>
          </div>
        ) : (
          (this.bio = null)
        )}
      </div>
    );
  }
}

export default App;
