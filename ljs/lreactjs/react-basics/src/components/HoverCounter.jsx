import {useState} from "react";

const HoverCounter = ()=>{

    const[counter,setCounter]=useState(0);

    const incrementCounter = ()=> {

        setCounter((oldCounter)=>oldCounter+1);
    }
    return(


        <div>

            
            <h2 onMouseOver={incrementCounter}>You hovered over me({counter})times</h2>

        </div>

    );
}

export default HoverCounter;
