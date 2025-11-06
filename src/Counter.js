import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCounter, decrementCounter, resetCounter, incrementClickCounter } from './store/countersSlice';
import './App.css';

function Counter() {
  const count = useSelector((state) => state.counters.counter);
  const dispatch = useDispatch();

  return (
    <div className="counter" style={{ textAlign: 'center', marginTop: 12 }}>
      <div style={{ fontSize: 18, marginBottom: 8 }}>Counter: {count}</div>
      <div>
        <button onClick={() => dispatch(decrementCounter())}>-</button>
        <button onClick={() => dispatch(incrementCounter())}>+</button>
      </div>
    </div>
  );
}

function ClickCounter() {

    return (
        <div>
            Дополнительная кнопка в разработке
        </div>

    )
}

export { Counter, ClickCounter };




