import React from "react";


class ClassCompDidMount extends React.Component{

    state={course:"React",counter:0}

    componentDidMount(){
        
      console.log("After Component Mount");
      
      
    }
    render()
    {
        
        console.log("Before Component Render");

        return(
        
        
        <div>
            <p>Class Component did mount</p>
        </div>

        );
    }
}

export default ClassCompDidMount;
