import React, { useState, useContext, createContext } from 'react';
import './App.css';

const context = createContext();
const { Provider } = context;

const Child = () => {
  const count = useContext(context);
  return (
    <div>
      <span>{ count.count }</span>
      <button onClick={count.increment}>+</button>
      <button onClick={count.decrement}>-</button>
    </div>
  );
};

export default () => {
  const [count, setCount] = useState(0);

  return (
    <Provider
      value={{
        count,
        increment: () => setCount(count + 1),
        decrement: () => setCount(count - 1)
      }}
    >
      <Child />
    </Provider>
  )
}