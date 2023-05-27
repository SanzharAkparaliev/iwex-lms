import React from 'react';
import styled from './Footer.module.css';
import { FaFacebook } from 'react-icons/fa';
import { RxLinkedinLogo } from 'react-icons/rx';
import { RiInstagramFill, RiTwitterFill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className={styled.site_footer}>
      <div className={styled.footer_container}>
        <div className={styled.row}>
          <div className={styled.roww}>
            <div className={styled.catt}>
              <h4 className={styled.title}>A B O U T</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
                accusantium architecto iste maiores aliquam magni ipsa rerum
                perspiciatis cum illo sunt corporis soluta in id tempora nihil
                tempore, sint reiciendis!
              </p>
            </div>
            {/* ------------ */}
            <div className={styled.cat}>
              <h4 className={styled.title}>C A T E G O R I E S</h4>
              <ul className={styled.footer_links}>
                <li>
                  <NavLink to={'/'}>Home </NavLink>
                </li>
                <li>
                  <NavLink to={'/tech'}>Techers </NavLink>
                </li>
                <li>
                  <a href="#">Courses</a>
                </li>
                <li>
                  <a href="#">Profile</a>
                </li>
                <li>
                  <NavLink to={'/'}>Logout </NavLink>
                </li>
              </ul>
            </div>
            <div className={styled.cat}>
              <h4 className={styled.title}>C O N T A C T</h4>
              <ul className={styled.footer_links}>
                <li>
                  <a href="https://www.instagram.com/iwex.kg/">Instagram</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/iwex.kg/?locale=ru_RU">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://kg.linkedin.com/in/team-iwex-93ba0624b?original_referer=https%3A%2F%2Fwww.google.com%2F">
                    Linkedin
                  </a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li className={styled.phone}>Phone: +996776262328</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styled.line}>
          <div className={styled.title_footer}>
            <p>Copyright © 2011 All Rights Reserved by IWEX.</p>
          </div>
          <div className={styled.icon_footer}>
            <a href="https://www.facebook.com/iwex.kg/?locale=ru_RU">
              <FaFacebook className={styled.icon_fac} />
            </a>
            <a href="">
              <RiTwitterFill className={styled.icon_twitt} />
            </a>
            <a href=" https://kg.linkedin.com/in/team-iwex-93ba0624b?original_referer=https%3A%2F%2Fwww.google.com%2F">
              <RxLinkedinLogo className={styled.icon_link} />
            </a>
            <a href="https://www.instagram.com/iwex.kg/">
              <RiInstagramFill className={styled.icon_inst} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
