import './Product.css'
import product_1 from "../../img/product_1.png"
import product_11 from"../../img/product_11.png"
import product_2 from "../../img/product_2.png"
import product_3 from "../../img/product_3.png"
import {  Col, Container, Row } from 'reactstrap'
export default function Product(){
    return(
        <div>
            <Container>
             <Row>
                <Col sm="12" md="6" lg="3">
                    <div className='card'>
                   
                       
                        <div className='img_discount'>
                        <img className='img_info' alt='product_11' src={product_11}/>
                            <img className='img_info1'
                        style={{
                            width:"100%",
                            height:"100%"
                        }}
                            alt="product1"
                            src={product_1}
                        />
                          
                        
                          <h6>Sale</h6>
                        </div>
                            <div className='card_info'>
                               <div className='card_info1'>
                               <p> Fitness Nictric Pre-Shock</p> 
                              <p> $59.00 - <span className='discount'>$32.50</span></p>
                            <div className='stars'>
                            <i class="fa-solid fa-star" style={{color:"var(--color-button)"}}></i>
                            <i class="fa-solid fa-star" style={{color:"var(--color-button)"}}></i>
                            <i class="fa-solid fa-star" style={{color:"var(--color-button)"}}></i>
                            <i class="fa-solid fa-star" style={{color:"var(--color-button)"}}></i>
                            </div>
                               </div>
                               <button className='button'>SELECT OPTIONS</button>
                            </div>
                           
                        </div>
                            
                    
                </Col>

                <Col sm="12" md="6" lg="3">
                    <div className='card'>
                   
                       
                        <div className='img_discount'>
                        <img className='img_info' alt='product_11' src={product_11}/>
                            <img className='img_info1'
                        style={{
                            width:"100%",
                            height:"100%"
                        }}
                            alt="product1"
                            src={product_2}
                        />
                          
                        
                          <h6>Sale</h6>
                        </div>
                            <div className='card_info'>
                               <div className='card_info1'>
                               <p>Wokout Powder Fruit</p> 
                              <p> $56.00 - <span className='discount'>$38.00</span></p>
                            <div className='stars'>
                            <i class="fa-solid fa-star" style={{color:"var(--color-button)"}}></i>
                            <i class="fa-solid fa-star" style={{color:"var(--color-button)"}}></i>
                            <i class="fa-solid fa-star" style={{color:"var(--color-button)"}}></i>
                            <i class="fa-solid fa-star" style={{color:"var(--color-button)"}}></i>
                            </div>
                               </div>
                               <button className='button'>ADD TO CART</button>
                            </div>
                           
                        </div>
                            
                    
                </Col>

                <Col sm="12" md="6" lg="3">
                    <div className='card'>
                   
                       
                        <div className='img_discount'>
                        <img className='img_info' alt='product_11' src={product_11}/>
                            <img className='img_info1'
                        style={{
                            width:"100%",
                            height:"100%"
                        }}
                            alt="product1"
                            src={product_1}
                        />
                          
                        
                          <h6>Sale</h6>
                        </div>
                            <div className='card_info'>
                               <div className='card_info1'>
                               <p> Night Time Recovery</p> 
                              <p> $44.00 - <span className='discount'>$29.00</span></p>
                            <div className='stars'>
                            <i class="fa-solid fa-star" style={{color:"var(--color-button)"}}></i>
                            <i class="fa-solid fa-star" style={{color:"var(--color-button)"}}></i>
                            <i class="fa-solid fa-star" style={{color:"var(--color-button)"}}></i>
                            <i class="fa-solid fa-star" style={{color:"var(--color-button)"}}></i>
                            </div>
                               </div>
                               <button className='button'>SELECT OPTIONS</button>
                            </div>
                           
                        </div>
                            
                    
                </Col>

                <Col sm="12" md="6" lg="3">
                    <div className='card'>
                   
                       
                        <div className='img_discount'>
                        <img className='img_info' alt='product_11' src={product_11}/>
                            <img className='img_info1'
                        style={{
                            width:"100%",
                            height:"100%"
                        }}
                            alt="product1"
                            src={product_3}
                        />
                          
                        
                          <h6>Sale</h6>
                        </div>
                            <div className='card_info'>
                               <div className='card_info1'>
                               <p>Health lz fitness Gladiator</p> 
                              <p> $59.00 - <span className='discount'>$32.50</span></p>
                            <div className='stars'>
                            <i class="fa-solid fa-star" style={{color:"var(--color-button)"}}></i>
                            <i class="fa-solid fa-star" style={{color:"var(--color-button)"}}></i>
                            <i class="fa-solid fa-star" style={{color:"var(--color-button)"}}></i>
                            <i class="fa-solid fa-star" style={{color:"var(--color-button)"}}></i>
                            </div>
                               </div>
                               <button className='button'>ADD TO CART</button>
                            </div>
                           
                        </div>
                            
                    
                </Col>
               
            </Row>
            </Container>
        </div>
    )
}