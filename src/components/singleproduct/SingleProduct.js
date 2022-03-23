import React from 'react';
import watches from '../../image/watches.jpg';
import styled from 'styled-components';
import * as Icons from 'react-bootstrap-icons';
import grid2 from '../../image/grid_img/grid2.jpg';
import grid3 from '../../image/grid_img/grid3.jpg';
import grid4 from '../../image/grid_img/grid4.jpg';
import grid1 from '../../image/grid_img/grid1.jpg';
import sponsor1 from '../../image/grid_img/grid8_cap.png';
import CartSidebar from './CartSidebar';

let notavaliable = 'okay';
export default function SingleProduct() {
    return (
        <div style={{minHeight:'100vh'}}>

        <div className="container">
            <div className="row">
                  <div className="col-12 d-flex justify-content-center align-items-center mb-4 mt-4">
                     <h5>Single Product</h5>

                  </div>



                 <div className="col-md-6 row">
                     <div className="col-3">
                     <Images img1={watches} opacity="1" styled={{height:'20%'}}>

                        </Images>
                          <Images img1={grid1} styled={{height:'20%'}}>

                          </Images>
                          <Images img1={grid2} styled={{height:'20%'}}>

                        </Images>
                        <Images img1={grid3} styled={{height:'20%'}}>

                         </Images>
                         <Images img1={grid4} styled={{height:'20%'}}>

                      </Images>


                         
                         
                         </div>   
                     <div className="col-9">
                         <div style={{height:"90vh",marginBottom:'40px'}}>
                            <ImageHolder img={watches} >
                                
                               <Button><Icons.ArrowsExpand size={30} color="#ffffff"></Icons.ArrowsExpand></Button>

                            </ImageHolder>




                         </div>
                         
                         
                         
                         </div>
                      


                 </div>
                <div className="col-md-6">
                        <div className="col-md-12" style={{height:'110vh'}}>
                                <div className="row">
                                     <div className="col-12">
                                      <Title>Ridley High Waist</Title>
                                       </div>
                                       <div className="col-12">
                                      <TitleHolder>
                                              <Span1>$36.00</Span1>

                                               <Span2><Icons.StarFill color="gold" size={20}></Icons.StarFill><Icons.StarFill color="gold" size={20}></Icons.StarFill><Icons.StarFill color="gold" size={20}></Icons.StarFill><Icons.StarFill color="gold" size={20}></Icons.StarFill><Icons.StarFill color="gold" size={20}></Icons.StarFill>(11 reviews)</Span2>
                                      </TitleHolder>
                                          </div>
                                          <div className="col-12">
                                          <TitleDescription>
                                          Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish sporty vibe.</TitleDescription>
                                             </div>
                                             <RadioSection>
                                                    <Size><span style={{marginRight:5}}>Size:</span>{'M'}</Size>
                                                    <Formgroup className="form-check-inline" style={{display:'flex'}}>
                                                        <div className="form-group d-flex " style={{marginRight:15}}>
                                                        <input className="form-check" name="size" type="radio" value="S"  style={{marginRight:8}}/>
                                                         <label className="form-label  ml-4 ">S</label>
                                                        </div>
                                                        <div className="form-group d-flex mr-4 " style={{marginRight:15}}>
                                                        <input className="form-check"name="size"  type="radio" value="M" style={{marginRight:8}} />
                                                        <label className="form-label mr-4" style={{textDecoration:"line-through"}}>M</label>
                                                        </div>
                                                        <div className="form-group d-flex" style={{marginRight:15}}>
                                                        <input className="form-check" name="size"  type="radio" value="L" style={{marginRight:8}}/>
                                                        <label className="form-label">L</label>
                                                        </div>
                                                    </Formgroup>
                                             </RadioSection>
                                             

                                              {notavaliable? 
                                             <Notavaliable className="mt-4 mb-4">
                                                   <hr />
                                                   <div className="row">
                                                       <div className="col-12">
                                                           <Nottitle>Notify me when this product is available:</Nottitle>
                                                       </div>    
                                                        <div className="col-12 mt-4">
                                                        <form>
                                                         <div className="form-group">
                                                              <label className="form-label label">Email Address*</label>
                                                                <input type="email" required className="form-control email" />
                                                            </div>
                                                            <div className="col-12 button-holder">
                                                               <button className="buttons">Email me when avaliable</button>
                                                            </div>
                                                         </form>

                                                        </div>


                                                   </div>

                                            </Notavaliable>
                               
                                            : ''  };




                                            <ButtonSections className="container-fluid" >
                                                <div className="row d-flex align-items-center justify-content-center">
                                                    <div className="col-4">
                                                    <SmallButton>
                                                          <Button1>-</Button1>
                                                          <Input inputMode="numeric" pattern="[0-9]*"  step="1" min="1" max="9999"  />
                                                          <Button2>{'+'}</Button2>                                                        
                                                    </SmallButton>
                                                    </div>
                                                    <div className="col-5">
                                                    <MiddleButton>{'ADD TO CART'}</MiddleButton>
                                                    </div>
                                                    <div className="col-2">
                                                     <IconsImage><Icons.Heart className="heart" color="silver" size={30}></Icons.Heart></IconsImage>
                                                      </div>
                                                </div>
                                            </ButtonSections>
                                            <div className="container">
                                                <div className="row">
                                               
                                                    <Sponsors src={sponsor1} />

                                                </div>


                                            </div>

                                         <ModelSection>
                                               <div className="container-fluid">
                                                     <div className="row">
                                                         <div className="col-3">
                                                             <Small  type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Size Guide</Small>
                                                          </div>
                                                          <div className="col-5">
                                                          <Small>Delievery & return</Small>
                                                             </div>
                                                             <div className="col-4">
                                                             <Small>Ask a Question</Small>
                                                             </div>
      

                                                    </div>



                                             {/* Model */}
                                            
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>


                        {/* end model */}







                                               </div>

                                         </ModelSection>


                                <SectionDetails>
                                    <div className="row">
                                        <Hoderind className="col-12">
                                          <small>SKU: {'N/A'}</small>
                                        </Hoderind>
                                        
                                        <Hoderind className="col-12">
                                            <Categories><bold>Categories :</bold><small>{'All, Best seller, Bottom, Dress, New Arrival, Tops, Women'}</small></Categories>
                                        </Hoderind>


                                        <Hoderind className="col-12">
                                          
                                         <Tags><bold>Tags :</bold><small>{'Color White, Color Black, Price $7-$50, Size L, Size M, Size S, Vendor Kalles, women'}</small></Tags>
                                        </Hoderind>





                                    </div>






                              </SectionDetails>




                                <SocialMedia>

                                        <SocialContent>
                                            <span>
                                               <Icons.Facebook size={20} className="icon"></Icons.Facebook>
                                            </span>
                                            <span>
                                               <Icons.Twitter size={20}  className="icon"></Icons.Twitter>
                                            </span>
                                            <span>
                                               <Icons.EnvelopeFill size={20}  className="icon"></Icons.EnvelopeFill>
                                            </span>
                                            <span>
                                               <Icons.Pinterest size={20}  className="icon"></Icons.Pinterest>
                                            </span>
                                            <span>
                                               <Icons.Whatsapp size={20}  className="icon"></Icons.Whatsapp>
                                            </span>
                                        </SocialContent>




                                </SocialMedia>








                                </div>

                        </div>
                </div>
            </div>    
        </div>    

     <CartSidebar />

        </div>
    )
}

const Nottitle = styled.div`
height:30px;
font-size:18px;
font-weight:bold;
width:100%;
text-align:left;

`;
const Notavaliable = styled.div`
height:220px;
.label{
width:100%;
display:flex;
align-items:center;
justify-content:flex-start;
color:gray;
font-size:16px;



}

.email{
   outline:none;
   &:focus{
    outline:0px;

   }


}




.button-holder{
width:100%;
display:flex;
justify-content:flex-start;
padding-top:20px;
margin-bottom:30px;

}

.buttons{
  width:50%;
  height:40px;
  border:none;
  background-color:transparent;
  border:0.2px solid silver;
  border-radius:20px;
  &:hover{
   cursor:pointer;
   color:#ffffff;
   background-color:#56cfe1;
   border:none;

  }


}

`;








const SocialMedia = styled.div`
width:100%;
height:150px;
display:flex;
align-items:center;
justify-content:center;
`;
const SocialContent = styled.div`
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;


span  {
  width:8%;
  cursor:pointer;
  transition:all 0.6s linear;
  &:hover > .icon{
    transition:all 0.6s linear;
    color:#56cfe1;
    transform:translateY(-10px);
   


  }
}


`;







const Categories = styled.div`
height:100%;
width:100%;
text-align:left;
font-size:17px;
bold{
 color:silver;
 font-weight:500;
 font-size:15px;

}
small{
    color:black;
    font-weight:600;
    margin-left:5px;
  }
`;
const Tags = styled.div`
height:100%;
width:100%;
text-align:left;
font-size:17px;
margin-top:10px;
bold{
    color:silver;
    font-weight:500;
    font-size:15px;
   
   }



small{
  color:black;
  font-weight:600;
  margin-left:5px;


}

`;




const Hoderind = styled.div`
  width:100%;
  height:45px;
  display:flex;
  align-items:center;




  justify-content:flex-start;


`;
const SectionDetails = styled.div`
 




`;




const Small =  styled.button`
 font-size:14px;
 display:flex;
 justify-content:flex-start;
 margin-top:10px;
 border:none;
 background-color:transparent;
 font-weight:700;
 cursor:pointer;
 &:hover{
color:#56cfe1;


 }
 

`;

const ModelSection = styled.div`



`;

const Sponsors = styled.img`
 height:65%;
 width:75%;
 margin-top:15px;


`;
const Button1 = styled.div`
width:35%;
height:100%;
border:0.5px solid silver;
border-right:none;
border-top-left-radius:25px;
border-bottom-left-radius:25px;
display:flex;
align-items:center;
justify-content:center;
font-size:40px;
font-weight:bold;
cursor:pointer;

&::selection{
    height:0px;
    width:0px;
    border-radius:10px;
  background-color:#fff;


}



&:hover{
    color:#56cfe1;
   
   }
`;
const Button2 = styled.div`
width:35%;
height:100%;
border:0.5px solid silver;
border-left:none;
border-top-right-radius:25px;
border-bottom-right-radius:25px;
display:flex;
justify-content:center;
font-size:30px;
font-weight:bold;
cursor:pointer;
&:hover{
 color:#56cfe1;

}

&::selection{
    height:0px;
    width:0px;
    border-radius:10px;
  background-color:#fff;

}

`;
const Input = styled.input`
width:30%;
height:100%;
border:0.5px solid silver;
border-left:none;
border-right:none;
outline:none;
display:flex;
align-items:center;
justify-content:center;
padding-left:10px;
font-size:20px;
font-weight:600;

`;

const SmallButton = styled.div`
width;100%;
height:50px;
display:flex;


`;
const MiddleButton = styled.div`
width:100%;
height:50px;
border-radius:30px;
background-color:#56cfe1;
color:#ffffff;
display:flex;
align-items:center;
justify-content:center;
animation:bigbutton 3s linear infinite;
animation-delay:20s;
cursor:pointer;
font-weight:600;
font-size:13px;
&:hover{
background-color:rgba(0,0,0,0.5);


}

@keyframes  bigbutton{
   0%{
     margin-left:0px
   }
   10%{
    margin-left:0px
  }
  20%{
    margin-left:0px
  }
  30%{
    margin-left:0px
  }
  35%{
      
      margin-left:-15px

  }
  40%{
      margin-left:15px
  }
  50%{
    margin-left:0px
}
60%{
      margin-left:0px
  }
  70%{
    margin-left:0px
  }
  80%{
    margin-left:0px
  }
  90%{
    margin-left:0px
  }
  100%{
    margin-left:0px
  }


}




`;
const IconsImage = styled.div`
width:50px;
height:50px;
border:0.2px solid gray;
border-radius:40px;
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;

&:hover .heart{
color:gold;
animation : heart 0.6s linear infinite;

@keyframes heart{
 from{
     transform:scale(1);
 }
 to{

    transform : scale(1.05);
 }


}



}
 

`;
const ButtonSections = styled.div`


`;


const Size = styled.div`
width:0%;
height:40%;
`;

const Formgroup = styled.div`
width:100%;
height:60%;
`;

const RadioSection = styled.div`
 width:100%;
 height:100px;
 display:flex;
 flex-direction:column;
 justify-content:flex-start;





`;


const Title = styled.div`
width:100%;
height:30px;
display:flex;
justify-content:flex-start;
font-size:18px;
font-weight:bold;


`;
const TitleHolder = styled.div`
width:100%;
height:70px;
display:flex;
justify-content:space-between;
align-items:center;


`;
const Span1 = styled.span`
font-size:23px;
font-weight:400;
color:gray;

`;
const Span2 = styled.span``;
const TitleDescription = styled.div`
width:100%;
height:100px;
text-align:left;
color:gray;
font-size:




`;





















const Images = styled.div`
  width:100%;
  height:100px;
  background-image:${props=>`url(${props.img1})`};
  background-size:cover;
  background-position:position;
  transform:translateX(-20px);
  margin-bottom:10px;
  filter:opacity(${props=>props.opacity? props.opacity:'0.4'});
  cursor:pointer;
//    &:hover{
//     filter: opacity(1);
//    }


`; 




const Button = styled.div`
   width:60px;
   height:60px;
   background-color:rgba(0,0,0,0.8);
   display:flex;
   justify-content:center;
   align-items:center;
   border-radius:40px;
   cursor:pointer;


`;
const ImageHolder = styled.div`
    width:100%;
    height:100%;
   background-image:${props=>`url(${props.img})`};
   background-position:center;
   background-size:cover;
   display:flex;
   justify-content:flex-end;
   align-items:flex-end;
   cursor:pointer;




`;
