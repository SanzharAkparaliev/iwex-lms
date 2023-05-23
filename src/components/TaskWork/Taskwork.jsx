import React from 'react';
import styled from './Taskwork.module.css';
const Taskwork = () => {
  return (
    <div className={styled.wraper}>
      <div className={styled.block2}>
        <div className={styled.item}>
          <input
            className={styled.input}
            type="checkbox"
            name="inp"
            id="labe"
          />
          <label htmlFor="labe" className={styled.label}>
            Lessons
          </label>
          <div className={styled.text_f}>
            <p className={styled.p}>
              {' '}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              vel! Praesentium vero atque aliquam impedit aliquid natus cum
              distinctio beatae sint incidunt aspernatur, tenetur, ipsam amet ab
              doloremque vel quae! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatibus delectus itaque ab tenetur dolor
              assumenda repellendus fugit, nulla numquam! Facere nobis
              voluptates optio quos illo iure aut fugiat blanditiis. Deleniti?
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
              quis, tempore, maxime nobis provident animi, aspernatur recusandae
              aperiam magni quia dicta. Quae provident perferendis debitis? Cum
              eum veniam aut laudantium.
            </p>
          </div>
        </div>
      </div>

      {/* <div className={styled.block1}>
        <div className={styled.title}>
            <h1 className={styled.text}>Часто задоваемые вопросы</h1>
        </div>
    </div> */}
      {/* <div className={styled.block2}>
       <div className={styled.yy}>
           
            <div className={styled.item}>
                <input className={styled.input} type="checkbox" name='inp' id='labe1' />
                <label  htmlFor='labe1' className={styled.label}>Какой срок размещения вакансии?</label>
                <div className={styled.text_f}>
                    <p className={styled.p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel quis, tempore, maxime nobis provident animi, aspernatur recusandae aperiam magni quia dicta. Quae provident perferendis debitis? Cum eum veniam aut laudantium.</p>

                </div>
            </div>
            <div className={styled.item}>
                <input className={styled.input} type="checkbox" name='inp' id='labe2' />
                <label  htmlFor='labe2' className={styled.label}>Какой срок размещения вакансии?</label>
                <div className={styled.text_f}>
                    <p className={styled.p}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel quis, tempore, maxime nobis provident animi, aspernatur recusandae aperiam magni quia dicta. Quae provident perferendis debitis? Cum eum veniam aut laudantium.</p>

                </div>
            </div>
            <div className={styled.item}>
                <input className={styled.input} type="checkbox" name='inp' id='labe3' />
                <label  htmlFor='labe3' className={styled.label}>Какой срок размещения вакансии?</label>
                <div className={styled.text_f}>
                    <p className={styled.p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel quis, tempore, maxime nobis provident animi, aspernatur recusandae aperiam magni quia dicta. Quae provident perferendis debitis? Cum eum veniam aut laudantium.</p>

                </div>
            </div>
            <div className={styled.item}>
                <input className={styled.input} type="checkbox" name='inp' id='labe4' />
                <label  htmlFor='labe4' className={styled.label}>Какой срок размещения вакансии?</label>
                <div className={styled.text_f}>
                    <p className={styled.p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel quis, tempore, maxime nobis provident animi, aspernatur recusandae aperiam magni quia dicta. Quae provident perferendis debitis? Cum eum veniam aut laudantium.</p>

                </div>
            </div>
       </div>
    </div> */}
    </div>
  );
};

export default Taskwork;
