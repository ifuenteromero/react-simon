import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick(event) {
    console.log(event.currentTarget.id)
  }

  render() {
    return (
      <main className="page">
        <div
          className="square-ext red"
          onClick={this.handleClick}
          id={1}

        >
        </div>
        <div
          className="square-ext blue"
          onClick={this.handleClick}
          id={2}
        >
        </div>
        <div
          className="square-ext yellow"
          onClick={this.handleClick}
          id={3}
        >
        </div>
         <div
          className="square-ext green"
          onClick={this.handleClick}
          id={4}
        >
        </div>
      </main >
    );
  }
}

export default App;
