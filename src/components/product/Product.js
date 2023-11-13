import './Product.css'
import product_11 from "../../img/product_11.png"
import { Col,} from 'reactstrap'
export default function Product(props) {
    return (
        
           
                    <Col sm="12" md="6" lg="3">
                        <div className='card'>
                            <div className='img_discount'>
                                <img className='img_info' alt='product_11' src={product_11} />
                                <img className='img_info1'
                                    style={{
                                        width: "100%",
                                        height: "100%"
                                    }}
                                    alt={props.product}
                                    src={props.img}
                                />
                                <h6>Sale</h6>
                            </div>
                            <div className='card_info'>
                                <div className='card_info1'>
                                    <p> {props.name}</p>
                                    <p> ${props.oldprice} - <span className='discount'>${props.newprice}</span></p>
                                    <div className='stars'>
                                        <i className="fa-solid fa-star" style={{ color: "var(--color-button)" }}></i>
                                        <i className="fa-solid fa-star" style={{ color: "var(--color-button)" }}></i>
                                        <i className="fa-solid fa-star" style={{ color: "var(--color-button)" }}></i>
                                        <i className="fa-solid fa-star" style={{ color: "var(--color-button)" }}></i>
                                    </div>
                                </div>
                                <button className='button'>SELECT OPTIONS</button>
                            </div>

                        </div>
                    </Col>
                    
                
       
    )
}