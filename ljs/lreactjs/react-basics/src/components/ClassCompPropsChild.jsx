import React from "react";


class ClassCompPropsChild extends React.Component{
    render()
    {

    return(
        <div>
            <p>CLASS COMPONENT WITH PROPS CHILDRENS</p>
            <p>|{this.props.animal}|{this.props.children}|</p>
        </div>

        );
    }
}

export default ClassCompPropsChild;
