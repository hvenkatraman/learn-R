import React from "react";


class ClassCompWillUnmount extends React.Component{

    state={course:"React",counter:0}

    componentDidMount(){
        
    }

    componentWillUnmount(){

   }
    render()
    {
        
        return(
        
        <div>
            <p>Class Component Will Unmount</p>
        </div>

        );
    }
}

export default ClassCompWillUnmount;
