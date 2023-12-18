import { Link } from 'react-router-dom'
import React from 'react';
import { useState } from 'react';
import './Header.css'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Card, CardBody, Dropdown, } from 'reactstrap';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, } from 'reactstrap';
import { Modal, ModalBody, } from 'reactstrap';
import { useRef } from 'react';











export default function Header({ cartCount }) {
   //count_number
   const [count, setCount] = useState(cartCount);
 
   const add=()=>{
    setCount(prevcount => prevcount + 1);
        cartCount=setCount(count)
        console.log(cartCount)
   }
   const move=()=>{
       if(count>0){
        setCount(prevcount => prevcount- 1);
        cartCount=setCount(count)
           console.log(cartCount)
           
       }
      
       }
  //cart_Ref
  const cartRef = useRef();
  const Click_cart = () => {
    cartRef.current.classList.toggle("active")
  }
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

    // <Container>
    <div className='contain'>

      <Navbar expand="md" >
        <NavbarBrand href="/">KINGSPORTS</NavbarBrand>
        <div className='header_right1'>
        <i onClick={toggle1} className="fa-solid fa-magnifying-glass" ></i>
          <Link className="me-3 ms-3" to='/account'>My Account</Link>
        <div className='cart_number'>
        <i onClick={Click_cart} className="fa-solid fa-cart-plus"></i>
        <span className="cart-count">{cartCount}</span>
        </div>
        </div>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen0} className=" justify-content-center" navbar>
          <Nav navbar>
            <NavItem>
              <div className='submenu'>
                <Link to='/'><h6>Home</h6> </Link>
              </div>
            </NavItem>
            <NavItem>
              <div className='submenu'>
                <Link to='/Shop'><h6>Shop</h6> </Link>
                <i onClick={toggle3} class="fa-solid fa-caret-down"></i>
              </div>
              <Collapse isOpen={isOpen2}>
                <ul className='submenu_1'>
                  <li><Link to='/Shop'>Sports Nutrition</Link></li>
                  <li><Link to='/Page404'>Sports Sneakers</Link></li>
                  <li><Link to='/Page404'>Dumbbells</Link></li>
                  <li><Link to='/Page404'>Healthy Food</Link></li>

                </ul>

              </Collapse>
            </NavItem>

            <NavItem>
              <div className='submenu'>
                <Link to='/Blog'><h6>Blog</h6> </Link>
              </div>

            </NavItem>

            <NavItem>
              <div className='submenu'>
                <Link to='/About'><h6>About us</h6> </Link>

              </div>



            </NavItem>

            <NavItem>
              <div className='submenu'>
                <Link to='/Contact'><h6>Contact us</h6></Link>
              </div>
            </NavItem>

          </Nav>

        </Collapse>
        <div className='header_right'>
          <i onClick={toggle1} className="fa-solid fa-magnifying-glass" ></i>
          <Link className="me-3 ms-3" to='/account'>My Account</Link>
        <div className='cart_number'>
        <i onClick={Click_cart} className="fa-solid fa-cart-plus"></i>
        <span className="cart-count">{cartCount}</span>
        </div>
         
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
    
            <div className='sub_cart1' ref={cartRef}>
             <div  className='close'>
              <h5>Shopping cart</h5>
               <button onClick={Click_cart}>X close</button>
               </div>
              <h6>There are no products in the cart yet.</h6>
              <div className='number'>
                                <div className='number_count'>
                                    {cartCount}
                                </div>
                            </div>
              <button className='back'><Link to='/Shop'>BACK TO SHOP</Link></button>
            </div>
          
    </div>
    // </Container>

  )
}