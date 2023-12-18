import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import'./Blogs.css'
import insta1 from '../../img/insta1.png'
import insta2 from '../../img/insta2.png'
import insta3 from '../../img/insta3.png'
import insta4 from '../../img/insta4.png'
import insta5 from '../../img/insta5.png'
import insta6 from '../../img/insta6.png'
import insta7 from '../../img/insta7.png'
import insta8 from '../../img/insta8.png'
import axios from 'axios';
import { useEffect, useState } from 'react'
import Blog from '../../components/blog/Blog'
import { Container, Row } from 'reactstrap'
export default function Blogs(){
  const [cartCount, setCartCount] = useState(0);

  const arr1=[insta1,insta2,insta3,insta4,insta5,insta6,insta7,insta8]
  const url = "https://654d2f7277200d6ba85a1b89.mockapi.io/Blogs";
    const [data1, setData1] = useState([]);
    useEffect(() => {
        axios.get(url)
          .then(function (response) {
            console.log(response);
            setData1(response.data);
          })
          .catch(function (error) {
            console.log(error);
          })
      }, [])
    return(
        <>
      <Header cartCount={cartCount} />
       <Container>
        <Row>
         
               <div className='Blogs_text'> <h1>Blog</h1></div> 
          {data1.slice(0,6).map((blog, index) => (
              (
                <Blog key={index} name1={blog.name} image={arr1[index]} />
              )
            ))
            }
         
          
        </Row>
       </Container>
        
        <Footer/>
        </>
    )
}