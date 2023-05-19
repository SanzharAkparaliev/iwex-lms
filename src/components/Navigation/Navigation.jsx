import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css'
import cn from 'clsx'
import { BiLogIn } from "react-icons/bi";
import logo1 from './logo3.png'
import './habmerger.css'

const Navigation = () => {


  var nav = document.querySelector(".nav");
  var hamburger = document.querySelector(".hamburger");
  // // Look for .hamburger
  
  // // On click
  // hamburger.addEventListener("click", function() {
  //   // Toggle class "is-active"
  //   hamburger.classList.toggle("is-active");
  //   nav.classList.toggle("is-active");
  //   // Do something else, like open/close menu
  // });


 const hamburgerr = (e) => {
   e.hamburger.classList.add("is-active")

   nav.classList.add("is-active");
   // Do something else, like open/close menu
}

//   // hamburger.addEventListener("click", function() {
//   //   // Toggle class "is-active"
   
//   // });

  return (

    <div className={styles.conteiner}>
<div className={styles.blok}>

<div className={styles.contlogo}>
           <img className={styles.img} src={logo1} alt="" />
        
          <p className={styles.parag}>LMS</p>
        </div>  

        <button className="hamburger hamburger--spring" onClick={hamburgerr} type="button">
  <span className="hamburger-box">
    <span className="hamburger-inner"></span>
  </span>
</button>



    <nav className='nav'>
        <NavLink className={styles.join} to={"/"}>
            Home
        </NavLink>
        <NavLink className={styles.join} to={"/login"}>
            {<BiLogIn/>}
        </NavLink>
    </nav>
    
</div>

    </div>
  )
}

export default Navigation