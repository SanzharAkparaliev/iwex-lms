import { useState } from 'react';
import styles from '../Home/home.module.css';
import VideoPlayer from './Video';
import { FaPlayCircle } from 'react-icons/fa';

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);

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
          {showVideo ? (
            <VideoPlayer />
          ) : (
            <img
              className={styles.subImage}
              src="https://courses.iwex.kg/pluginfile.php/13123/block_cocoon_about_1/content/aaaa.jpg"
              alt=""
            />
          )}
          {!showVideo && (
            <FaPlayCircle
              className={styles.play_icon}
              onClick={() => setShowVideo(!showVideo)}
            />
            // <i
            //   className={styles.play_icon}
            //   onClick={() => setShowVideo(!showVideo)}
            // ></i>
          )}
        </div>
      </div>
    </article>
  );
};

export default ChooseUs;
