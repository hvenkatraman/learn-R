import React from "react";


function FuncCompEvent(){

const  [data,setData] = React.useState("Welcome");
    
const okh = ()=>{
    console.log("Hey you clicked it");
    setData("You have done it congrats!");
}

    return(
        <div>
            <p>A Event in functional Component</p>
            <p>Use state hook/function for state in functional component</p>
            <div><button className="btn" type="button" onClick={okh}>clickMe</button></div>
            <p>{data}</p>

        </div>
    );

}

export default FuncCompEvent;
