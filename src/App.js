import React , {useState} from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello.js";
import Timer from "./Timer.js";
import './styles.css';

const App = ()=>{
  const [title,setTitle] = useState("hello world !");
  const [isLight,setIsLight] = useState(false);

  useEffect(()=>{
    console.log("useEffect");
    return ()=>{

    }
  },[isLight]);

  const handleSetIsLight = ()=>{
    setIsLight(!isLight)
  }

  return (
    <div className="main" style={{backgroundColor : isLight ? "white": "gray"}}>
      <div className="main-container">
        <Hello title={title}/>
        <Timer isLight={isLight} handleSetIsLight={handleSetIsLight}/>
      </div>
    </div>
  )
}
export default App;