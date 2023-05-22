import styles from '../Home/home.module.css';
import { RiContactsFill, RiDiscussLine, RiDraftLine } from 'react-icons/ri';

const FestureSection = () => {
  return (
    <div>
      <div className={styles.card_section}>
        <div className={styles.single_card}>
          <RiDraftLine className={styles.card_icon} />
          <h4 className={styles.card_title}>Quick Learning</h4>
          <p className={styles.card_single_desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            molestias, aperiam doloribus aut sapiente praesentium eos iste dicta
            amet itaque!
          </p>
        </div>
        <div className={styles.single_card}>
          <RiDiscussLine className={styles.card_icon} />
          <h4 className={styles.card_title}>All Time Support</h4>
          <p className={styles.card_single_desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            molestias, aperiam doloribus aut sapiente praesentium eos iste dicta
            amet itaque!
          </p>
        </div>
        <div className={styles.single_card}>
          <RiContactsFill className={styles.card_icon} />
          <h4 className={styles.card_title}>Certification</h4>
          <p className={styles.card_single_desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            molestias, aperiam doloribus aut sapiente praesentium eos iste dicta
            amet itaque!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FestureSection;
