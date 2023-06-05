import styles from '../material.module.css';
// import '../../.././App.css';

const MaterialCards = () => {
  return (
    <div className={styles.cards}>
      <div className={styles.info_card}>
        <div className={styles.card}>
          <div className={styles.cards_img}>
            <img
              src="../../../../public/img/material_img 2.jpg"
              alt=""
              className={styles.card_inner__img}
            ></img>
            <div className={styles.card__title}>
              <span>Back-End</span>
              <h3 className={styles.desc_card}>
                Учись программировать вместе с Iwex IT
              </h3>
            </div>
          </div>
        </div>
        <div>
          <span className={styles.info_courses}>Старт курса: 20.06.23</span>
        </div>
      </div>
    </div>
  );
};

export default MaterialCards;
