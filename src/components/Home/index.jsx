import styles from './home.module.css';

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrappper_container}>
        <div className={styles.banner}>
          <div className={styles.descriptions}>
            <h1 className={styles.description_title}>Iwex LMS</h1>
            <p className={styles.paragraph}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
