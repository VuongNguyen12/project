import { Container } from 'reactstrap'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import './Account.css'
import insta6 from '../../img/insta6.png'
export default function Account() {
    return (
        <>
            <Header />
            <Container>
                <div className='account'>
                    <h4>Account</h4>
                    <div className='your_info'>
                        <form>

                            <div className='email_phone'>
                                <div className='email'>
                                    <label>Email</label><br />
                                    <input type='text' placeholder='Your email' />
                                </div>
                                <div className='phone'>
                                    <label>Phone</label><br />
                                    <input type='text' placeholder='Your phone' />
                                </div>
                            </div>
                            <div className='name'>
                                <label >Name</label><br />
                                <input name='Name' type='text' placeholder='Your name'></input>
                            </div>
                            <div className='your_image'>
                                <div className='text_image'>
                                    <h6>Your image</h6>
                                    <p>This photo will be displayed on your account</p>
                                </div>
                                <div className='account_image'>
                                    <img alt='account_img' src={insta6} />
                                    <div className='up_image'>
                                        <i class="fa-solid fa-file-arrow-up"></i>
                                        <h6>Click to upload</h6>
                                        <div className='text_up_image'>
                                            <p> SVG,PNG hoặc JPG(max 800*400px)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='your_address'>
                                    <label>Address</label><br />
                                    <input type='text' placeholder='Hồ Chí Minh' />
                                </div>
                        </form>
                    </div>
                </div>
            </Container>
            <Footer />
        </>
    )
}



