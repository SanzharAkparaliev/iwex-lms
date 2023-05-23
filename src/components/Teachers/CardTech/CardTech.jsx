import React from 'react'
import styled from './CardTech.module.css'
import avatar from './man.jpg'
import { FaFacebook } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import { RiInstagramFill, RiTwitterFill} from "react-icons/ri";



export const CardTech = () => {
  return (
    <div className={styled.card}>
        <div className={styled.card_img}>
            <img className={styled.img} src={avatar} alt="" />
    
        </div>
        {/* ------------------------- */}
        <div className={styled.card_text}>
            <h2 className={styled.card_title}>Jon Smitt</h2>
            <h4 className={styled.card_prof}>Product Manager</h4>
            <div className={styled.line}></div>
            <p className={styled.card_op}>Professional translator with 4 years experience   </p>
            <div className={styled.icon}>
                <a href=""><FaFacebook  className={styled.card_a}/></a>
                <a href=""><RxLinkedinLogo className={styled.card_a}/></a>
                <a href=""><RiInstagramFill  className={styled.card_a}/></a>
                <a href=""><RiTwitterFill  className={styled.card_a}/></a>

               
            </div>

        </div>
    </div>
  )
}



