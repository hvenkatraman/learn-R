import React from "react";

const Counter = ()=>{

const [value,setValue]=React.useState(0);

const plusHandler= ()=>{

    setValue((oldValue)=>{return oldValue+1});
}
const minusHandler=()=>{

    setValue((oldCounter)=>oldCounter-1);
}

    return(
        <div>

            {value>0 ? <button className="btn" type="button"onClick={minusHandler}>-</button> : null}
            <span>{value}</span>
            <button className="btn" type="button"onClick={plusHandler}>+</button>
        </div>
    );
}

export default Counter;
