import { useState } from 'react';
import './Header.css'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, } from 'reactstrap';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,} from 'reactstrap';
import { Modal, ModalBody, } from 'reactstrap';
import home_img from '../../img/home_img.png'



//Carousel
const items = [
  {
    src: 'https://ld-wp73.template-help.com/tf/demo_biona/biona_demo_v1/wp-content/uploads/2021/05/slide2-min.png',
    altText: 'HELLO',
    caption: 'Slide 1',
    key: 1,
  },
  {
    src: 'https://ld-wp73.template-help.com/tf/demo_biona/biona_demo_v1/wp-content/uploads/2021/05/home-slide-min.png',
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
  },
];






export default function Header() {
  // icon search
  const [modal, setModal] = useState(false);

  const toggle1 = () => setModal(!modal);

  //carousel
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });



  // icon navbar
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  
  return (
    <div style={{ height: "600px" }}>
      <Container style={{ height: "100%" }}>
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
                <DropdownItem>Option 0</DropdownItem>
                <DropdownItem>Option 1</DropdownItem>
               
               
              </DropdownMenu>
            </UncontrolledDropdown>


                     
      
                    <ul className='Home1'>
                      <li><a href='#' />Home 1</li>
                      <li><a href='#' />Home 2</li>
                      <li><a href='#' />Home 3</li>
                      <li><a href='#' />Home 4</li>
                      <li><a href='#' />Home 5</li>
                    </ul>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Shop">
                  <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
               <h6>Shop</h6>
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem>Option 3</DropdownItem>
               
               
              </DropdownMenu>
            </UncontrolledDropdown>




               
                    <ul className='Home1'>
                      <li><a href='#' />Home 5</li>
                      <li><a href='#' />Home 6</li>
                      <li><a href='#' />Home 7</li>
                      <li><a href='#' />Home 8</li>
                      <li><a href='#' />Home 9</li>
                    </ul>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Blog">
                  <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
               <h6>Blog</h6>
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Option 4</DropdownItem>
                <DropdownItem>Option 5</DropdownItem>
               
               
              </DropdownMenu>
            </UncontrolledDropdown>

                    <ul className='Home1'>
                      <li><a href='#' />Home 10</li>
                      <li><a href='#' />Home 11</li>
                      <li><a href='#' />Home 12</li>
                      <li><a href='#' />Home 13</li>
                      <li><a href='#' />Home 14</li>
                    </ul>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Page">
                  
                  <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
               <h6>Page</h6>
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>Option 6</DropdownItem>
                <DropdownItem>Option 7</DropdownItem>
               
               
              </DropdownMenu>
            </UncontrolledDropdown>


                    <ul className='Home1'>
                      <li><a href='#' />Home 15</li>
                      <li><a href='#' />Home 16</li>
                      <li><a href='#' />Home 17</li>
                      <li><a href='#' />Home 18</li>
                      <li><a href='#' />Home 19</li>
                    </ul>
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


          <div className='banner'>
            <div className='banner_left'>
              <h1><span>BOOST</span> your imnune system today</h1>
              <button>Shop Now</button>
            </div>
            <div className='banner_right'>
              <img className='imgs' alt='image_banner' src={home_img} />
            </div>
          </div>


          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
          >
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
            />
          </Carousel>


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
    </div>
  )
}
