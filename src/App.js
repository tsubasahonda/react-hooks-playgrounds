import React, { useEffect, useState } from 'react';
import './App.css';

const Sub = (props) => {
  const {
    count,
    hello
  } = props;

  useEffect(() => {
    console.log('subscribe', count);
    console.log('---------------');

    return () => {
      console.log('unsubscribe', count);
    }
  }, [hello, count]);

  return (
    <div>
      {count}
    </div>
  );
}

export default () => {
  const [a, b] = useState(0);
  const [_a, _b] = useState('!');

  return (
    <div>
      <Sub count={a} hello={_a}/>
      <button onClick={() => { b(a + 1); }}>
        \ovo/ {"<"} {a}times!
      </button>
      <button onClick={() => { _b(`${_a}!`)}}>
        \omo/ {"<"} hello{_a}
      </button>
    </div>
  )
}