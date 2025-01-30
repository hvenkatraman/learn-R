
const HoverCounterWithRpCl = ({counter,incrementCounter})=>{

    return(

        <div>
            <p>Hower counter using render props and and utilising counterlogic</p>
            <h5 onMouseOver={incrementCounter} >You Hovered over me {counter} times is it</h5>
        </div>
    );


}
export default HoverCounterWithRpCl;
