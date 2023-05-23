import { useRef, useState } from 'react';
import User from '../User';
import styles from '../Profile/profile.module.css';

const menuHeight = getComputedStyle(document.documentElement).getPropertyValue(
  '--menu-height'
);

const buttons = ['Оценки', 'Результаты экзаменов', 'Посещаемость'];

const ProfilePage = () => {
  const [activeBlock, setActiveBlock] = useState(0);
  const isOpen = useRef();

  const toggleMenuBlock = (index) => {
    setActiveBlock(index);
  };
  // const menuHeight = '200px';

  // const blocks = [
  //   <>
  //     <h2>Title</h2>
  //     <p>Content</p>
  //   </>,
  // ];

  return (
    <div className={styles.article_body}>
      <aside className={styles.sidebar_wrapper}>
        <h4 className={styles.sidebar_title}>Профиль пользователя</h4>
        <User />

        <article className={`card ${isOpen ? 'open' : ''}`}>
          <div className={styles.buttons}>
            {buttons.map((button, index) => (
              <button
                className={index === activeBlock ? 'active' : ''}
                onClick={() => toggleMenuBlock(index)}
              >
                {button}
              </button>
            ))}
          </div>
          <div className={styles.wrapper}>
            <div
              className={styles.content}
              style={{
                translate: `0 calc(0px - ${menuHeight} * ${activeBlock})`,
              }}
            >
              <div className={styles.block}>
                <h2 className={styles.name_object}>Оценки</h2>
                <p>
                  Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit
                  vestibulum. Donec luctus commodo dictum. Aenean in turpis
                  erat. Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel
                  molestie.
                </p>
              </div>
              <div className={styles.block}>
                <h2 className={styles.name_object}>Результаты экзаменов</h2>
                <p>
                  Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit
                  vestibulum. Donec luctus commodo dictum. Aenean in turpis
                  erat. Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel
                  molestie.
                </p>
              </div>
              <div className={styles.block}>
                <h2 className={styles.name_object}>Посещаемость</h2>
                <p>
                  Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit
                  vestibulum. Donec luctus commodo dictum. Aenean in turpis
                  erat. Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel
                  molestie.
                </p>
              </div>
            </div>
          </div>
        </article>
      </aside>
    </div>
  );
};

export default ProfilePage;
