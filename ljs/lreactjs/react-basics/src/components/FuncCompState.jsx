import React from "react";


function FuncCompState(){

const  [data,setData] = React.useState("Welcome");
    
    setInterval(()=>{setData("Have great future,get ready to enjoy!")},50000);    
    return(
        <div>
            <p>A S in functional Component</p>
            <p>Use state hook/function for state in functional component</p>
            <p>{data}</p>

        </div>
    );

}

export default FuncCompState;
