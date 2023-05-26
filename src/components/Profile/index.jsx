import { useRef, useState } from 'react';
import User from '../User';
import styles from '../Profile/profile.module.css';
import '../../App.css';

const menuHeight = getComputedStyle(document.documentElement).getPropertyValue(
  '--menu-height'
);

const dataButton = [
  {
    name: 'Оценки',
    id: 1,
  },
  {
    name: 'Результаты',
    id: 2,
  },
  {
    name: 'Посещаемость',
    id: 3,
  },
];

const ProfilePage = () => {
  const [activeBlock, setActiveBlock] = useState(0);
  const isOpen = useRef();

  const toggleMenuBlock = (index) => {
    setActiveBlock(index);
  };

  return (
    <div className={styles.article_body}>
      <aside className={styles.sidebar_wrapper}>
        <h4 className={styles.sidebar_title}>Профиль пользователя</h4>
        <User />

        <article className={`card ${isOpen ? 'open' : ''}`}>
          <div className="buttons">
            {dataButton.map((item, index) => (
              <button
                key={item.id}
                className={index === activeBlock ? 'active' : ''}
                onClick={() => toggleMenuBlock(index)}
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="wrapper">
            <div
              className="content"
              style={{
                translate: `0 calc(0px - ${menuHeight} * ${activeBlock})`,
              }}
            >
              <div className="block">
                <h2 className="name_object">Оценки</h2>
                <p className="desc_object">
                  Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit
                  vestibulum. Donec luctus commodo dictum. Aenean in turpis
                  erat. Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel
                  molestie.
                </p>
              </div>
              <div className="block">
                <h2 className="name_object">Результаты экз-ов </h2>
                <p className="desc_object">
                  Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit
                  vestibulum. Donec luctus commodo dictum. Aenean in turpis
                  erat. Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel
                  molestie.
                </p>
              </div>
              <div className="block">
                <h2 className="name_object">Посещаемость</h2>
                <p className="desc_object">
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
