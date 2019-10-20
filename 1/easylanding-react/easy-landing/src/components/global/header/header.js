import React, { useState } from 'react';
import Logo from '../../../assets/images/logo.png';
import '../header/header.scss';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
     return (
      <section>
        <header>
            <div className="container">
            <Navbar  expand="md">
        <NavbarBrand href="/"> 
        <img src={Logo} alt="" style={{width:144}} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/">About us</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/">How it works</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/">Become a Host</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/">Login</NavLink>
            </NavItem>


            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Login
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
        </Collapse>
      </Navbar>
            </div>
        </header>
      </section>
    );
}


export default Header;