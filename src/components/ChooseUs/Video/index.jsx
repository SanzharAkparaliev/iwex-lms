import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    setShowVideo(!video.paused);
  };

  return;
  <div className={styles.video_img}>
    <video ref={videoRef} src="https://www.youtube.com/watch?v=IqAjdbgzMV8" />
    <button onClick={togglePlay}>{showVideo ? 'Pause' : 'Play'}</button>
  </div>;
};

export default VideoPlayer;
