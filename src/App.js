import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello.js";
import Timer from "./Timer.js";
import './styles.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      title: "hello world !",
    };
  };
  handleSetTitle=()=>{
    this.setState({
      title:"greeting!"
    })
    
  }
  
  render(){
    return(
      <div className='main'>
        <div className="main-container">
          <Hello title={this.state.title}/>
          <Timer handleSetTitle={this.handleSetTitle}/>
        </div>
      </div>
    )
  }
};
export default App;