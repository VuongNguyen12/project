import { useState } from 'react';
import { Carousel, CarouselControl, CarouselIndicators, CarouselItem, Col, Container, Row } from 'reactstrap';
import home_img from "../../img/home_img.png"
import './Banner.css'
import energy from"../../img/energy.png"
import power from"../../img/power.png"
import health from"../../img/health.png"
//Carousel
const items = [
    {
      src: 'https://ld-wp73.template-help.com/tf/demo_biona/biona_demo_v1/wp-content/uploads/2021/05/slide2-min.png',
      altText: 'HELLO',
      caption: 'Slide 1',
      key: 1,
    },
    {
      src: 'https://ld-wp73.template-help.com/tf/demo_biona/biona_demo_v1/wp-content/uploads/2021/05/home-slide-min.png',
      altText: 'Slide 2',
      caption: 'Slide 2',
      key: 2,
    },
  ];
  
export default function Banner1(){
     //carousel
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });
    return(
        <>
         <div className='banner'>
          <div className='banner_left'>
                <h1><span>BOOST</span> your imnune system today</h1>
                <button>Shop Now</button>
              </div>
              <div className='banner_right'>
                <img className='imgs' alt='image_banner' src={home_img} />
              </div>
              <div className='banner2'>
              
              <div  className='col 1'>
                <img style={{width:"44px"}} alt="energy" src={energy}/>
                <h3>Crazy energy</h3>
                <p>But I must explain to you how all this mistaken idea pleasure</p>
                <i class="fa-solid fa-arrow-right-long"></i>
              </div>
              < div className='col 2'>
                <img style={{width:"44px"}} alt='power' src={power}/>
                <h3>Maximum power</h3>
                <p>But I must explain to you how all this mistaken idea pleasure</p>
                <i class="fa-solid fa-arrow-right-long"></i>
              </div>
              <div className='col 3'>
              <img style={{width:"44px"}} alt='health' src={health}/>
                <h3>Quality health</h3>
                <p>But I must explain to you how all this mistaken idea pleasure</p>
                <i class="fa-solid fa-arrow-right-long"></i>
              </div>
              </div>
              <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
          >
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
            />
            
             </Carousel>  
             
             </div>
                  
       
        
        </>
    )
}