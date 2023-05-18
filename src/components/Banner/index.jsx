import styles from '../Home/home.module.css';
import InputLabel from '../Input';
// import SocialS from './Social';

const BannerContent = () => {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.descriptions}>
          <h1 className={styles.description_title}>Iwex LMS</h1>
          <p className={styles.paragraph}>
            Lorem Ipsum is simply dummy text of the printing and <br />
            typesetting industry. Lorem Ipsum has been the industry's <br />{' '}
            standard dummy text ever since the 1500s, when an <br /> unknown
            printer took a galley of type and scrambled it <br /> to make a type
            specimen book.
          </p>
          <InputLabel />
        </div>
        <div className={styles.banner_images}>
          <img
            src="../../../public/img/banner-girl.png"
            alt="banner-girl"
            className={styles.banner_girl}
          />
        </div>
      </div>
      {/* <SocialS /> */}
    </>
  );
};

export default BannerContent;
