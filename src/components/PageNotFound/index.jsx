import styles from './404.module.css';
import './404.js';

const Page404 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.first_four}>4</h1>
        <div className={styles.cog_wheel1}>
          <div className={styles.cog1}>
            <div className={styles.top}></div>
            <div className={styles.down}></div>
            <div className={styles.left_top}></div>
            <div className={styles.left_down}></div>
            <div className={styles.right_top}></div>
            <div className={styles.right_down}></div>
            <div className={styles.left}></div>
            <div className={styles.right}></div>
          </div>
        </div>

        <div className={styles.cog_wheel2}>
          <div className={styles.cog2}>
            <div className={styles.top}></div>
            <div className={styles.down}></div>
            <div className={styles.left_top}></div>
            <div className={styles.left_down}></div>
            <div className={styles.right_top}></div>
            <div className={styles.right_down}></div>
            <div className={styles.left}></div>
            <div className={styles.right}></div>
          </div>
        </div>
        <h1 className={styles.second_four}>4</h1>
        <p className={styles.wrong_para}>Uh Oh! Page not found!</p>
      </div>
    </div>
  );
};

export default Page404;
