import withCounter from "./HOC/withCounter";

const ClickCounterHOC = ({incrementCounter,counter})=>{

    return(

        <div>

            <p><h2><b>ClickCounterDemo</b></h2></p>
            <button type="button" value="" onClick={incrementCounter}>You clicked me({counter})times</button>

        </div>

    );
}

export default withCounter(ClickCounterHOC);
