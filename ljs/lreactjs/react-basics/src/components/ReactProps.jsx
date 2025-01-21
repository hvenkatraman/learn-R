import React from "react";

function ReactProps({name,age,height,weight}){
    
    return(
        <div>
            <p><u>PROPS</u></p>
            <p>Name:{name}|Age:{age}|Height:{height}|Weight:{weight}</p>
        </div>
    
    );

}
export default ReactProps;
