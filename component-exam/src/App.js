import { Component } from 'react';
import './App.css';

// class의 첫 글자는 소문자
class App extends Component {
  render() {
    const name = 'react';
    return <div className="react">{name}</div>;
  }
}


export default App;
