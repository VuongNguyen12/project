import { Col, Container, Row } from 'reactstrap'
import './Footer.css'
export default function Footer() {
    return (
        <div>
            <Container >
                <div className='footer'>
                <Row>
                    <Col sm="6" md="5">
                        <div className='footer_info'>
                            <a href='/' style={{ fontSize: "24px", color: "white" }}>KINGSPORTS</a>
                            <div className='icons'>
                                <a className='fb' href='#'><i class="fa-brands fa-facebook-f"></i></a>
                                <a className='tw' href='#'><i class="fa-brands fa-twitter"></i></a>
                                <a className='yb' href='#'><i class="fa-brands fa-youtube"></i></a>
                                <a className='ins' href='#'><i class="fa-brands fa-instagram"></i></a>
                            </div>


                            <p>These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose.</p>
                            <div style={{ display: "flex" }}><a href='/'>King @</a> All rights reserved.</div>
                        </div>
                    </Col>
                    <Col sm="6" md="2">
                        <div className='footer_menu'>
                            <a href='/'><h6>Home</h6></a>
                            <a href='/Shop'><h6>Shop</h6></a>
                            <a href='/Blog'><h6>Blog</h6></a>
                            <a href='/Page'><h6>Page</h6></a>
                            <a href='/Contact'><h6>Contact us</h6></a>
                        </div>


                    </Col>
                    <Col sm="6" md="5">
                        <div className='footer_contact'>
                            <h2>Sign up for the newsletter</h2>
                            <div className='footer_sub'>
                                <input type='text' placeholder='Enter Email'></input>
                                <button>Subscribe</button>
                            </div>
                            <div className='footer_phone'>
                                <i class="fa-solid fa-phone" style={{ color: "#FF0505", fontSize:"24px" }}></i>
                                <div>
                                    <p>Contact for a Free Consultation:</p>
                                    <a href='tel:+19001577'>+19001577</a>
                                </div>
                            </div>
                            <div className='footer_phone'>
                            <i class="fa-solid fa-location-dot" style={{color:"#ff0000" , fontSize:"24px"}}></i>
                                <div>
                                    <p>160 Broadway, New York, NY 10038,102 1st Avenue, New York, NY 100</p>
                                   
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                </div>
            </Container>

        </div>
    )
}