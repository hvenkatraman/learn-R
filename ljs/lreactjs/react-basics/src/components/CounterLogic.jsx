import {useState} from "react";

const CounterLogic = ({render})=>{

const [counter,setCounter]=useState(0);

const incrementCounter = ()=>{

    setCounter((oldCounter)=> oldCounter+1);
}

return render(counter,incrementCounter);

}
export default CounterLogic;
