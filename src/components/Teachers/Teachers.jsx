
import { CardTech } from './CardTech/CardTech'
import { mockData } from './CardTech/mockData'
import styled from './Teachers.module.css'
import { AddTech } from './AddTech/AddTech';


const Teachers = () => {
  const soft = mockData
  return (
    <div className={styled.wrap}>
      <div className={styled.soft}>
        <div className={styled.soft2}>
          <h1 className={styled.soft_title}>I W E X</h1>
          <p className={styled.soft_par}>
          Click on the button to see the list of teachers
          </p>
        <div className={styled.btn_s}>  <button  className={styled.soft_btn}>Scroll Down </button></div>
        </div>
      </div>
{/* ------------------------------ ----------------------*/}
      <div className={styled.wraper}>
        {/* ------------------ */}
        <div className={styled.grid}>
          <div className={styled.textdiv}>
            <h1 className={styled.title}> About Us</h1>
            <p className={styled.par}>Here you can find information about our teachers and our staff. With our teachers you can easily learn German or Polish and you will be able to easily live and find a job in a large part of Europe</p>
          </div>
        </div>
        <div className={styled.grid}></div>
        <div className={styled.grid}></div>
        <div className={styled.grid}>
          <div className={styled.textdivv}>
            <h1 className={styled.titlee}>Techers</h1>
            <p className={styled.parr}>  Our teachers were taught by experienced people who have been teaching languages ​​for several years and have vast experience in this field, under their teaching, dozens of students have already gone to study, live and work in Germany and Poland</p>
          </div>
        </div>
      </div>
      {/* ------------------------------------------- */}
      <div id='akz' className={styled.cardbox}>
            <h1 className={styled.card_title}>OUR  TEAM</h1>
            <AddTech/>
        <div className={styled.card_cont}>
         {
          soft.map((item) =>{
            return   <CardTech key={item.id} title={item.title} prof={item.prof} opi={item.opi} imgg={item.imgg} twitt={item.twitt} insta={item.insta} link={item.link} fack={item.fack} />
          })
         }

        
         

        </div>
      </div>
    </div>
  )
}

export default Teachers

