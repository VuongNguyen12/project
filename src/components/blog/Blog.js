import { Col } from 'reactstrap';
import './Blog.css';
import { Link } from 'react-router-dom';
export default function Blog(props){
    return(
        <>
         
        <Col sm="12" md="6" lg="4">
            <div className='Blog1'>
            <img src={props.image}/>
            <div className='Blog_name'> 
            <strong>{props.name1}</strong>
            <p>We were recently contacted by a world-renowned interior designer as their...</p>
            <button className='Blog_button'><Link to='/BlogDetail'>READ MORE</Link></button>
            </div>
            </div>
        </Col>
        </>
    )
}