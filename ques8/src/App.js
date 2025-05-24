import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './redux/actions';

const App = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Redux Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())} style={{ marginLeft: '10px' }}>Decrement</button>
      <pre style={{ marginTop: '20px' }}>
        {JSON.stringify({ count }, null, 2)}
      </pre>
    </div>
  );
};

export default App;
