import './App.css';
import  SubComponent from "./components/SubComponent";  
import ClassBasedComponent from "./components/ClassBasedComponent";
import ReactProps from "./components/ReactProps";
import ReactChildrens from "./components/ReactChildrens";
import ClassCompPropsChild from "./components/ClassCompPropsChild";
import ClassCompState from "./components/ClassCompState";
import ClassCompStateShort from "./components/ClassCompStateShort";
import ClassCompDidMount from "./components/ClassCompDidMount";
import ClassCompStateUpdate from "./components/ClassCompStateUpdate";
import ClassCompWillUnmount from "./components/ClassCompWillUnmount";
import FuncCompState from "./components/FuncCompState";
import FuncCompEvent from "./components/FuncCompEvent";
import FuncCompEventParameter from "./components/FuncCompEventParameter";
import FuncCompCndtnlRndrng from "./components/FuncCompCndtnlRndrng";
import List from "./components/List";
import ListMap from "./components/ListMap";
import Counter from "./components/Counter";
import Form from "./components/Form";
import ClickCounter from "./components/ClickCounter";
import ClickCounterHOC from "./components/ClickCounterHOC";
import HoverCounter from "./components/HoverCounter";
import HoverCounterHOC from "./components/HoverCounterHOC";
import RenderProps from "./components/RenderProps";
import CounterLogic from "./components/CounterLogic";
import ClickCounterWithRpCl from "./components/ClickCounterWithRpCl";
import HoverCounterWithRpCl from "./components/HoverCounterWithRpCl";


function App() {
  return (
    <div>
      <SubComponent/>
      C
      <ClassBasedComponent/>
      <ReactProps name="H Venkat Ramana" age="35" height="5ft 11inches"weight ="78kgs"/>
      <ReactChildrens>
        <span>H Mihit</span>

        <span>7 Years</span>
        <span>4ft 8inches</span>
        <span>25Kgs</span>
      </ReactChildrens>
      
      <ClassCompPropsChild animal="Lion">Childrens:Cubs</ClassCompPropsChild>
      <ClassCompState message="Welcome to react state utilisation">Class states are to initalise things while starting or we sy provinding default values for that instant thats why use inside constructor</ClassCompState>
      <ClassCompStateShort/>
      <ClassCompDidMount/>
      <ClassCompStateUpdate/>
      <ClassCompWillUnmount/>
      <FuncCompState/>
      <FuncCompEvent/>
      <FuncCompEventParameter/>
      <FuncCompCndtnlRndrng/>
      <List/>
      <ListMap/>
      <Counter/>
      <Form/>
      <ClickCounter/>
      <ClickCounterHOC/>
      <HoverCounter/> 
      <HoverCounterHOC/>
      <RenderProps 
      greetString="Welcome Everyone using string props" 
      greetFunction={()=>"Welcome Everyone using function props"}
      greetFunction1={()=>{return"Welcome Everyone using function return props"}}
      greetFunction2={(isNew)=>isNew ? "Welcome Everyone using function parameterised props":"welcome member"}/>
      
      <CounterLogic render={(counter,incrementCounter)=>(<ClickCounterWithRpCl counter={counter} incrementCounter={incrementCounter}/>)}/>
      <CounterLogic 
        render={(counter,incrementCounter)=><HoverCounterWithRpCl 
        counter={counter} 
        incrementCounter={incrementCounter}/>}/>
      
    </div>
  );
}

export default App; 
