import React, { useState } from 'react';
import './App.css';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter" style={{ textAlign: 'center', marginTop: 12 }}>
      <div style={{ fontSize: 18, marginBottom: 8 }}>Counter: {count}</div>
      <div>
        <button onClick={() => setCount(c => c - 1)}>-</button>
        <button onClick={() => setCount(c => c + 1)}>+</button>
      </div>
    </div>
  );
}

function ClickCounter() {
    const [click, setClick] = useState(0);

    return (
        <div className="click-counter" style={{ textAlign: 'center', marginTop: 12 }}>
          <div style={{ fontSize: 18, marginBottom: 8 }}>Вот вам делать нечего, вы кликнули на кнопку "кликните меня" {click} раз</div>
          <button onClick={() => setClick(cl => cl + 1)}>Кликните меня</button>
        </div>

    )
}

export { Counter, ClickCounter };




