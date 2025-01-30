import {useState} from "react";

const ClickCounter = ()=>{

    const[counter,setCounter]=useState(0);

    const incrementCounter = ()=> {

        setCounter((oldCounter)=>oldCounter+1);
    }
    return(

        <div>

            <p><h1><b>HOC Demo</b></h1></p>
            <button type="button" value="" onClick={incrementCounter}>You clicked me({counter})times</button>

        </div>

    );
}

export default ClickCounter;
