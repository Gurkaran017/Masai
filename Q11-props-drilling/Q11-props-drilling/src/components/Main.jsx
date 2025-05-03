import BottomMain from './BottomMain';

function Main({ userName }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
      <h2>Main Component</h2>
      <BottomMain userName={userName} />
    </div>
  );
}

export default Main;
