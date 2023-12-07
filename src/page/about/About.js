import { Col, Container, Row } from 'reactstrap'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import './About.css'
import about_img from "../../img/about_img.jpg"
import logo1 from '../../img/logo1.png'
import logo2 from '../../img/logo2.png'
import logo3 from '../../img/logo3.png'
import logo4 from '../../img/logo4.png'
import about1 from '../../img/about1.png'
import about2 from '../../img/about2.png'
import about3 from '../../img/about3.png'
import about4 from '../../img/about4.png'
import about5 from '../../img/about5.png'
import about6 from '../../img/about6.png'
import { useEffect, useState } from 'react'
export default function About() {
    const [time, setTime] = useState('');
    const day = new Date().getYear();
    const hours = new Date().getHours();
    const min = new Date().getMinutes();
    const sec = new Date().getSeconds();
    useEffect(() => {
        setTimeout(() => {
            setTime(
                day + ':' + hours + ':' + min + ':' + sec
            );
        }, 1000);

    }, [time]);
    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col sm="12" style={{textAlign:"center"}}><h1 style={{marginBottom:"50px"}}>About us </h1></Col>
                    <Col sm="12" md="6">
                        <h4>Let food be thy medicine and medicine be thy food.</h4>
                    </Col>
                    <Col sm="12" md="6">
                        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
                    </Col>
                </Row>
                <Row>
                    <div className='about_product'>
                        <img alt='about_img' src={about_img} />
                        <h1>The first wealth is health.</h1>
                        <button className='button_about'>Shop Now</button>
                    </div>

                </Row>
                <Row>
                    <div className='partner'>
                        <h4>Our partners</h4>
                        <div className='slides'>
                            <div className='slide1 col1'>
                                <img src={logo1} />
                            </div>
                            <div className='slide1 col2'>
                                <img src={logo2} />
                            </div>
                            <div className='slide1 col3'>
                                <img src={logo3} />
                            </div>
                            <div className='slide1 col4'>
                                <img src={logo4} />
                            </div>
                        </div>
                    </div>
                    <Col sm="12" md="6">
                        <p>Since 1939, the Institute of Biona has been a forum for passionate science of food professionals and technologists to collaborate, learn, and contribute all with the goal of inspiring transforming collective scientific knowledge into innovative solutions for the benefit of all people around the world.</p>
                        <p>As a scientific community grounded in purpose, Biona feeds the minds that feed the world.</p>
                    </Col>
                    <Col sm="12" md="6">
                        <p>At Biona we are committed to providing our members the resources and services necessary to enhance and advance their careers not only to improve and enrich their lives, but to help make greater contributions to their organizations and the science of food profession as a whole.</p>
                        <p>In doing so, we all contribute to improving the sustainability of our global food supply.</p>
                    </Col>
                </Row>
                <Row>
                    <div className='reponsi'>
                        <h4>Our responsibility</h4>
                        <p>As a collective, Biona community works together to advance the science of food and one another through the following shared values:</p>
                    </div>
                    <Col sm="12" md="4">
                        <div className='community'>
                            <div className='com_img'>
                                <img alt='about1' src={about1} />
                            </div>
                            <div className='com_info'>
                                <h6>Community</h6>
                                <p>We are dedicated to supporting the changing needs.</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm="12" md="4">
                        <div className='integrity'>
                            <div className='inter_img'>
                                <img alt='about2' src={about2} />
                            </div>
                            <div className='inter_info'>
                                <h6>Integrity</h6>
                                <p>We are dedicated to supporting the changing needs.</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm="12" md="4">
                        <div className='progres'>
                            <div className='pro_img'>
                                <img alt='about3' src={about3} />
                            </div>
                            <div className='pro_info'>
                                <h6>Progress</h6>
                                <p>We are dedicated to supporting the changing needs.</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm="12" md="4">
                        <div className='pas'>
                            <div className='pas_img'>
                                <img alt='about4' src={about4} />
                            </div>
                            <div className='pas_info'>
                                <h6>Passion</h6>
                                <p>We are dedicated to supporting the changing needs.</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm="12" md="4">
                        <div className='community'>
                            <div className='com_img'>
                                <img alt='about5' src={about5} />
                            </div>
                            <div className='com_info'>
                                <h6>Community</h6>
                                <p>We are dedicated to supporting the changing needs.</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm="12" md="4">
                        <div className='our_reponsi'>
                            <div className='our_img'>
                                <img alt='about6' src={about6} />
                            </div>
                            <div className='our_info'>
                                <h6>Our responsibility</h6>
                                <p>We are dedicated to supporting the changing needs.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <div className='product2'>
                            <div className='product2_left'>
                                <div className='timer'>
                                    <div className='time day'>
                                        <h5> {day}</h5>
                                        Days
                                    </div>
                                    <div className='time hour'>
                                        <h5>{hours}</h5>
                                        Hours
                                    </div>
                                    <div className='time minutes'>
                                        <h5>{min}</h5>
                                        Minutes
                                    </div>
                                    <div className='time second'>
                                        <h5>{sec}</h5>
                                        Seconds
                                    </div>
                                </div>
                                <h1>
                                    Jog for Joy
                                </h1>
                                <p><strong>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.</strong></p>
                                <button>Shop Now</button>
                            </div>

                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className='Talk_about'> 
                    <h4>People talk about us</h4>
                    </div>
                    <Col sm="12" md="4">
                        <div className='stars'>
                            <i className="fa-solid fa-star" style={{ color: "var(--color-button)" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "var(--color-button)" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "var(--color-button)" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "var(--color-button)" }}></i>
                        </div>
                        <p>Happy with my purchase - It really helps my workout! Orders are dispatched fast and the website is very easy to use!</p>
                    </Col>
                    <Col sm="12" md="4">
                        <div className='stars'>
                            <i className="fa-solid fa-star" style={{ color: "var(--color-button)" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "var(--color-button)" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "var(--color-button)" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "var(--color-button)" }}></i>
                        </div>
                       <p>Happy with my purchase - It really helps my workout! Orders are dispatched fast and the website is very easy to use!</p>
                    </Col>
                    <Col sm="12" md="4">
                        <div className='stars'>
                            <i className="fa-solid fa-star" style={{ color: "var(--color-button)" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "var(--color-button)" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "var(--color-button)" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "var(--color-button)" }}></i>
                        </div>
                        <p>Happy with my purchase - It really helps my workout! Orders are dispatched fast and the website is very easy to use!</p>
                    </Col>
                    
                </Row>

            </Container>
            <Footer />

        </>
    )
}