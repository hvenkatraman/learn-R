import {useState} from "react";

const withCounter = (Component)=>{

    const  NewComponent = ()=>{
const[Counter,setCounter]=useState(0);

const incrementCounter = ()=> {

    setCounter((oldCounter)=>oldCounter+1);
}

    return(<Component counter={Counter} incrementCounter={incrementCounter}/>);
    }

return NewComponent;

}
export default withCounter;
