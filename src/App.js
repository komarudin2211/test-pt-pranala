import logo from './logo.svg';
import './App.css';
import React, { useState ,useRef, useEffect} from 'react';

function App() {
  const [dataInput, setDataInput] = useState(0);
  const [bilGanjil, setBilGanjil] = useState([]);
  const [bilPrima, setBilPrima] = useState([]);


  const input = (e) => {
    setDataInput(parseInt(e.target.value));
  }

  const GenerateGanjil = (angka) => {
    var arr = [];
    for(let i=0; i <= angka; i++){
      if(i % 2 > 0){
        arr.push(i);
      }
    }
    console.log("arr => ", arr)
    setBilGanjil(arr);
    setBilPrima([]);
  }

  const GeneratePrima = (angka) => {
    var arr = [];
    for(let i=0; i <= angka; i++){
      if(i == 1 || i == 3 || i == 5){
        arr.push(i);
      }

      if(i > 5){
        for(let j=2; j < 10; j++){
          if(i !=j && i % j > 0){
            console.log("prima => ", i);
          }
        }
      }
     
      // if(i % 2 > 0 &&  i % 3 > 0  && i % 4 > 0 && i % 5 > 0   && i % 6 > 0 && i % 7 > 0  && i % 8 > 0   && i % 9 > 0){
      //   console.log(i)
      // }
    }

    setBilPrima(arr);
    setBilGanjil([]);
    

    console.log(bilGanjil);
  }

  return (
    <div className="App">
      <form>
        <div><input type="number" onInput={input} value={dataInput} /> </div>
        <div>{bilGanjil.toString()}</div>
        <div><button type="button">Generate Segitiga</button></div>
        <div><button type="button" onClick={() => GenerateGanjil(dataInput)}>Generate Bil. Ganjil</button></div>
        <div><button type="button" onClick={() => GeneratePrima(dataInput)}>Generate Bil. Prima</button></div>
      </form>
    </div>
  );
}

export default App;
