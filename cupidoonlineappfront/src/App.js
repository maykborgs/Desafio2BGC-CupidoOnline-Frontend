import React, { Component } from "react"; //let's use to build components

class App extends Component {
  state = {
    isLoading: false,
  };
  render() {
    const isLoading = this.state.isLoading;

    if (isLoading) return <div>It's loading...</div>;

    return <div>Cupido Online First Commit</div>;
  }
}

export default App;
