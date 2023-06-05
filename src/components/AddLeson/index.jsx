import { useEffect, useState } from 'react';
import styles from './AddLesons.module.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import EditorToolbar, { modules, formats } from './EditorToolbar';
import '../../App.css';

const AddLesons = () => {
  // const [selectedOption, setSelectedOption] = useState('');
  const [state, setState] = useState();
  const [input, setInput] = useState({
    name:'',
    lesson:'',
  });

  // const handleChange = (event) => {
  //   setSelectedOption(value);
  // };
  const handleChange = (value) => {
    setState({ value });
  };

  const handleInput = (e) => {
    setInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  console.log(input)
  return (
    <div className={styles.input_wrapper}>
      <form className={styles.form}>
        <div className={styles.input_group}>
          <select
           
            // value={selectedOption}
            onChange={handleChange}
            className={styles.selectStyle}
          >
            <option name="changeLesson" value="" onChange={handleInput}>
              Выберите урок
            </option>
            <option name="lesson" value="option1" onChange={handleInput}>
              Опция 1
            </option>
            <option name="lesson" value="option2" onChange={handleInput}>
              Опция 2
            </option>
            <option name="lesson" value="option3" onChange={handleInput}>
              Опция 3
            </option>
          </select>
        </div>
        <div className={styles.input_group}>
          <input
            className={styles.input}
            name='name'
            placeholder="Название урока"
            onChange={handleInput}
          />
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
