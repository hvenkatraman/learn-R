import React from "react";

class ClassCompStateShort extends React.Component {
constructor({message},{children}){

    super({message},{children});
    this.state ={course : "React",message:"hope you are improving",note:"(Point to be noted that this short vesion of State can only be used when no props and childre provided there by parent component)"};
}
    
    render(){
        
        return(
        <div>
            <p>State Demo in Class based component</p>
            <p>A state is components own data</p>
            <p>While prop is also component data but not own data it gets data from parents</p>
            <p>Our Course is:{this.state.course} {this.state.message}</p>
            <p>Note: {this.state.note}</p>
        </div>
        );

    }

}
export default ClassCompStateShort;
