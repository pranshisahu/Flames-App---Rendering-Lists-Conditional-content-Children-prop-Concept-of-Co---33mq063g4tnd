//import React, {Component, useState} from "react";
//import '../styles/App.css';

//class App extends Component {
 //   render() {

 //       return(
  //          <div id="main">
 //              {/* Do not remove the main div */}
 /*           </div>
        )
    }
}


export default App; */
import React, {Component, useState} from "react";
import '../styles/App.css';

export default function App() {
    const inp1 = useRef();
    const inp2 = useRef();
    const output = useRef();
    const res = ["Siblings","Friends","Love","Affection","Marriage","Enemy"];
    const evalStatus = () => {
      let str1 = inp1.current.value;
      let str2 = inp2.current.value;
      if(!str1 || !str2) {
          output.current.textContent = 'Please Enter valid input';
          return;
      }
      console.log(str1,str2);
      let arr = new Array(256).fill(0);
      for(let i=0; i<str1.length; i++){
          arr[str1.charCodeAt(i)]++;
      }
      for(let i=0; i<str2.length; i++){
        arr[str2.charCodeAt(i)]--;
    }
    let sum = 0;
    for(let x of arr) sum += Math.abs(x);
    sum = sum%6;
    output.current.textContent = res[sum];
  };
  const resetInput = () => {
    inp1.current.value = "";
    inp2.current.value = "";
    output.current.textContent = "";
  };
  return (
    <div id="main">
      <input type="text" ref={inp1} data-testid="input1" />
      <br />
      <input type="text" ref={inp2} data-testid="input2" />
      <br />
      <button onClick={evalStatus} data-testid="calculate_relationship">
        Calculate Relationship Future
      </button>
      <br />
      <button onClick={resetInput} data-testid="clear">
        Clear Inputs
      </button>
      <br />
      <h3 data-testid="answer" ref={output}></h3>
    </div>
  );
}