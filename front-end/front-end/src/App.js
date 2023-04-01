
import './App.css';
import { useState } from 'react';


function App() {
const [value,setvalue]= useState("");
const[answer,setanswer]= useState("")

async function get_answer(val){
  // console.log(val);
  const result= await fetch('http://localhost:4000/solve',{
    method:"POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      image:val
    })  
})
 const data= await result.json();
 setanswer(data.hel);
}
console.log(`answer="${answer}"`)
  return (
  
    <div className="App">
      <label htmlFor="link"> Link</label>
     <input type="text" name="link" id="link" className={"link-box"} placeholder="Enter Link to solve the Captcha" 
     value={value}
     onChange={e => setvalue(e.target.value)} />
     <button onClick={() => { get_answer(value);}}> Enter </button>
        <label htmlFor="ans"> answer</label>
     <input type="text" name="ans" id="ans" className={"link-box"} value={answer}  />
 
    </div>

  );
}

export default App;
