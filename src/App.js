import React , {useState,useEffect} from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello.js";
import Timer from "./Timer.js";
import './styles.css';
import TimeList from "./TimeList.jsx";
import { TestContext } from "./TestContext.jsx";

const App = ()=>{
  const [title,setTitle] = useState("stop watch");
  const [isLight,setIsLight] = useState(false);
  const [timeArr,setTimeArr] = useState([]);

  useEffect(()=>{
    console.log("useEffect");
    return ()=>{

    }
  },[isLight]);

  const handleSetIsLight = ()=>{
    setIsLight(!isLight)
  }

  return (
    <TestContext.Provider value={{
      timeArr:timeArr,
      setTimeArr:setTimeArr,
      }}>
      <div className="main" style={{backgroundColor : isLight ? "white": "gray"}}>
      <div className="main-container">
        <Hello title={title}/>
        <Timer
          isLight={isLight}
          handleSetIsLight={handleSetIsLight}
        />
        <TimeList/>
      </div>
    </div>
    </TestContext.Provider>
  )
}
export default App;