import { Col, Container, Row } from 'reactstrap'
import'./Footer.css'
export default function Footer(){
    return(
        <div>
            <Container>
            <Row>
                <Col sm="6" md="4">
                     <p style={{fontSize:"24px"}}>KINGSPORTS</p>
                  <div className='icons'>
                    <div className='icon fb'><i class="fa-brands fa-facebook-f"></i></div>
                    <div className='icon tw'><i class="fa-brands fa-twitter"></i></div>
                    <div className='icon yb'><i class="fa-brands fa-youtube"></i></div>
                    <div className='icon in'><i class="fa-brands fa-instagram"></i></div>
                  </div>
                  <p>These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose.</p>
                  <div style={{display:"flex"}}><a href='/'>King.</a> All rights reserved.</div>
                  
                </Col>
                <Col sm="6" md="4">
                    <div className='footer_menu'>
                    <a href='/'>Home</a>
                    <a href='/Shop'>Shop</a>
                    <a href='/Blog'>Blog</a>
                    <a href='/Page'>Page</a>
                    <a href='/Contact'>Contact us</a>
                    </div>
                    
                    
                </Col>
                <Col sm="6" md="4">
                    col1
                </Col>
            </Row>
            </Container>
           
        </div>
    )
}