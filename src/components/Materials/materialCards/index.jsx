import styles from '../material.module.css';
// import '../../.././App.css';

const MaterialCards = () => {
  return (
    <div className={styles.cards}>
      {/* <div className={styles.info_card}> */}
      <div className={styles.card}>
        <div className={styles.cards_img}>
          <img
            src="../../../../public/img/material_img 2.jpg"
            alt=""
            className={styles.card_inner__img}
          ></img>
          <div className={styles.card__title}>
            <span>Учись программировать вместе с Iwex IT</span>
            <h3 className={styles.desc_card}>
              Старт курса: 20.06.23 | Back-End
            </h3>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.cards_img}>
          <img
            src="../../../../public/img/material_img3.jpg"
            alt=""
            className={styles.card_inner__img}
          ></img>
          <div className={styles.card__title}>
            <span>Изучай английский вместе с Iwex</span>
            <h3 className={styles.desc_card}>
              Старт курса: 20.06.23 | English
            </h3>
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.cards_img}>
          <img
            src="../../../../public/img/material_img4.jpg"
            alt=""
            className={styles.card_inner__img}
          ></img>
          <div className={styles.card__title}>
            <span>Изучай немецкий вместе с Iwex</span>
            <h3 className={styles.desc_card}>
              Старт курса: 20.06.23 | Немецкий язык
            </h3>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default MaterialCards;
