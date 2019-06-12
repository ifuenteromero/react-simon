import React from 'react';
import './App.css';
import Button from './components/Button';

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
    this.setState(prevState => {
      return {
        machine: prevState.machine.concat(randomNumber)
      }
    })
  }
  iluminatedOn(button) {


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
        <Button handleClick={this.handleClick} color="red" id={1} />
        <Button handleClick={this.handleClick} color="blue" id={2} />
        <Button handleClick={this.handleClick} color="yellow" id={3} />
        <Button handleClick={this.handleClick} color="green" id={4} />
        <button
          type="button"
          onClick={this.machinePlay}
        >Comenzar</button>
      </main >

    );
  }
}

export default App;
