import { useRef, useState } from 'react';
import styles from '../Home/home.module.css';
import VideoPlayer from './Video';

const ChooseUs = () => {

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

  return (
    <article className={styles.article}>
      <div className={styles.article_blog}>
        <div className={styles.article_desc}>
          <h2 className={styles.article_title}>Why Choose Us</h2>
          <p className={styles.article_description}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, illo
            natus consectetur labore sint voluptatem odio explicabo. Laboriosam
            consectetur, dignissimos, minus, vero nulla ab maxime quisquam
            quidem delectus perferendis saepe? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Nulla quae iure asperiores soluta? Sit
            iure ullam velit tempora eius, obcaecati officiis hic pariatur,
            earum magni, architecto fugiat magnam quo assumenda.
          </p>
        </div>
        <div className={styles.article_video_blog}>
          <VideoPlayer />
        </div>
      </div>
    </article>
  );
};

export default ChooseUs;
