import BottomMainRight from './BottomMainRight';

function BottomMain({ userName }) {
  return (
    <div style={{ border: '1px solid #999', padding: '10px', marginTop: '10px' }}>
      <h3>BottomMain Component</h3>
      <BottomMainRight userName={userName} />
    </div>
  );
}

export default BottomMain;
