import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import useBatchedFrames from './useBatchedFrames';
import useTestHook1 from './useTestHook1';

function App() {


  console.log("App Rendered!!!")
  const { getFrame } = useBatchedFrames();
  const { func1, numbersArray } = useTestHook1();
  const num1 = useRef<number>(0);
  
  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // getFrame(25).then(x => {
    //   console.log(x);
    // });

    [...Array(10)].map(x => {
      func1(num1.current);
      num1.current++;
    })
  };

  const buttonHandler2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("Do Nothing");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{numbersArray.join('-')}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={buttonHandler} className="button" name="button">
          Click Me
        </button>
        <button onClick={buttonHandler2} className="button" name="button">
          Do Nothing
        </button>
      </header>

    </div>
  );
}

export default App;
