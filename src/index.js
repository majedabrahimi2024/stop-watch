import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Hello extends React.Component {
  render(){
    return(
      <div>
        <h2>hello world</h2>
      </div>
    )
  }
};

class Timer extends React.Component {
  render(){
    return(
      <div>it is: {new Date().toLocaleTimeString()}</div>
    )
  }
}

class App extends React.Component {
  render(){
    return(
      <div>
        <Hello/>
        <Timer/>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

function tick(){
  root.render(<App/>)
}
setInterval(tick,1000)