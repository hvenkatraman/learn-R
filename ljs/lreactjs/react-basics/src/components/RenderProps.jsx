import {useState} from "react";

const RenderProps = ({greetString,greetFunction,greetFunction1,greetFunction2})=>{

    return(


        <div>

            {greetString}
            {greetFunction()}
            {greetFunction1()}
            {greetFunction2(true)}
            


        </div>
    );
}
export default RenderProps; 
