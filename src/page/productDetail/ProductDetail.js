import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './ProductDetail.css'
import product_1 from '../../img/product_1.png'
import product_11 from '../../img/product_11.png'
import { Col, Container, FormGroup, Input, Label, Row } from 'reactstrap'
import product_2 from "../../img/product_2.png"
import product_3 from "../../img/product_3.png"
import product_4 from "../../img/product_4.png"
import product_5 from "../../img/product_5.png"
import product_6 from "../../img/product_6.png"
import product_7 from "../../img/product_7.png"
import product_8 from "../../img/product_8.png"
import product_9 from "../../img/product_9.png"
import product_10 from "../../img/product_10.png"
import insta1 from "../../img/insta1.png"
import Product from '../../components/product/Product'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import ReactImageMagnify from 'react-image-magnify';
import { useParams } from 'react-router-dom'
export default function ProductDetail() {
    // const{id}=useParams();
    const url = "https://654d2f7277200d6ba85a1b89.mockapi.io/Products";
    //count_number
    const [count, setCount] = useState(0);
   
    const add=()=>{
            setCount(count+1);
    }
    const move=()=>{
        if(count>0){
            setCount(count -1);
        }
       
        }

    //fetch api
    const [data, setData] = useState([]);
    const arr = [product_2, product_3, product_4, product_5, product_6, product_7, product_8, product_9, product_10]
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
    //Click_image
    const [img_product,setImg_product]=useState(product_1)
    const picture=()=>{
        setImg_product(product_11)
        // console.log(img_product)
    }
    const picture1=()=>{
        setImg_product(product_1)
        // console.log(img_product)
    }
    //click_box1
    const navref = useRef();
    const handle_box = (x) => {
        navref.current.classList.remove("active1")
        navref.current.classList.remove("active2")
        navref.current.classList.remove("active3")
        navref.current.classList.toggle("active"+x)
    };
    //update_cart
    const [cartCount, setCartCount] = useState(0);

	const addToCartHandler = () => {
        setCartCount(0);
        	setCartCount((prevCartCount) => prevCartCount+count);
           
   	 };

    return (
        <div className='ProductDetail'>
            <Header cartCount={cartCount} />
            <Container style={{ marginTop: '50px' }}>
                <Row>
                    <Col sm="12" md="6">
                        <div className='productimg'>
                            <div className='imagedetail'>
                                <div style={{width:'80%'}}>
                                <ReactImageMagnify {...{
    smallImage: {
        alt: 'img1',
        isFluidWidth: true,
        src:img_product,
    },
    largeImage: {
        src:img_product,
        width: 1200,
        height: 1800,   
    },
    enlargedImagePosition:'over',
    lensStyle:{backgroundColor:'rgba(0,0,0,.6)'}
}} />       
                                </div>
                                <h6>Sale</h6>
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>

                            <div className='detailimg'>
                                <img  onClick={picture1} alt='img1' src={product_1} />
                                <img  onClick={picture} alt='img11' src={product_11} />
                            </div>

                        </div>

                    </Col>
                    <Col sm="12" md="6">
                        <div className='stars'>
                            <i className="fa-solid fa-star" style={{ color: "var(--color-button)" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "var(--color-button)" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "var(--color-button)" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "var(--color-button)" }}></i>
                            (1 customer review)
                        </div>
                        <h1>Night Time Recovery</h1>
                        $44.00 <span>$29.00</span>
                        <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms.</p>
                        <form>
                            <FormGroup>
                                <Label for="exampleSelect">
                                    Caplets
                                </Label>
                                <Input
                                    id="exampleSelect"
                                    name="select"
                                    type="select"
                                >
                                    <option>
                                        Choose an option
                                    </option>
                                    <option>
                                        Blend
                                    </option>
                                </Input>
                            </FormGroup>
                        </form>

                        <form >
                            <FormGroup>
                                <Label for="exampleSelect">
                                    Size
                                </Label>
                                <Input
                                    id="exampleSelect"
                                    name="select"
                                    type="select"
                                >
                                     <option>
                                        Choose an option
                                    </option>
                                    <option>
                                        1g
                                    </option>
                                    <option>
                                        3,5g
                                    </option>
                                    <option>
                                        7g
                                    </option>
                                </Input>
                            </FormGroup>
                        </form>
                        <div className='number_product'>
                            <div className='number'>
                                <div className='number_count'>
                                    {count}
                                </div>
                                <div className='icon_box' >
                                    <div className='icon_count'>
                                        <i onClick={add} class="fa-solid fa-caret-up" ></i>
                                        <i  onClick={move} class="fa-solid fa-caret-down"></i>
                                    </div>

                                </div>
                            </div>
                            <button onClick={addToCartHandler} className="add">
                                ADD TO CARD
	</button>
                        </div>
                        <p>Categories: Dumbbells, Health monitoring, Healthy food</p>
                        <p>Tags: Food, Gym, Sport</p>
                    </Col>
                </Row>
                <Row>
                    <div  ref={navref}   className='info_product1 active1'>
                        <div  className='info_box'>
                            <div onClick={ ()=>handle_box(1)} className='description'>Desscription</div>
                            <div  onClick={ ()=>handle_box(2)}className='description'>Additional information</div>
                            <div  onClick={ ()=>handle_box(3)}  className='description'>Review(1)</div>
                        </div>
                        <div className="box1">
                            <h6>Description</h6>
                            <p>But I must explain to you how all this mistaken idea of denouncing pleasure.
                                Nor again is there anyone who loves or pursues or desires to obtain pain of itself, but because occasionally circumstances.</p>
                            <ul>
                                <li>High quality</li>
                                <li>Non-irritating to the skin</li>
                                <li>Suitable for everyone</li>
                            </ul>
                        </div>
                        <div className="box2">
                            <h6>Additional information</h6>
                            <p>Weight:	1 kg</p>
                            <p>Caplets:  Blend, Hybrid, Indica Dominant, Saviva Dominant</p>
                            <p>Size	:  1g, 3.5g, 7g</p>
                        </div>
                        <div  className="box3">
                            <h6>1 review for Workout Powder Fruit</h6>
                            <div className='comment1'>
                                <img alt='image' src={insta1} />
                                <div className='comment1_1'>
                                    <div className='stars' style={{ fontSize: "12px" }}>
                                        <i className="fa-solid fa-star" style={{ color: "#fdbc32" }}></i>
                                        <i className="fa-solid fa-star" style={{ color: "#fdbc32" }}></i>
                                        <i className="fa-solid fa-star" style={{ color: "#fdbc32" }}></i>
                                        <i className="fa-solid fa-star" style={{ color: "#fdbc32" }}></i>
                                    </div>
                                    <p>admin - May 26, 2021</p>
                                    <p>Conse ctetur adipisicing elit, sed do eiusmodr incidid</p>
                                   
                                </div>

                            </div>
                            <h6>Add a review</h6>
                            <h6>Your email address will not be published. Required fields are marked *</h6>
                            <form>
                                <div className='Review'>
                                <label for='review'>Your Reviews</label><br/>
                                <textarea name='review'  rows="4" cols="50"></textarea>
                                </div>
                          
                                <div className='form_input'>
                                    <div className='name'>
                                    <label for='name'>Name</label><br/>
                                <input type='text' name='name' ></input>
                                    </div>
                                <div className='email'>
                                <label for='email'>Email</label><br/>
                                <input type='text' name='email' ></input>
                                </div>
                                                         
                                </div>
                                <div className='check' style={{margin:"20px 0px"}}> <input  style={{marginRight:"10px"}} type='checkbox'></input>
                                Save my name ,email ,and website in this browers for the next time I coments
                                </div>  
                                <button className='sub'>Submit</button>
                            </form>
                        </div>
                        
                    </div>
                </Row>

                <Row style={{ textAlign: "center", flexDirection: "row-reverse" }}>
                    <h1>Recent products</h1>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure</p>
                    {data.slice(0, 4).map((product, index) => (
                        (
                            <Product key={index} name={product.name} newprice={product.Newprice} oldprice={product.Oldprice} product={product.img} img={arr[index]} /*img={arr[Math.floor(Math.random() *(10))+ 1 ] }*/ />
                        )
                    ))
                    }
                </Row>
            </Container>
            <Footer />
        </div>


    )
}





