import React, { Component } from "react"; // let's use to build components

class App extends Component {
  
  state = {
  
    isLoading: false,
  };

  render() {
    const { isLoading } = this.state;

    if (isLoading) return <div>It's loading...</div>;

    return (
      <main>
        <header> Welcome to Cupido Online</header>
        <form>hey hey</form>

      </main>
      
      );
  }
}

export default App;
