import { useState } from 'react';
import styles from './AddLesons.module.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import EditorToolbar, { modules, formats } from './EditorToolbar';
import '../../App.css';

const AddLesons = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [state, setState] = useState();

  const handleChange = (event) => {
    selectedOption({ value });
  };
  // const handleChange = (value) => {
  //   setState({ value });
  // };

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
          {/* <textarea className={styles.input} placeholder="content"></textarea> */}
          {/* <ReactQuill theme="snow" /> */}
          <EditorToolbar />
          <ReactQuill
            theme="snow"
            // value={state.value}
            onChange={handleChange}
            placeholder={'Write something awesome...'}
            modules={modules}
            formats={formats}
            className={styles.editor}
            name="editor"
          />
        </div>
        <div className={styles.input_group}>
          <button className={styles.btn}>Добавить</button>
        </div>
      </form>
    </div>
  );
};

export default AddLesons;
