import { useState } from 'react';
import styles from './AddLesons.module.css';

const AddLesons = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={styles.input_wrapper}>
      <form className={styles.form}>
        <div className={styles.input_group}>
          <select
            value={selectedOption}
            onChange={handleChange}
            className={styles.selectStyle}
          >
            <option value="">Выберите урок</option>
            <option value="option1">Опция 1</option>
            <option value="option2">Опция 2</option>
            <option value="option3">Опция 3</option>
          </select>
        </div>
        <div className={styles.input_group}>
          <input className={styles.input} placeholder="Название урока" />
        </div>
        <div className={styles.input_group}>
          <textarea className={styles.input} placeholder="content"></textarea>
        </div>
        <div className={styles.input_group}>
          <button className={styles.btn}>Добавить</button>
        </div>
      </form>
    </div>
  );
};

export default AddLesons;
