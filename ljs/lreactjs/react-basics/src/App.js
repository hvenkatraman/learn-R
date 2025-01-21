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
function App() {
  return (
    <div>
      <SubComponent/>
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

      
    </div>
  );
}

export default App;
