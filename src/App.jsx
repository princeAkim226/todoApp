import { useState } from 'react';

import './css/main.css';
import Todos from './components/Todos';
import DisplayTodos from './components/DisplayTodos';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <h1>Prince's TODO</h1>
        <Todos />
        <DisplayTodos />
      </div>
    </>
  );
}

export default App;
