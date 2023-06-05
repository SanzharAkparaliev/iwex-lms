import styled from './CardTech.module.css';
import { FaFacebook } from 'react-icons/fa';
import { RxLinkedinLogo } from 'react-icons/rx';
import { RiInstagramFill, RiTwitterFill } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

export const CardTech = ({
  title,
  prof,
  opi,
  imgg,
  twitt,
  insta,
  link,
  fack,
  visble,
}) => {
  // const [show,setShow] = useState(false)

  return (
    <div className={styled.card}>
      <div className={styled.card_img}>
        <img className={styled.img} src={imgg} alt="" />
      </div>
      {/* ------------------------- */}
      <div className={styled.card_text}>
        {visble && (
          <div className={styled.exit_bt}>
            <AiOutlineClose className={styled.exit_ic} />
          </div>
        )}

        <h2 className={styled.card_title}>{title}</h2>
        <h4 className={styled.card_prof}>{prof}</h4>
        <div className={styled.line}></div>
        <p className={styled.card_op}>{opi} </p>
        <div className={styled.icon}>
          <a href={fack}>
            <FaFacebook className={styled.card_fac} />
          </a>
          <a href={link}>
            <RxLinkedinLogo className={styled.card_link} />
          </a>
          <a href={insta}>
            <RiInstagramFill className={styled.card_inst} />
          </a>
          <a href={twitt}>
            <RiTwitterFill className={styled.card_twitt} />
          </a>
        </div>
      </div>
    </div>
  );
};
