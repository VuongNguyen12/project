import { Container } from 'reactstrap';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './BlogDetail.css';
import blog1 from '../../img/blog1.jpg';
import blog2 from '../../img/blog2.jpg';
import { useState } from 'react';
export default function BlogDetail() {
    const [cartCount, setCartCount] = useState(0);
    return (
        <>
          <Header cartCount={cartCount} />
            <Container>
                <div className='Blog'>
                    <h1>How to Smoke MonRocks, Cannabis</h1>
                    <img alt='blog1' src={blog1} />
                    <p>We were recently contacted by a world-renowned interior designer as their client required a narrow treadmill for their home gym. Trying to find a slim treadmill that is compact, sturdy and with an attractive design can seem daunting.</p>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                    <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues n to you how all this mistaken idea or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
                    <img alt='blog2' src={blog2} />
                    <p>We were recently contacted by a world-renowned interior designer as their client required a narrow treadmill for their home gym. Trying to find a slim treadmill that is compact, sturdy and with an attractive design can seem daunting.</p>
                    <h5>To take a trivial example</h5>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness</p>
                    <div className='comnent'>
                        <p>But I must explain to you how this mistaken idea the ouncing pleasure and praising pain was born and I will give.</p>
                        <i class="fa-solid fa-quote-right" style={{ color: '#FF0505' }}></i>
                    </div>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness</p>
                    <h5>Text with images</h5>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the the master-builder of human happiness</p>
                    <ul>
                        <li>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment</li>
                        <li>That they cannot foresee the pain and trouble that are bound to ensue equal blame belongs to those who fail in their duty through weakness.</li>
                        <li>Which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish</li>
                    </ul>
                    <div className='blog_post'>
                    Share this post:
                    <div className='icons'>
                                    <a className='fb' href='#'><i className="fa-brands fa-facebook-f"></i></a>
                                    <a className='tw' href='#'><i className="fa-brands fa-twitter"></i></a>
                                    <a className='yb' href='#'><i className="fa-brands fa-youtube"></i></a>
                                    <a className='ins' href='#'><i className="fa-brands fa-instagram"></i></a>
                                </div>
                    </div>
                </div>
            </Container>

            <Footer />
        </>
    )
}