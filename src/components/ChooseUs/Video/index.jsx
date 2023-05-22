import ReactPlayer from 'react-player';
import styles from '../../Home/home.module.css';

const VideoPlayer = () => {
  return (
    <div className={styles.video_img}>
      <ReactPlayer url="https://www.youtube.com/watch?v=IqAjdbgzMV8" controls />
    </div>
  );
};

export default VideoPlayer;
