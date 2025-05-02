import React, { useRef } from "react";

function VideoPlayer() {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  const handleRestart = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <video
        ref={videoRef}
        width="600"
        controls={false}
        src="/sample.mp4"
        style={{ borderRadius: "8px", marginBottom: "10px" }}
      />
      <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause} style={{ margin: "0 10px" }}>
          Pause
        </button>
        <button onClick={handleRestart}>Restart</button>
      </div>
    </div>
  );
}

export default VideoPlayer;
