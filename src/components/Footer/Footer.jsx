import React from 'react'
import styled from './Footer.module.css'
export const Footer = () => {
  return (
   <footer className={styled.site_footer}>
     
        <div className={styled.row}>
            <div className={styled.ab}>
                <h4 className={styled.title}>About</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat accusantium architecto iste maiores aliquam magni ipsa rerum perspiciatis cum illo sunt corporis soluta in id tempora nihil tempore, sint reiciendis!</p>
            </div>
            {/* ------------ */}
            <div className={styled.cat}>
                <h4 className={styled.title}>Categories</h4>
                <ul className={styled.footer_links}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Teachers</a></li>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
            </div>
            <div className={styled.contact}>
                <h4 className={styled.title}>Contact</h4>
                <ul className={styled.footer_links}>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Linkedin</a></li>
                <li><a href="#">Twitter</a></li>
                <li>Phone: +996776262328</li>

                </ul>
            </div>


        </div>
    
   </footer>
  )
}
{/* <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
              <li><a href="http://scanfcode.com/category/android/">Android</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
         <a href="#">Scanfcode</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer> */}