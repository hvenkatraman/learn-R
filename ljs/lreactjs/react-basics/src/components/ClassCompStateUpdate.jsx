import React from "react";


class ClassCompStateUpdate extends React.Component{

    state={course:"React",counter:0};

    componentDidMount(){
        

      //  setInterval(()=>{this.setState({course:"Vue",counter:this.state.counter+1});},5000);
        this.setState((oldState)=>{

            return{
                course:"vue",
                counter:oldState.counter+1
            }

        })
        
    }
    render()
    {
        
        return(
        
        
        <div>
            <p>Class Component State Update</p>
            <p>course:{this.state.course},counter:{this.state.counter}</p>
        </div>

        );
    }
}

export default ClassCompStateUpdate;
