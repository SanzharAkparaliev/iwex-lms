import styles from './social.module.css';

import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';

const HeaderSocial = () => {
  return (
    <div className={styles.socials}>
      <div className={styles.social_container}>
        <div className={styles.socialIcon}>
          <FaInstagram className={styles.iconInstagram} />
          <a href="#" className={styles.iconLink}>
            Instagram
          </a>
        </div>
        <div className={styles.socialIcon}>
          <FaTelegram className={styles.iconInstagram} />
          <a href="#" className={styles.iconLink}>
            Telegram
          </a>
        </div>
        <div className={styles.socialIcon}>
          <FaTwitter className={styles.iconInstagram} />
          <a href="#" className={styles.iconLink}>
            Twitter
          </a>
        </div>
        <div className={styles.socialIcon}>
          <FaFacebook className={styles.iconInstagram} />
          <a href="#" className={styles.iconLink}>
            Facebook
          </a>
        </div>
        <div className={styles.socialIcon}>
          <FaGoogle className={styles.iconInstagram} />
          <a href="#" className={styles.iconLink}>
            Facebook
          </a>
        </div>
        <div className={styles.socialIcon}>
          <FaWhatsapp className={styles.iconInstagram} />
          <a href="#" className={styles.iconLink}>
            WhatSapp
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderSocial;
