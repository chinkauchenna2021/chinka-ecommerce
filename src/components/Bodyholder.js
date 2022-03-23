import React from 'react';
import styled  from 'styled-components';
import Buttons from './Buttons';
import Bounce from 'react-reveal/Bounce';



export default function Bodyholder({fullpage}) {
    return (
        <div>
            <Holder fullpage={fullpage}>
                 <Titlebg>
                     <div style={{fontSize:20,fontWeight:'bold'}}>SUMMER COLLECTION</div>
                     <div style={{fontSize:50,fontWeight:'bolder'}}>HUGE SALES 70% OFF</div>
                     <div className="row mt-4">
                         <div className="col-6">
                             <Bounce left>
                            <Buttons title="Men" hoverColor="#cedef0"/>
                              </Bounce>
                             </div>

                             <div className="col-6">
                             <Bounce right>
                               <Buttons title="Women" hoverColor="#cedef0"/>
                               </Bounce>
                                 </div>

                         
                     </div>

                 </Titlebg>




            </Holder>

     





            
        </div>
    )
}

const Titlebg = styled.div`
height:40%;
width:40%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

@media (max-width:900px){
 width:95%;
 height:80%;


}



`;

const Holder = styled.div`
height:90vh;
width:100%;
background-image:${prop=> `url(${prop.fullpage})`};
background-size:cover;
background-position:center;
display:flex;
align-items:center;
justify-content:center;
transform:translate(0px,50px);
margin-top:-50px;
// transform:translateY(30px);

`;