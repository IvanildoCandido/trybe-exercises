import './App.css';
import React, { Component } from 'react';
class App extends Component {
  constructor() {
    super();
    this.greetingDay = this.greetingDay.bind(this);
    this.greetingAfternoon = this.greetingAfternoon.bind(this);
    this.greetingNight = this.greetingNight.bind(this);
    this.numberOfClicks = this.numberOfClicks.bind(this);
    this.colorGreen = this.colorGreen.bind(this);
    this.state = {
      numberOfClicks: 0,
      morning: 0,
      afternoon: 0,
      night: 0,
    };
  }
  colorGreen(state) {
    if (state % 2 === 0) {
      console.log(`State: ${state} - Color: green`);
    }
  }
  greetingDay() {
    this.setState((previousState, _props) => ({
      morning: previousState.morning + 1,
    }));
    this.colorGreen(this.state.morning);
    console.log(this, 'Good Morning');
  }
  greetingAfternoon() {
    this.setState((previousState, _props) => ({
      afternoon: previousState.afternoon + 1,
    }));
    this.colorGreen(this.state.afternoon);
    console.log(this, 'Good Afternoon');
  }
  greetingNight() {
    this.setState((previousState, _props) => ({
      night: previousState.night + 1,
    }));
    this.colorGreen(this.state.night);
    console.log(this, 'Good Night');
  }
  numberOfClicks() {
    this.setState((previousState, _props) => ({
      numberOfClicks: previousState.numberOfClicks + 1,
    }));
  }
  render() {
    return (
      <div>
        <div>
          <button onClick={this.greetingDay}>
            Bom dia: {this.state.morning}
          </button>
          <button onClick={this.greetingAfternoon}>
            Boa Tarde: {this.state.afternoon}
          </button>
          <button onClick={this.greetingNight}>
            Boa Noite: {this.state.night}
          </button>
          <button onClick={this.numberOfClicks}>
            {this.state.numberOfClicks}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
