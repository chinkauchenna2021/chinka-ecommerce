import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import grid5_lady1 from '../image/grid_img/grid5_lady1.jpg';
import blog1 from '../image/grid_img/blog1.jpg';
import blog2 from '../image/grid_img/blog2.jpg';
import blog3 from '../image/grid_img/blog3.jpg';
// import grid1 from '../image/grid_img/grid1.jpg';
// import grid6_watch_black from '../image/grid_img/grid6_watch_black.jpg';
// import grid7_trouser_white from '../image/grid_img/grid7_trouser_white.jpg';
// import grid8_cap from '../image/grid_img/grid8_cap.png';
import styled from 'styled-components';

export default function BlogSection() {

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
        <div className="mb-5" style={{height:'100vh'}}>
            <BlogHolder>
                 <div className="container">
                     <div className="row">
                     <div className="col-12 d-flex justify-content-center align-items-center">
                         <Spanning>
                         <BodyTitle>
                           <Title>Latest From Blog</Title>

                           </BodyTitle>
                           <Subtitle>The freshest and most exciting news</Subtitle>
                           </Spanning>
    
                  </div>
 
                  <Carousel

swipeable={true}
//  draggable={false}
//  showDots={true}
//  responsive={responsive}
ssr={true} // means to render carousel on server-side.
 infinite={true}
 autoPlay={true}
//   autoPlaySpeed={10000}
//  keyBoardControl={true}
//  customTransition="all 7"
//    transitionDuration={5000}
//  containerClass="carousel-container"
//  removeArrowOnDeviceType={["tablet", "mobile"]}
   // dotListClass="custom-dot-list-style"
//  itemClass="carousel-item-padding-40-px"

responsive={responsive}

>
 <div>
     <ContainerHolder>
          <div className="card">
              <div className="card-header">
                 <Imagess  src={blog1}  />
               </div>
                 <div className="card-body">
                     <SliderTitle>Spring – Summer Trending 2020</SliderTitle>
                     <Dateholder>By adminon April 6, 2020</Dateholder>
                     <Description>
                     Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, ...


                     </Description>


                </div>
          </div>
     </ContainerHolder>
 </div>
 <div>
     
 <ContainerHolder>
          <div className="card">
              <div className="card-header">
                 <Imagess  src={blog2}  />
               </div>
                 <div className="card-body">
                     <SliderTitle>The Easiest Way to Break Out on Top</SliderTitle>
                     <Dateholder>By adminon April 6, 2020</Dateholder>
                     <Description>
                     Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, ...

                     </Description>


                </div>
          </div>
     </ContainerHolder>  
     
     
   </div>
 <div>
 <ContainerHolder>
          <div className="card">
              <div className="card-header">
                 <Imagess  src={blog3}  />
               </div>
                 <div className="card-body">
                     <SliderTitle>Style for couple in Weeding season</SliderTitle>
                     <Dateholder>By adminon April 6, 2020</Dateholder>
                     <Description>
                     Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, ...

                     </Description>

                </div>
          </div>
     </ContainerHolder>
 </div>

</Carousel>      


                     </div>
                 </div>
            </BlogHolder>
        </div>
    )
}


const BlogHolder = styled.div`
width:100%;
min-height:100vh;
margin-bottom:50px;




`;



const Subtitle = styled.div`
font-size:12px;
margin-top:10px;

`;


const Title = styled.div`
margin-left:30px;
margin-right:30px;
font-size:20px;
font-weight:bolder;
text-transform:uppercase;
@media(max-width:768px){
margin-left:10px;
margin-right:10px;


}


span{



}

`;
const Spanning = styled.div`
width:50%;
height:180px;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
@media(max-width:768px){
  width:100%;
  margin-bottom:-10px;


}



`;
const BodyTitle = styled.div`
 width:100%;
 height:20%;
 display:flex;
 align-items:center;
 justify-content:center;

 
 &::before{
  content:'';
  display:flex;
  width:50px;
  height:1.5px;
  background-color:black;
  margin-left:0px;

  @media (max-width:900px){
    width:30px;


  }

 }

 &::after{
    content:'';
    display:flex;
    width:50px;
    height:1.5px;
    background-color:black;

    @media (max-width:900px){
        width:30px;
    
    
      }

 }



`;



const Dateholder = styled.div`
font-size:14px;
font-weight:400;
width:100%;
display:flex;
justify-content:flex-start;
align-items:center;






`;









const Description = styled.div`
width:100%;
min-height:100px;
font-size:16px;
font-weight:600px;
color:silver;
text-align:left;
display:flex;
align-items:center;







`;






const SliderTitle = styled.div`
   font-weight:20px;
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


`;