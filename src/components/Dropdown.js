import React from 'react'
import styled from 'styled-components'

export default function Dropdown({enter}) {
    return (
        <div>
            {console.log(enter)}
            <DropdownEffect>
            
            </DropdownEffect>


            
        </div>
    )
}


const DropdownEffect = styled.div`
   min-width:500px;
   min-height:300px;
   background-color:#fff;
   position:absolute;
   top:125px;
   left:20%;
   z-index:60;
   cursor:pointer;
   overflow-y:hidden;
   box-shadow:0px 0px 15px 0px gray;
   transform:translate(0px,22px);
 @media(max-width:768px){
    display:none;




 }





`;
