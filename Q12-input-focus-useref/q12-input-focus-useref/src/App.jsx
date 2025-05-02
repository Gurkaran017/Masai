import { useRef } from 'react';

function App() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={handleFocus} style={{ marginLeft: '10px' }}>
        Focus Input
      </button>
    </div>
  );
}

export default App;
