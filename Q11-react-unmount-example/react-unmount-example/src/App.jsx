import { useState } from 'react';
import MyComponent from './MyComponent';

function App() {
  const [showComponent, setShowComponent] = useState(true);

  const toggleComponent = () => {
    setShowComponent(prev => !prev);
  };

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={toggleComponent}>
        {showComponent ? 'Hide' : 'Show'} Component
      </button>
      {showComponent && <MyComponent />}
    </div>
  );
}

export default App;
