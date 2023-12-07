import { Container } from 'reactstrap';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './Contact.css';
export default function Contact() {
    return (
        <>
            <Header />
            <Container>
                <div className='text_contact'>
                    <h1>Local stores</h1>
                </div>
                <div className='contact_us'>
                    <div className='contact'>
                        <div className='contact_info'>
                            <form>
                                <div className='name'>
                                    <label >Name</label><br />
                                    <input name='Name' type='text' placeholder='Your first name'></input>
                                </div>

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
                                <div className='comment2'>
                                    <label>County/Region</label><br />
                                    <textarea placeholder='Type your message' rows="4" cols="70"></textarea>
                                </div>

                                <div className='check' style={{ margin: "20px 0px" }}> <input style={{ marginRight: "10px" }} type='checkbox'></input>
                                    Save my name ,email ,and website in this browers for the next time I coments
                                </div>
                                <button className='sub'>Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className='contact_address'>
                        <div className='address1'>
                            <h6>Address:</h6>
                            <p>2861 Fairview St Tallahassee, New</p>
                            <p>Mexico 86357 United States</p>
                        </div>
                        <div className='address1'>
                            <h6>Phones:</h6>
                            <p>+1 (406) 555-0120</p>
                            <p>+1 (406) 556-0122</p>
                        </div>
                        <div className='address1'>
                            <h6>Email Address:</h6>
                            <a href='#'>email@example.com</a>
                        </div>
                        <div className='address1'>
                            <h6>Working hours:</h6>
                            <p>Mon - Fri: 7am - 10pm</p>
                            <p>Sat - Sun: 8am - 8pm</p>
                        </div>

                    </div>
                </div>

            </Container>
            <Footer />
        </>

    )

}