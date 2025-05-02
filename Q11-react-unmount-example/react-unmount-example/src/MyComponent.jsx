import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    console.log('Component Mounted');

    return () => {
      console.log('Component Unmounted');
    };
  }, []);

  return <h2>Hello! I am a Component</h2>;
}

export default MyComponent;
