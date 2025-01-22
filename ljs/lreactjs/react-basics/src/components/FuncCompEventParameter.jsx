import React from "react";

const FuncCompEventParameter = ()=>{

const okh = (year)=>{

    setData(year);
}

const [data,setData]=React.useState("Hapy New Year");
    return(
        
            <div>
                <button type="button" onClick={()=>{okh("Welcome to 2025")}}>Click Here</button>
            <p>{data}</p>
            
        </div>
    );
}
export default FuncCompEventParameter;
