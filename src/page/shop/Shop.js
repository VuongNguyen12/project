import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import './Shop.css'
import { Col, Container, Row } from 'reactstrap'
import product_2 from "../../img/product_2.png"
import product_3 from "../../img/product_3.png"
import product_4 from "../../img/product_4.png"
import product_5 from "../../img/product_5.png"
import product_6 from "../../img/product_6.png"
import product_7 from "../../img/product_7.png"
import product_8 from "../../img/product_8.png"
import product_9 from "../../img/product_9.png"
import product_10 from "../../img/product_10.png"
import Product from '../../components/product/Product'
import Ralated_product from '../../components/Ralated_product/Ralated_product'
import { useEffect, useState } from 'react'
import axios from 'axios'
export default function Shop() {
    const [cartCount, setCartCount] = useState(0);

    const [weight, setWeight] = useState(15);
    const changeWeight = (event) => {
        setWeight(event.target.value);
    };
    const [price, setPrice] = useState(90);
    const changePrice = (event) => {
        setPrice(event.target.value);
    };

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
        <div className='Shop'>
          <Header cartCount={cartCount} />
            <Container>
                <Row style={{marginRight:"0px"}}>
                    <h1>Recent products</h1>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure</p>
                    <div className='Shop_main'>

                        <div className='Shop_left'>
                            <div className='Shop_search' >
                                <input type='text' placeholder='Search products...' />
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <div className='list category'>
                                <h6>Product Category</h6>
                                <ul>
                                    <li><a>Dumbells</a></li>
                                    <li><a>Health Monitoring</a></li>
                                    <li><a>Health Food</a></li>
                                    <li><a>Sports Nutrition</a></li>
                                    <li><a>Sports Sneakers</a></li>
                                </ul>

                            </div>
                            <div className='list weight'>
                                <h6>Weight</h6>
                                <p>0lb - {weight}lb</p>
                                <input
                                    type='range'
                                    onChange={changeWeight}
                                    min={1}
                                    max={15}
                                    step={1}
                                    value={weight}
                                    className='custom-slider'>
                                </input>
                            </div>
                            <div className='list caplets'>
                                <h6>Caplets</h6>
                                <ul>
                                    <li><a>Blend</a></li>
                                    <li><a>Hybrid</a></li>
                                    <li><a>Indica Dominants</a></li>
                                    <li><a>Saviva Dominants</a></li>

                                </ul>

                            </div>
                            <div className='list price'>
                                <h6>Price</h6>
                                <p>23mg/unit - {price}mg/unit</p>
                                <input
                                    type='range'
                                    onChange={changePrice}
                                    min={23}
                                    max={90}
                                    step={1}
                                    value={price}
                                    className='custom-slider1'>
                                </input>
                            </div>
                            <div>
                            <h6>Ralated Products</h6>
                            {data.slice(0, 3).map((product, index) => (
                                    (                                    
                                            <Ralated_product key={index} name={product.name} newprice={product.Newprice} oldprice={product.Oldprice} product={product.img} img={arr[index]} /*img={arr[Math.floor(Math.random() *(10))+ 1 ] }*/ />
                                    )
                                ))
                                }
                            </div>
                           
                            
                        </div>



                        <div className='Shop_right'>
                            <div className='Shop_product'>
                                {data.slice(0, 9).map((product, index) => (
                                    (                                    
                                            <Product key={index} name={product.name} newprice={product.Newprice} oldprice={product.Oldprice} product={product.img} img={arr[index]} /*img={arr[Math.floor(Math.random() *(10))+ 1 ] }*/ />
                                    )
                                ))
                                }
                            </div>

                        </div>
                    </div>




                </Row>
            </Container>



            <Footer />
        </div>
    )
}