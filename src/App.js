import React, { useState } from 'react';
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import './App.css';

function App() {

  const [num, setNum] = useState(0);
  const [oldnum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  function number(e) {
    const res = e.target.value;
    if(num === 0) {
      setNum(res);
    }else{
      setNum(num + res);
      console.log(res)
    }
  }

  function clear(){
    setNum(0)
  }

  function porcentage(){
    setNum(num / 100);
  }

  function changeSign() {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  }

  function operatorHandler(e) {
    var operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }

  function calculate() {
    if (operator === "/") {
      setNum(parseFloat(oldnum) / parseFloat(num));
    } else if (operator === "X") {
      setNum(parseFloat(oldnum) * parseFloat(num));
    } else if (operator === "-") {
      setNum(parseFloat(oldnum) - parseFloat(num));
    } else if (operator === "+") {
      setNum(parseFloat(oldnum) + parseFloat(num));
    }
  }

  return (
    <div className='center'>
    <Container maxWidth="xs">
    <div className="container">
          <Box m={12} />
          <h1 className="result">{num}</h1>
          <button onClick={clear}>AC</button>
          <button onClick={changeSign}>+/-</button>
          <button onClick={porcentage}>%</button>
          <button className="orange" onClick={operatorHandler} value="/">
            /
          </button>
          <button className="gray" onClick={number} value={7}>
            7
          </button>
          <button className="gray" onClick={number} value={8}>
            8
          </button>
          <button className="gray" onClick={number} value={9}>
            9
          </button>
          <button className="orange" onClick={operatorHandler} value="X">
            X
          </button>
          <button className="gray" onClick={number} value={4}>
            4
          </button>
          <button className="gray" onClick={number} value={5}>
            5
          </button>
          <button className="gray" onClick={number} value={6}>
            6
          </button>
          <button className="orange" onClick={operatorHandler} value="-">
            -
          </button>
          <button className="gray" onClick={number} value={1}>
            1
          </button>
          <button className="gray" onClick={number} value={2}>
            2
          </button>
          <button className="gray" onClick={number} value={3}>
            3
          </button>
          <button className="orange" onClick={operatorHandler} value="+">
            +
          </button>
          <button className="gray" onClick={number} value={0}>
            0
          </button>
          <button className="gray" onClick={number} value={"."}>
            ,
          </button>
          <button className="gray" style={{ visibility: "hidden" }}>
            ,
          </button>
          <button className="orange" onClick={calculate}>
            =
          </button>
        </div>
    </Container>
  </div>
);
}

export default App;
