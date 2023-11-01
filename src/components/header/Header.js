import { useState } from 'react';
import './Header.css'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, } from 'reactstrap';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,} from 'reactstrap';
import { Modal, ModalBody, } from 'reactstrap';
import home_img from '../../img/home_img.png'










export default function Header() {
  // icon search
  const [modal, setModal] = useState(false);

  const toggle1 = () => setModal(!modal);




  // icon navbar
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  
  return (
   
      <Container>
        <div className='contain'>

          <Navbar expand="sm" >
            <NavbarBrand href="/">KINGSPORTS</NavbarBrand>
            <div className='header_right1'>
              <i onClick={toggle1} class="fa-solid fa-magnifying-glass" ></i>
              <a className="me-3 ms-3" href='/account'>My Account</a>
              <i class="fa-solid fa-cart-plus"></i>
            </div>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} className=" justify-content-center" navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="/">
                  <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
               <h6>Home</h6>
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Home 1</DropdownItem>
                <DropdownItem>Home 2</DropdownItem>
                <DropdownItem>Home 3</DropdownItem>
                <DropdownItem>Home 4</DropdownItem>
                <DropdownItem>Home 5</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>


                     
      
                 
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Shop">
                  <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
               <h6>Shop</h6>
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Categories</DropdownItem>
                <DropdownItem>Products Grid (Sidebar)</DropdownItem>
                <DropdownItem>Single product 1</DropdownItem>
                <DropdownItem>Single product 2</DropdownItem>
                <DropdownItem>Single product 3</DropdownItem>
               
               
              </DropdownMenu>
            </UncontrolledDropdown>




               
                   
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Blog">
                  <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
               <h6>Blog</h6>
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Blog</DropdownItem>
                <DropdownItem>Blog three grid</DropdownItem>
                <DropdownItem>Blog two grid (Sidebar)</DropdownItem>
                <DropdownItem>Single Post </DropdownItem>
                <DropdownItem>Single Post(Sidebar)</DropdownItem>
               
               
              </DropdownMenu>
            </UncontrolledDropdown>

                    
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Page">
                  
                  <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
               <h6>Page</h6>
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>FAQ</DropdownItem>
                <DropdownItem>Our Story</DropdownItem>
                <DropdownItem>Delivery</DropdownItem>
                <DropdownItem>Our Location</DropdownItem>
                <DropdownItem>Documentation</DropdownItem>
               
               
              </DropdownMenu>
            </UncontrolledDropdown>


                    
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Contact">
                    <h6>Contact us</h6>
                  </NavLink>
                </NavItem>

              </Nav>

            </Collapse>
            <div className='header_right'>
              <i onClick={toggle1} class="fa-solid fa-magnifying-glass" ></i>
              <a className="me-3 ms-3" href='/account'>My Account</a>
              <i class="fa-solid fa-cart-plus"></i>
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