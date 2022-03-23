import React from 'react';
import styled from 'styled-components';
import beautiful_girl from '../image/beautiful_girl.jpg';
import bags from '../image/bags.jpg';
import shoes from '../image/shoes.jpg';
import watches from '../image/watches.jpg';
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { Watch } from 'react-bootstrap-icons';




export default function CategorySection() {
    const taking = ()=>toast('you clicked me');

    


    return (
        <div style={{minHeight:'100vh'}}>
        <div className="container">
            <div className="row">
                <div className="col-md-6" >
                 
                  <Imag img={beautiful_girl} >
                    <Zoom left>
                     <Button onClick={taking}>Women</Button>
                     <ToastContainer />       
                </Zoom>
                  </Imag>

                </div>
                <div className="col-md-6">
                    <div className="row">

                    <div className="col-6">

                        <div className="col-12">

                <SmallImage img={bags}>
                  <Bounce right>
                    
                <Button>Acessories</Button>
                </Bounce>
                </SmallImage>
                        </div>
                <div className="col-12" style={{marginTop:'-40px'}}>

               <SmallImage img={shoes}>
                <Fade right>
               <Button>Footware</Button>
               </Fade>
               </SmallImage>
               </div>

                    </div>

                <div className="col-6" >
                 
                 <Imag img={watches}  >
                     <Roll left> 
                 <Button>Watches</Button>
                 </Roll>
                 </Imag>

               </div>
</div>

                </div>
      






            </div>


        </div>
      
      
        </div>
    )
}



const Imag = styled.div`
width:100%;
height:600px;
background-image:${props=>`url(${props.img})`};
background-position:center;
background-size:cover;
top:0;
left:0;
margin-top:calc(300px - 240px);
overflow:hidden;
display:flex;
align-items:flex-end;
justify-content:center;
&:hover{
cursor:pointer;



}
`;

const SmallImage = styled.div`
width:100%;
height:290px;
background-image:${props=>`url(${props.img})`};
background-position:center;
background-size:cover;
top:0;
left:0;
display:flex;
align-items:flex-end;
justify-content:center;
margin-top:calc(300px - 240px);
&:hover{
    cursor:pointer;
    
}

`;



const Button = styled.div`
width:150px;
height:40px;
background-color:${props=> props.color? props.color : '#ffffff'};
display:flex;
align-items:center;
justify-content:center;
color:black;
cursor:pointer;
font-size:13px;
transition:all 0.5s linear;
font-weight:bolder;
margin-bottom:10px;
&:hover{
    background-color:${props=>props.hoverColor? props.hoverColor : ''}
}

@media (max-width:900px){
width:120px;

}

`;
