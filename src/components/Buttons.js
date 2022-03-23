import React from 'react';
import styled from 'styled-components';

export default function Buttons({title,color,hoverColor}) {
    return (
        <div>
            <Button color={color} hoverColor={hoverColor}>{title}</Button>



            
        </div>
    )
}


const Button = styled.div`
width:150px;
height:40px;
background-color:${props=> props.color? props.color : 'rgba(0,0,0,0.8)'};
display:flex;
align-items:center;
justify-content:center;
color:#fff;
cursor:pointer;
transition:all 0.5s linear;
font-weight:bolder;
&:hover{
    background-color:${props=>props.hoverColor? props.hoverColor : ''}
}

@media (max-width:1000px){
   width:120px;


}

`;


