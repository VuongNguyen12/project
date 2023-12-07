import { Container } from 'reactstrap'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import './Page404.css'
import { Link } from 'react-router-dom'
export default function Page404(){
    return(
        <>
        <Header/>
        <Container>
        <div className='Page404'>
            <div className='Page404_text'>
            <h1>404</h1>
                  <h2>The page you're looking for doesn't exist</h2>
            </div>
                 
                <button><Link to='/'>BACK TO HOME</Link></button>
        </div>
        </Container>
        <Footer/>
        </>
    )
}