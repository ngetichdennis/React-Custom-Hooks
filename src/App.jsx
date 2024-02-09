import React from 'react';
import useCounter from './useCounter';
import CounterDisplay from './CounterDisplay';
import CounterControls from './CounterControls';

function App() {
  const [count, increment, decrement] = useCounter();

  return (
    <div className="App">
      <h1>Simple React App with Custom Hooks</h1>
      <CounterDisplay count={count} />
      <CounterControls increment={increment} decrement={decrement} />
    </div>
  );
}

export default App;