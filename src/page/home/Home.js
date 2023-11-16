import './Home.css'
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Banner1 from "../../components/banner/Banner1"
import Products from "../../components/products/Products"
import img1 from '../../img/img1.png'
import img2 from '../../img/img2.png'
import img5 from '../../img/img5.png'
import blog1 from '../../img/blog1.png'
import blog2 from '../../img/blog2.png'
import blog3 from '../../img/blog3.png'
import insta1 from '../../img/insta1.png'
import insta2 from '../../img/insta2.png'
import insta3 from '../../img/insta3.png'
import insta4 from '../../img/insta4.png'
import insta5 from '../../img/insta5.png'
import insta6 from '../../img/insta6.png'
import insta7 from '../../img/insta7.png'
import insta8 from '../../img/insta8.png'

import logo1 from '../../img/logo1.png'
import logo2 from '../../img/logo2.png'
import logo3 from '../../img/logo3.png'
import logo4 from '../../img/logo4.png'
import { Carousel, CarouselControl, CarouselIndicators, CarouselItem, Col, Container, Row } from "reactstrap"
import { useState } from 'react'

export default function Home() {





      return (
            <>

                  <Header />
                  <Banner1 />
                  <Products />
                  <div className="policy">
                        <h1>30-day Money-Back Guarantee</h1>
                        <p>If you are not 100% satisfied, tell us within 30 days, and get your money back.</p>
                        <div className='policy1'>
                              <div className='colum box1'>
                                    <img alt='img_policy1' src={img1} />
                                    <h4>Free Return In Reasonable Days</h4>
                              </div>
                              <div className='colum box2'>
                                    <img alt='img_policy2' src={img2} />
                                    <h4>Free Shipping delivery US Only</h4>
                              </div>
                              <div className='colum box3'>
                                    <img alt='img_policy' src={img5} />
                                    <h4>Secure Payment Gateway</h4>
                              </div>
                        </div>

                  </div>
                  <div className='Actual'>
                        <h1>Actual news</h1>
                        <p>Looking for something new? Get inspired with our recommended collections</p>
                        <div className='Actual1'>
                              <div className='cardview card1'>
                                    <img alt='img_blog1' src={blog1} />
                                    <div className='blog_info'>
                                          <h3> <a href='#'>How to Smoke MonRocks, Cannabis</a></h3>
                                          <p>We were recently contacted by a world-renowned interior designer as their client required a narrow…</p>
                                          <button>READ MORE
                                                <i class="fa-solid fa-arrow-right-long"></i>
                                          </button>
                                    </div>

                              </div>
                              <div className='cardview card2'>
                                    <img alt='img_blog2' src={blog2} />
                                    <div className='blog_info'>
                                          <h3> <a href='#'>Slim & Sleek: Top 10 Treadmills to fit into Narrow Spaces </a></h3>
                                          <p>We were recently contacted by a world-renowned interior designer as their client required a narrow…</p>
                                          <button>READ MORE
                                                <i class="fa-solid fa-arrow-right-long"></i>
                                          </button>
                                    </div>
                              </div>
                              <div className='cardview card3'>
                                    <img alt='img_blog3' src={blog3} />
                                    <div className='blog_info'>
                                          <h3> <a href='#'>Tips for caring and maintaining your wood floor </a></h3>
                                          <p>We were recently contacted by a world-renowned interior designer as their client required a narrow…</p>
                                          <button>READ MORE
                                                <i class="fa-solid fa-arrow-right-long"></i>
                                          </button>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className="instagram">
                        <div className='contain1 row1'>
                              <div className='insta image1'>
                                    <img alt='insta_img1' src={insta1} />
                                    <div class="middle">
                                          <i class="fa-solid fa-magnifying-glass" style={{ fontSize: "24px" }}></i>
                                    </div>
                              </div>
                              <div className='insta image2'>
                                    <img alt='insta_img2' src={insta2} />
                                    <div class="middle">
                                          <i class="fa-solid fa-magnifying-glass" style={{ fontSize: "24px" }}></i>
                                    </div>
                              </div>
                              <div className='insta image3'>
                                    <img alt='insta_img3' src={insta3} />
                                    <div class="middle">
                                          <i class="fa-solid fa-magnifying-glass" style={{ fontSize: "24px" }}></i>
                                    </div>
                              </div>
                              <div className='insta image4'>
                                    <img alt='insta_img4' src={insta4} />
                                    <div class="middle">
                                          <i class="fa-solid fa-magnifying-glass" style={{ fontSize: "24px" }}></i>
                                    </div>
                              </div>
                        </div>
                        <div className='contain1 row2'>
                              <div className='insta image5'>
                                    <img alt='insta_img5' src={insta5} />
                                    <div class="middle">
                                          <i class="fa-solid fa-magnifying-glass" style={{ fontSize: "24px" }}></i>
                                    </div>
                              </div>
                              <div className='insta image6'>
                                    <img alt='insta_img6' src={insta6} />
                                    <div class="middle">
                                          <i class="fa-solid fa-magnifying-glass" style={{ fontSize: "24px" }}></i>
                                    </div>
                              </div>
                              <div className='insta image7'>
                                    <img alt='insta_img7' src={insta7} />
                                    <div class="middle">
                                          <i class="fa-solid fa-magnifying-glass" style={{ fontSize: "24px" }}></i>
                                    </div>
                              </div>
                              <div className='insta image8'>
                                    <img alt='insta_img8' src={insta8} />
                                    <div class="middle">
                                          <i class="fa-solid fa-magnifying-glass" style={{ fontSize: "24px" }}></i>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <Footer />
            </>
      )
}