import { useContext } from "react";
import { TestContext } from "./TestContext";

const Item = (props)=>{

    const context = useContext(TestContext);

    const HandleDeleteTime = (e)=>{
        context.setTimeArr(context.timeArr.filter((time) => time !== e.target.innerHTML));
    }

    return (
        <div onClick={HandleDeleteTime}>
            {props.children}
        </div>
    );
};

export default Item;