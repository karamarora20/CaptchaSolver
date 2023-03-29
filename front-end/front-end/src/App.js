import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
const [value,setvalue]= useState("");
let answer="";

async function get_answer(val){
let host="https://localhost:4000/"
let img_link= host+"solve/"+val
fetch(img_link).then(result=>result.text()).then(function (data){
  answer=data;
})
}
  return (
  
    <div className="App">
      <label htmlFor="link"> Link</label>
     <input type="text" name="link" id="link" className={"link-box"} placeholder="Enter Link to solve the Captcha" 
     value={value}
     onChange={e => setvalue(e.target.value)} />
     <button onClick={() => { get_answer(value);}}> Enter </button>
        <label htmlFor="answer"> Link</label>
     <input type="text" name="answer" id="answer" className={"link-box"} />
 
    </div>

  );
}

export default App;
