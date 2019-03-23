import React, { useState, useReducer } from 'react';

const initialState = {
  count: 0
};

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

const reducer = (state, action) => {
  const {
    type
  } = action;
  const {
    count
  } = state;

  switch (type) {
    case INCREMENT:
      return {
        ...state,
        count: count + 1
      };
    case DECREMENT:
      return {
        ...state,
        count: count + 1
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
}

export default () => {
  const [
    state,
    dispatch
  ] = useReducer(reducer, initialState);
  const {
    count
  } = state;

  return (
    <div>
      <button onClick={() => { dispatch({ type: INCREMENT }); }}>
        add
      </button>
      <button onClick={() => { dispatch({ type: DECREMENT }); }}>
        del
      </button>
      <button onClick={() => { dispatch({ type: RESET}); }}>
        reset
      </button>
      \owo/ {'<'} { count } happy!!
    </div>
  )
};

