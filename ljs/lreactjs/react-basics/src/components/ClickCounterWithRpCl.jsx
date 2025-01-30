
const ClickCounterWithRpCl = ({counter,incrementCounter})=>{

    return(

        <div>
            <p>Click counter using render props and and utilising counterlogic</p>
            <button className="btn" type="button" onClick={incrementCounter} button="">You Clicked me {counter} times is it</button>
        </div>
    );


}
export default ClickCounterWithRpCl;
