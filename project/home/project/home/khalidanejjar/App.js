import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(0);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const plus = (e) => {
    e.preventDefault();
    setResult((prevResult) => prevResult + Number(inputValue));
  };

  const minus = (e) => {
    e.preventDefault();
    setResult((prevResult) => prevResult - Number(inputValue));
  };

  const times = (e) => {
    e.preventDefault();
    setResult((prevResult) => prevResult * Number(inputValue));
  };

  const divide = (e) => {
    e.preventDefault();
    if (Number(inputValue) !== 0) {
      setResult((prevResult) => prevResult / Number(inputValue));
    } else {
      alert("Cannot divide by zero");
    }
  };

  const resetInput = (e) => {
    e.preventDefault();
    setInputValue("");
  };

  const resetResult = (e) => {
    e.preventDefault();
    setResult(0);
  };

  return (
    <div>
      <h2>Build a Calculator using React</h2>
      <form>
        <p>{result}</p>
        <input
          type="number"
          value={inputValue}
          onChange={handleChange}
          placeholder="Type a number"
        />
        <br />
        <button onClick={plus}>Add</button>
        <button onClick={minus}>Subtract</button>
        <button onClick={times}>Multiply</button>
        <button onClick={divide}>Divide</button>
        <button onClick={resetInput} className="btn1">
          Reset Input
        </button>
        <button onClick={resetResult} className="btn2">
          Reset Result
        </button>
      </form>
    </div>
  );
};

export default App;
