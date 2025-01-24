import {useState,useEffect} from "react";

const Form = ()=>{

const [fname,setFname] = useState("");
const [mname,setMname] = useState("");
const [lname,setLname] = useState("");
const [desc,setDesc] = useState("");
const [country,setCountry] = useState("UK");
const [agreement,setAgreement] = useState(false);
const [gender,setGender] = useState("male");

const changeHandler = (e)=>{

        if (e.target.name==="fname") {

            setFname(e.target.value);
            console.log(e.target.value);
        }
        else if (e.target.name==="mname") {

            setMname(e.target.value);}
        else if (e.target.name==="lname") {

            setLname(e.target.value);}
             else if (e.target.name==="desc") {
        
                setDesc(e.target.value);}
             else if (e.target.name==="country") {
        
                setCountry(e.target.value);}
             else if (e.target.name==="agreement") {
        
                setAgreement(e.target.checked);}
             else if (e.target.name==="gender") {
        
                setGender(e.target.value);}
};
const submitHandler = (e)=>{

    e.preventDefault();

    console.log(`Fullname : ${fname} ${mname} ${lname}`);
    console.log(`Description : ${desc}`);
    console.log(`Country selected : ${country}`);
    console.log(`Licence Agreement : ${agreement}`);
    console.log(`Gender : ${gender}`);
        
}
useEffect(()=>{
             
    console.log(`Fullname:${fname}${mname}${lname},Description:${desc}&${country}&${agreement}& gender:${gender}`);    

},[fname,mname,lname,desc,country,agreement,gender]);


    return(
    <form onSubmit={submitHandler}>

        <div>
            <input type="text" name="fname" value={fname} onChange={changeHandler}placeholder="Enter Firstname"/>
            <input type="text" name="mname" value={mname} onChange={changeHandler} placeholder="Enter  Middlename"/>
            <input type="text" name="lname" value={lname} onChange={changeHandler}placeholder="Enter
    Lastname"/>
            <textarea type="textarea" name="desc" value={desc} onChange={changeHandler} placeholder="Describe yourself in 30 " />
            <br></br>
            <select  name="country" value={country} onChange={changeHandler}>
                <option value="USA">USA</option>1
                <option value="Canada">CANADA</option>
                <option value="UK">UK</option>
            </select>
            <br></br>

            <input type="checkbox" name="agreement" checked={agreement} onChange={changeHandler} />
            <br></br>

             <input type="radio" name="gender" value="male" onChange={changeHandler} />
             <input type="radio" name="gender" value="female" onChange={changeHandler} />
            <input type="radio" name="gender" value="others" onChange={changeHandler} />
            <br></br>
             <input type="submit"value="Save"/>
        </div>
    </form>

    );

}
    
export default Form;
