import React from "react";
import ReactDOM from "react-dom";
import './styles.css';

class Hello extends React.Component {
    render(){
      return(
        <div>
          <h2>{this.props.title}</h2>
        </div>
      )
    }
};

export default Hello;