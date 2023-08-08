import styles from './material.module.css';
import MaterialCards from './materialCards';

const Material = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_container}>
        <MaterialCards />
      </div>
    </div>
  );
};
export default Material;
