import React from "react";
import {useState}from "react";

const FuncCompCndtnlRndrng = ()=>{

const [isloggedin,setIsloggedin]=useState(true);

const liokh = ()=>{

    setIsloggedin(true);
}
const lookh = ()=>{

    setIsloggedin(false);
}
    return(
        
        <div>
        {
            isloggedin===true?
        <div>
            <p>
                <b>Welcome</b>
            </p>
            <button type="button"onClick={lookh}>Logout</button>
        </div>
            :
        <div>
            <p>
                <b>Click below to login</b> 
            </p>
            <button type="button"onClick={liokh}>Login</button>
        </div>
        }
            
        </div>
    );
}
export default FuncCompCndtnlRndrng;
