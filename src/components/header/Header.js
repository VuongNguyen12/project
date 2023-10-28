import { useState } from 'react';
import './Header.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Container,
} from 'reactstrap';
import home_img from '../../img/home_img.png'
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className='contain'>
            <Container>
                <Navbar expand="sm" >
                    <NavbarBrand href="/">KINGSPORTS</NavbarBrand>  
                    <div className='header_right1'>
                            <i class="fa-solid fa-magnifying-glass" ></i>
                            <a className="me-3 ms-3" href='/account'>My Account</a>
                            <div><i class="fa-solid fa-cart-plus"></i></div>
                    </div> 
                    <NavbarToggler onClick={toggle} />          
                    <Collapse isOpen={isOpen} className=" justify-content-center" navbar>
                        <Nav className="me-5" navbar>
                            <NavItem>
                                <NavLink href="/">
                                    <h6>Home</h6>
                                    <i class="fa-solid fa-caret-down"></i>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Shop">
                                <h6>Shop</h6>
                                    <i class="fa-solid fa-caret-down"></i>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Blog">
                                <h6>Blog</h6>
                                    <i class="fa-solid fa-caret-down"></i>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Page">
                                <h6>Page</h6>
                                    <i class="fa-solid fa-caret-down"></i>
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
                            <i class="fa-solid fa-magnifying-glass" ></i>
                            <a className="me-3 ms-3" href='/account'>My Account</a>
                            <div><i class="fa-solid fa-cart-plus"></i></div>
                    </div> 
                    
                </Navbar>

            </Container>
            <div className='banner'>
                <div className='banner_left'>
                    <h1><span>BOOST</span> your imnune system today</h1>
                  <button>Shop Now</button>
                </div>
                <div className='banner_right'>
                    <img className='imgs' alt='image_banner' src={home_img}/>
                </div>
            </div>
            
        </div>
    )
}