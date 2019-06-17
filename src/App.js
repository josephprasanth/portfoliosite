import React, { Component } from "react";

class App extends Component {
  state = {
    displayBio: false
  };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

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
              My favourite language is Javascript and I beleive React.js is
              the future
            </p>
            <p>Besides coding I also love solving tangrams </p>
            <button onClick={this.toggleDisplayBio}> ReadLess</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read More</button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
