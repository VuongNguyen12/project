import axios from 'axios';
import { useEffect, useState } from 'react';
import product_2 from "../../img/product_2.png"
import product_3 from "../../img/product_3.png"
import product_4 from "../../img/product_4.png"
import product_5 from "../../img/product_5.png"
import product_6 from "../../img/product_6.png"
import product_7 from "../../img/product_7.png"
import product_8 from "../../img/product_8.png"
import product_9 from "../../img/product_9.png"
import product_10 from "../../img/product_10.png"
import Product from '../product/Product';
import { Col, Container, Row } from 'reactstrap';
import "./Products.css";
export default function Products() {
  const [time, setTime] = useState('');
  const day = new Date().getYear(); 
  const hours = new Date().getHours(); 
  const min = new Date().getMinutes(); 
   const sec = new Date().getSeconds();
  useEffect(() => {  
    setTimeout(() => {
      setTime(
        day +':' + hours + ':' + min + ':' + sec
      );
    }, 1000);
    
  }, [time]);


  const [data, setData] = useState([]);
  const arr = [product_2, product_3, product_4, product_5, product_6, product_7, product_8, product_9, product_10]
  const url = "https://654d2f7277200d6ba85a1b89.mockapi.io/Products";
  useEffect(() => {
    axios.get(url)
      .then(function (response) {
        console.log(response);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])
  return (
    <>
      <Container>
        <Row style={{ textAlign: "center", flexDirection: "row-reverse" }}>
          <h1>Recent products</h1>
          <p>But I must explain to you how all this mistaken idea of denouncing pleasure</p>
          {data.slice(0, 6).map((product, index) => (
            (
              <Product key={index} name={product.name} newprice={product.Newprice} oldprice={product.Oldprice} product={product.img} img={arr[index]} /*img={arr[Math.floor(Math.random() *(10))+ 1 ] }*/ />
            )
          ))
          }    
         
          <Col className='product_left' md="12" lg="6">
            <div className='product_left1'>
              <h1>Eat <span style={{ color: "green" }}>Right</span> Move More</h1>
              <button>Shop Now</button>
            </div>

          </Col>
          <Col sm="12">
            <div className='product2'>
              <div className='product2_left'>
                <h1>
                  Eat right,Live strong.
                </h1>
                <p><strong>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.</strong></p>
                <button>Shop Now</button>
              </div>

            </div>
          </Col>
         
            <h1>Promotions of the week</h1>
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
            {data.slice(0,4).map((product, index) => (
              (
                <Product key={index} name={product.name} newprice={product.Newprice} oldprice={product.Oldprice} product={product.img} img={arr.slice(5,9)[index]} />
              )
            ))
            }
           
        </Row>
      </Container>
    </>
  )
}


