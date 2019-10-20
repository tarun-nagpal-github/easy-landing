import React from 'react';
import '../../../assets/variable.scss';
// import '../../../assets/sass/vendor/font-awesome.scss';
import '../footer/footer.scss';
// import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Footer = () => {
   return(
      <footer>
         <div class="container">
            <div class="col-md-12">
               <div class="row">
                  <ul>
                     <li><a href="#">Home</a></li>
                     <li><a href="#">About Us</a></li>
                     <li><a href="#">How it Works</a></li>
                     <li><a href="#">Become Member</a></li>
                     <li><a href="#">Contact Us</a></li>
                  </ul>
               </div>
            </div>
            <p> © 2019 - EasyLanding Inc., Powered By: Techomatic Solutions Inc.</p>
            <p>
               <a href=""><i class="fab fa-facebook-f fa-3x"></i></a>
               <a href=""><i class="fab fa-twitter fa-3x"></i></a>
               <a href=""><i class="fab fa-dribbble fa-3x"></i></a>
            </p>
         </div>
      </footer>
   )
}

export default Footer;