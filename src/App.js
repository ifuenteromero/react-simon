import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.machinePlay = this.machinePlay.bind(this);
    this.state = {
      machine: [],
      player: []
    }
  }
  getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
  machinePlay() {
    const randomNumber = this.getRandomNumber(4);
    this.setState(prevState=>{
      return{
        machine : prevState.machine.concat(randomNumber)
      }
    })
  }
  iluminatedOn(button){
    

  }
  

  handleClick(event) {
    const currentButton = event.currentTarget.id;
    this.setState(prevState => {
      return {
        player: prevState.player.concat(currentButton)
      }
    })

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
        <button
          type="button"
          onClick={this.machinePlay}
        >Comenzar</button>
      </main >

    );
  }
}

export default App;
