import React from 'react';
import './App.css';
import { Counter, ClickCounter} from './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Редактируй <code>src/App.js</code>
        </p>
        <Counter />
        <ClickCounter />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Учитесь ребята
        </a>
      </header>
    </div>
  );
}

export default App;
