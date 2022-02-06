import { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState('');
  return (
    <div className="App">
      <h1>hello</h1>
      <input
        type="text"
        value={state}
        onChange={(e) => {
          setState(e.target.value);
          console.log(e.target.value);
        }}
      />
    </div>
  );
}

export default App;
