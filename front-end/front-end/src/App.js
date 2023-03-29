import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
const [value,setvalue]= useState("");
const[answer,setanswer]= useState("")

async function get_answer(val){
  // console.log(val);
fetch( `http://127.0.0.1:4000/solve/${val}`,{
  mode:"no-cors"
}).then(result=>result.json()).then(data=> setanswer(data))}
console.log(`answer="${answer}"`)
  return (
  
    <div className="App">
      <label htmlFor="link"> Link</label>
     <input type="text" name="link" id="link" className={"link-box"} placeholder="Enter Link to solve the Captcha" 
     value={value}
     onChange={e => setvalue(e.target.value)} />
     <button onClick={() => { get_answer(value);}}> Enter </button>
        <label htmlFor="ans"> Link</label>
     <input type="text" name="ans" id="ans" className={"link-box"} />
 
    </div>

  );
}

export default App;
