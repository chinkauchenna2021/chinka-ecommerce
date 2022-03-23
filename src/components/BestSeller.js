import React from 'react';
import styled from 'styled-components';
import SlickSlider from './SlickSlider';

export default function BestSeller() {
    return (
        <div>
<div className="container">
   <div className="row" >
       <div className="col-12 d-flex justify-content-center align-items-center">
       <Spanning>

       <BodyTitle>
     <Title>Best Seller </Title>

        </BodyTitle>
      <Subtitle>Top sales in this week</Subtitle>
      </Spanning>
       </div>
      <div className="row">
           <SlickSlider />
      </div>


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


