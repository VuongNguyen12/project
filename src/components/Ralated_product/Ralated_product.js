import'./Ralated_product.css';
export default function Ralated_product(props){
    return(
        <>
        <div className='Ralated_product'>
                                    <div className='Ralated_image'>
                                        <img alt='Rlt_img1' src={props.img} /> 
                                    </div>
                                    <div className='Ralated_info'>
                                          {props.name}
                                           <div className='stars' style={{fontSize:"12px"}}>
                                        <i className="fa-solid fa-star" style={{ color: "#fdbc32" }}></i>
                                        <i className="fa-solid fa-star" style={{ color: "#fdbc32" }}></i>
                                        <i className="fa-solid fa-star" style={{ color: "#fdbc32" }}></i>
                                        <i className="fa-solid fa-star" style={{ color: "#fdbc32" }}></i>
                                    </div>
                                    <p> ${props.oldprice} - <span className='discount'>${props.newprice}</span></p>
                                    </div> 
                            </div>
        </>
    )
}