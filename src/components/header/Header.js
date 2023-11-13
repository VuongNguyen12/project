import React from 'react';
import { useState } from 'react';
import './Header.css'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Card, CardBody, Dropdown,  } from 'reactstrap';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, } from 'reactstrap';
import { Modal, ModalBody, } from 'reactstrap';











export default function Header() {
  
  // icon navbar
  const [isOpen0, setIsOpen0] = useState(false);
  const toggle = () => setIsOpen0(!isOpen0);

  // icon search
  const [modal, setModal] = useState(false);

  const toggle1 = () => setModal(!modal);


 //Colapse
 const [isOpen1, setIsOpen1] = useState(false);
 const toggle2 = () => setIsOpen1(!isOpen1);
 const [isOpen2, setIsOpen2] = useState(false);
 const toggle3 = () => setIsOpen2(!isOpen2);
 const [isOpen3, setIsOpen3] = useState(false);
 const toggle4 = () => setIsOpen3(!isOpen3);
 const [isOpen4, setIsOpen4] = useState(false);
 const toggle5 = () => setIsOpen4(!isOpen4);
 
  return (

    <Container>
      <div className='contain'>

        <Navbar expand="sm" >
          <NavbarBrand href="/">KINGSPORTS</NavbarBrand>
          <div className='header_right1'>
            <i onClick={toggle1} className="fa-solid fa-magnifying-glass" ></i>
            <a className="me-3 ms-3" href='/account'>My Account</a>
            <i className="fa-solid fa-cart-plus"></i>
          </div>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen0} className=" justify-content-center" navbar>
            <Nav navbar>
            <NavItem>
              <div className='submenu'>
              <a href='/'><h6>Home</h6> </a>
              </div>    
            </NavItem>
          

            <NavItem>
            <div className='submenu'>
              <a href='/Shop'><h6>Shop</h6> </a>
        <i onClick={toggle3} class="fa-solid fa-caret-down"></i>
              </div> 
              <Collapse isOpen={isOpen2}>
        
        <ul className='submenu_1'>
              <li>Catogories</li>
              <li>Product Grid</li>
              <li>Single Products 1</li>
              <li>Single Products 2</li>
  
            </ul>
           
        </Collapse>
            </NavItem>
          
            <NavItem>
            <div className='submenu'>
              <a href='/Blog'><h6>Blog</h6> </a>
        <i onClick={toggle4} class="fa-solid fa-caret-down"></i>
              </div>
              <Collapse isOpen={isOpen3}>
        
        <ul className='submenu_1'>
              <li>Blog</li>
              <li>Blog three grid</li>
              <li>Blog two grid</li>
              <li>Single post</li>
  
            </ul>
           
        </Collapse>
            </NavItem>
       
            <NavItem>
            <div className='submenu'>
              <a href='/Page'><h6>Page</h6> </a>
        <i onClick={toggle5} class="fa-solid fa-caret-down"></i>
              </div>
              <Collapse isOpen={isOpen4}>
        
        <ul className='submenu_1'>
              <li>FAQ</li>
              <li>Our story</li>
              <li>Delivery</li>
              <li>404</li>
  
            </ul>
           
        </Collapse>
            </NavItem>
          
              <NavItem>
                
                 <a href='/contact'><h6>Contact us</h6></a>
               
              </NavItem>

            </Nav>

          </Collapse>
          <div className='header_right'>
            <i onClick={toggle1} className="fa-solid fa-magnifying-glass" ></i>
            <a className="me-3 ms-3" href='/account'>My Account</a>
            <i className="fa-solid fa-cart-plus"></i>
          </div>



        </Navbar>






        <Modal isOpen={modal} toggle={toggle1}>
          <button style={{ background: "none" }} onClick={toggle1}><i class="fa-solid fa-xmark" /></button>
          <ModalBody>
            <div className='search'>
              <h1>What are you looking for</h1>
              <div className='search1'>
                <input type='text' placeholder='Search this store' />
                <div className='icon_search'><i class="fa-solid fa-magnifying-glass" ></i></div>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    </Container>

  )
}