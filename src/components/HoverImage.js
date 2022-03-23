import React from 'react';
import styled from 'styled-components'
import SingleImage from './SingleImage';
import grid5_lady1 from '../image/grid_img/grid5_lady1.jpg';
import grid2 from '../image/grid_img/grid2.jpg';
import grid3 from '../image/grid_img/grid3.jpg';
import grid4 from '../image/grid_img/grid4.jpg';
import grid1 from '../image/grid_img/grid1.jpg';
import grid6_watch_black from '../image/grid_img/grid6_watch_black.jpg';
import grid7_trouser_white from '../image/grid_img/grid7_trouser_white.jpg';
import grid8_cap from '../image/grid_img/grid8_cap.png';

export default function HoverImage() {
    return (
        <div className="container" style={{minHeight:'100vh'}}>
            <div className="row">
                 <div className="col-12 d-flex justify-content-center align-items-center">
                   
                     {/* title */}
                     <Spanning>

                      <BodyTitle>
                           <Title>Trending </Title>

                      </BodyTitle>
                      <Subtitle>Top view in this week</Subtitle>
                   </Spanning>
                 </div>
        <div className="row">
            
              <div className="col-md-3 col-6" >
                  <SingleImage producttitle="Mercury Tee" productprice="$68.00" image={grid5_lady1} distitle="New" color="#32E875"/>

              </div>
              <div className="col-md-3 col-6">

                <SingleImage image={grid2} display=""  producttitle="Ridley High Waist" productprice="$36.00" productcolor=""/>

              </div>
              <div className="col-md-3 col-6">

                   <SingleImage display="none"  image={grid3} producttitle="Blush Beanie" productprice="$15.00"/>

              </div>
              <div className="col-md-3 col-6">

                   <SingleImage image={grid4} producttitle="Cluse La Boheme Rose Gold" productprice="$25.00 – $45.00"/>

              </div>
                          
              <div className="col-md-3 col-6">
                  <SingleImage image={grid6_watch_black} producttitle="La Bohème Rose Gold" productprice="$60.00 $40.00
"/>

              </div>
              <div className="col-md-3 col-6">

                <SingleImage image={grid1} producttitle="Analogue Resin Strap" productprice="$30.00" />

              </div>
              <div className="col-md-3 col-6">

                   <SingleImage image={grid7_trouser_white} producttitle="Cream Women Pants" productprice="$35.00" />

              </div>
              <div className="col-md-3 col-6">

                   <SingleImage image={grid8_cap} producttitle="Black Mountain Hat" productprice="$50.00
"/>

              </div>
              {/* <div className="col-md-3">
                  <SingleImage />

              </div> */}
              {/* <div className="col-md-3">

                <SingleImage />

              </div>
              <div className="col-md-3">

                   <SingleImage />

              </div>
              <div className="col-md-3">

                   <SingleImage />

              </div> */}
            
            {/* grid level */}
            
            
            
            
            
            
            </div> 







            </div>
         



            
        </div>
    )
}


const Subtitle = styled.div`
font-size:12px;
margin-top:-4px;

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