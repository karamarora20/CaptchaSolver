import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const [value,setvalue]= useState("");

let answer=""
async function get_answer(val){
  let host="localhost:4000/"
let img_link= host+"solve/"+val
fetch(img_link).then(result=>result.text()).then(function (data){
  answer=data;
})
}
console.log(answer)
function App() {
  return (
    <html>
    <div className="App">
      <label for="link"> Link</label>
     <input type="text" name="link" id="link" class="link-box" placeholder="Enter Link to solve the Captcha" 
     value={value}
     onChange={e => setvalue(e.target.value)} />
     <button onClick= {get_answer(value)}> Enter </button>
        <label for="answer"> Link</label>
     <input type="text" name="answer" id="answer" class="link-box" />
 
    </div>
    </html>
  );
}

export default App;
