import { useContext } from "react";
import Item from "./Item";
import { TestContext } from "./TestContext";

const TimeList = ()=>{
    const context = useContext(TestContext);
    
    return (
        <div className="time-list">
            {context.timeArr.map((time)=>(
                <Item key={Math.random()}>{time}</Item>
                ))}
        </div>
    );
};

export default TimeList;