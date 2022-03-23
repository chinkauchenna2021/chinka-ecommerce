import React from 'react';
import styled from 'styled-components';
import * as Icons from 'react-bootstrap-icons';
import Bounce from 'react-reveal/Bounce'
import '../App.css';
// import { Icons } from 'react-toastify';

export default function SingleImage({image,display,distitle,color,sizes,producttitle,productprice,productcolor}) {
    return (
        <div>
            <Container>
            <HolderBody image={image} className="imagebody">
            
                <HoverContainer className="hovercontainer "  style={{flexDirection:'column'}}>
                 <TopHeight>

                    <Heartholder><Heart><Icons.Heart  size={25} color="#ffffff"></Icons.Heart></Heart></Heartholder>
                      <Rounded color={color} display={display}>{ distitle ? distitle : ''} </Rounded>
                  </TopHeight>
                         <HolderMain>
                            <Bounce bottom>    
                           <Button><small>Quick View</small> <span><Icons.Eye size={20} color="#ffffff"></Icons.Eye></span></Button>
                           </Bounce>
                           <Bounce top>    
                           <Button><small>Quick Shop</small><span><Icons.Cart4 size={20} color="#ffffff"></Icons.Cart4></span></Button>
                           </Bounce>

                         </HolderMain>
                         <Sizes>{sizes}</Sizes>
                </HoverContainer>
            </HolderBody>
            <Alltitle>
                      <Producttitle>{producttitle? producttitle : ''}</Producttitle>
                      <Productprice>{productprice? productprice : ''}</Productprice>
                      <Productcolor>{productcolor? productcolor : ''}</Productcolor>

            </Alltitle>
            </Container>
        </div>
    )
}

const Producttitle = styled.div`
margin-top:5px;
font-size:17px;
font-weight:500;

&:hover{
  color:#a0b6f7;
  cursor:pointer;

}


`;
const Productprice = styled.div`
font-size:14px;
color:gray;

`;
const Productcolor = styled.div``;
const Alltitle = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  text-align:left;


`;



const   Heartholder = styled.div`


`;
const Heart = styled.div`
width:20px;
height:20px;
color:green;
  
&:hover{
  cursor:pointer;
  animation:inc 0.4s linear infinite;

  @keyframes inc{
   from{
       transform:scale(1);
   }
to{
    transform:scale(1.3)
}
  }



}


`;



const Sizes = styled.div`
width:100%;
height:35px;
margin-top:100px;
display:flex;
align-items:center;
justify-content:space-around;
color:#ffffff;
font-size:20px;
font-weight:400;
`;


const HolderMain = styled.div`
width:100%;
height:140px;
margin-top:30px;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;

`;


const Button = styled.div`
width:150px;
height:40px;
border:1px solid #ffffff;
margin-top:10px;
border-radius:40px; 
display:flex;
align-items:center;
justify-content:center;
background-color:#ffffff;
cursor:pointer;
span{
  display:none;

}

&:hover span{
display:flex;

}

&:hover small{
  display:none;

}
&:hover {
    border:none;
  background-color:rgba(0,0,0,0.5);


}

@media (max-width:900px){
width:100px;

}



`;
const HoverContainer = styled.div`
width:100%;
height:100%;
background-color:rgba(179, 178, 178, 0.308);
display:none;


`;




const Container = styled.div`
width:100%;
height:435px;
margin-bottom:20px;
@media (max-width:900px){
 height:250px;
 margin-bottom:60px;
 margin-left:12px;
}
`;

const TopHeight = styled.div`
width:100%;
height:20%;
display:flex;
justify-content:space-between;
padding:15px 10px;
@media (max-width:900px){
   padding:10px 0px;



  }

`;



const Rounded = styled.div`
  height:50px;
  width:50px;
  border-radius:40px;
  display:${props=>props.display? props.display : 'none'};
  background-color:${props=>props.color? props.color : '#fff'};
  justify-content:center;
  align-items:center;
  color:#ffffff;
  

`;
const HolderBody = styled.div`
width:100%;
height:80%;
background-image:${props=> `url(${props.image})`};
background-position:center;
background-size:cover;
transition:all 0.6s linear;
&:hover div{
   display:flex;
   transition:all 0.6s linear;


}


`;
