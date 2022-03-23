import React from 'react';
import styled from 'styled-components';
import Buttons from './Buttons';

export default function ZoomImage({height,img,buttonTitle}) {
    return (
        <div>
          <Zoomer height={height} img={img}>

            <Buttons  title={buttonTitle} color="white" style={{color:'gray'}}/>

          </Zoomer>


            
        </div>
    )
}


const Zoomer = styled.div`
 width:100%;
 height:${props=>props.height? props.height : '100%'};
 background-image:${props=> `url(${props.img})`};
 background-size:cover;
 background-position:center;
 margin-top:200px;

 &:hover{
   tranform:scale(1.08);

 }
 
`;