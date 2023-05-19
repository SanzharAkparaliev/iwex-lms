import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);


  return;
  <div className={styles.video_img}>
    <video width="100%" height="100%" controls>

    </video>
  </div>;
};

export default VideoPlayer;
