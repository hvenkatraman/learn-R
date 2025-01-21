import React from "react";

class ClassCompState extends React.Component {
constructor({message},{children}){

    super({message},{children});
    this.state ={course : "react",message:"Are you improving"};
}
    
    render(){
        
        return(
        <div>
            <p>State Demo in Class based component</p>
            <p>A state is components own data</p>
            <p>While prop is also component data but not own data it gets data from parents</p>
            <p>Our Course is:{this.state.course} {this.state.message}</p>
            <p>{this.props.message}</p>
            <p>{this.props.children} </p>
        </div>
        );

    }

}
export default ClassCompState;
