import withCounter from "./HOC/withCounter";


const HoverCounterHOC = ({incrementCounter,counter})=>{

    return(

        <div>

            <p><h2><b>Hover Counter Demo</b></h2></p>
            <h2 onMouseOver={incrementCounter}>You clicked me({counter})times</h2>

        </div>

    );
}

export default withCounter(HoverCounterHOC);
