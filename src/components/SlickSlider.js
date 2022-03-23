import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import grid5_lady1 from '../image/grid_img/grid5_lady1.jpg';
import grid2 from '../image/grid_img/grid2.jpg';
import grid3 from '../image/grid_img/grid3.jpg';
import grid4 from '../image/grid_img/grid4.jpg';
import grid1 from '../image/grid_img/grid1.jpg';
import grid6_watch_black from '../image/grid_img/grid6_watch_black.jpg';
import grid7_trouser_white from '../image/grid_img/grid7_trouser_white.jpg';
import grid8_cap from '../image/grid_img/grid8_cap.png';
import styled from 'styled-components';
export default function SlickSlider() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (         
         <div>
<Carousel
 swipeable={true}
//  draggable={false}
//  showDots={true}
//  responsive={responsive}
 ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
//   autoPlaySpeed={10000}
 keyBoardControl={true}
//  customTransition="all 7"
//    transitionDuration={5000}
//  containerClass="carousel-container"
 removeArrowOnDeviceType={["tablet", "mobile"]}
    // dotListClass="custom-dot-list-style"
//  itemClass="carousel-item-padding-40-px"

responsive={responsive}

>
  <div>
      <ContainerHolder>
           <div className="card">
               <div className="card-header">
                  <Imagess  src={grid1}  />
                </div>
                  <div className="card-body">
                      <SliderTitle>Analogue Resin Strap</SliderTitle>
                      <Price><Discount>$501.20</Discount><OriginalPrice>$120.13</OriginalPrice></Price>

                 </div>
           </div>
      </ContainerHolder>
  </div>
  <div>
      
  <ContainerHolder>
           <div className="card">
               <div className="card-header">
                  <Imagess  src={grid2}  />
                </div>
                  <div className="card-body">
                      <SliderTitle>Analogue Resin Strap</SliderTitle>
                      <Price><Discount>$126.20</Discount><OriginalPrice>$62.13</OriginalPrice></Price>

                 </div>
           </div>
      </ContainerHolder>  
      
      
    </div>
  <div >
  <ContainerHolder>
           <div className="card">
               <div className="card-header">
                  <Imagess  src={grid3}  />
                </div>
                  <div className="card-body">
                      <SliderTitle>Analogue Resin Strap</SliderTitle>
                      <Price><Discount>$100.20</Discount><OriginalPrice>$42.13</OriginalPrice></Price>

                 </div>
           </div>
      </ContainerHolder>
  </div>
  <div>
  <ContainerHolder>
           <div className="card">
               <div className="card-header">
                  <Imagess  src={grid4}  />
                </div>
                  <div className="card-body">
                      <SliderTitle>Analogue Resin Strap</SliderTitle>
                      <Price><Discount>$60.20</Discount><OriginalPrice>$20.20</OriginalPrice></Price>

                 </div>
           </div>
      </ContainerHolder>





  </div>
  <div>
  <ContainerHolder>
           <div className="card">
               <div className="card-header">
                  <Imagess  src={grid6_watch_black} style={{height:'400px'}} />
                </div>
                  <div className="card-body">
                      <SliderTitle>Analogue Resin Strap</SliderTitle>
                      <Price><Discount>$92.20</Discount><OriginalPrice>$13.13</OriginalPrice></Price>

                 </div>
           </div>
      </ContainerHolder>





  </div>
  <div>
  <ContainerHolder>
           <div className="card mb-5">
               <div className="card-header">
                  <Imagess  src={grid7_trouser_white}  />
                </div>
                  <div className="card-body">
                      <SliderTitle>Analogue Resin Strap</SliderTitle>
                      <Price><Discount>$121.20</Discount><OriginalPrice>$51.10</OriginalPrice></Price>

                 </div>
           </div>
      </ContainerHolder>




  </div>
  <div>
  <ContainerHolder>
           <div className="card">
               <div className="card-header">
                  <Imagess  src={grid8_cap}  />
                </div>
                  <div className="card-body">
                      <SliderTitle>Analogue Resin Strap</SliderTitle>
                      <Price><Discount>$1620.20</Discount><OriginalPrice>$1231.13</OriginalPrice></Price>

                 </div>
           </div>
      </ContainerHolder>




  </div>
</Carousel>      
        </div>
    );
}
const Price = styled.div`
width:100%;
display:flex;
height:30px;

`;
const Discount = styled.div`
margin-right:20px;
text-decoration:line-through;


`;
const OriginalPrice = styled.div`
font-size:25px;
font-weight:bold;

`;
















const SliderTitle = styled.div`
   font-weight:19px;
   font-weight:bolder;
   width:100%;
   height:20px;
   display:flex;
   align-items:center;
   justify-content:flex-start;
   margin-bottom:10px;
   &:hover{
     color:#a0b6f7;

   }


`;

const Imagess = styled.img`
  width:100%;
  height:100%; 

`;

const ContainerHolder = styled.div`
width:100%;
height:100%;
// margin:10px auto;


`;