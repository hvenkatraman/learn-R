import React from "react";

function ReactChildrens({children}){

    return(
        <div>
            <p><u>CHILDRENS</u></p>
            <p>Name:{children[0]}|Age:{children[1]}|Height:{children[2]}|Weight:{children[3]}   </p>
        </div>
    
    );

}
export default ReactChildrens;
