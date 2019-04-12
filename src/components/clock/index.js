import React, { Component } from 'react';

const formattedDate = date => date.toLocaleTimeString();

class Clock extends Component {
  state = {
    date: new Date()
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() { clearInterval(this.timerID)};

  tick() {
    this.setState({ date: new Date() })
  }

  render() {
    return ( <span>{ formattedDate(this.state.date) }</span>)
  }
}

export default Clock;

