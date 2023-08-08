import styles from '../Home/home.module.css';

const InputLabel = () => {
  return (
    <>
      <label className={styles.label}>
        <div className={styles.input_group}>
          <input
            type="text"
            name="text"
            placeholder="Search"
            className={styles.input}
          />
        </div>
        <div className={styles.search_btn}>
          <button className={styles.btn}>Search</button>
        </div>
      </label>
    </>
  );
};

export default InputLabel;
