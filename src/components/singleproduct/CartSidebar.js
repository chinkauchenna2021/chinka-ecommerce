import React from 'react';
import styled from 'styled-components';
import watches from '../../image/watches.jpg';
import grid4 from '../../image/grid_img/grid4.jpg';
import grid1 from '../../image/grid_img/grid1.jpg';
import Bounce from 'react-reveal/Bounce';
import * as Icons from 'react-bootstrap-icons';

export default function CartSidebar() {
    return (
        <div>
            <CartSidebarcontainer>
                                                  

                        <Cartbody>
                           <div className=" container">
                              <div className="row">
                                  <div className="col-12 cartholder"><span>Shopping Cart</span> <span  className="icons"><Icons.X className="icon"></Icons.X></span></div>

                                  <hr />
                                </div>
                           </div>
                           <CartContainer className="row">
                              
                                     <SingleCarter className='row'>
                                   <div className="col-6">
                                   <ImageCart im={watches}>

                                   </ImageCart>
                                  </div>
                                  <div className="col-6">
                                          <span className="title" style={{fontSize:'15px',fontWeight:'500'}}>Ridley high waist</span>
                                          <div className="sizes">{'S'}</div>
                                          <div className="price">{'$46.00'}</div>

                                          <SmallButton>
                                                          <Button1>-</Button1>
                                                          <Input inputMode="numeric" pattern="[0-9]*"  step="1" min="1" max="9999"  />
                                                          <Button2>{'+'}</Button2>                                                        
                                                    </SmallButton>


                                                    <div className="row iconall" style={{height:'100%'}}>
                                                        <span className="remove"><Icons.PencilSquare size={23} className="icon1"></Icons.PencilSquare><Icons.Trash size={23} className="icon2"></Icons.Trash></span>
                                                    </div>

                                </div>

                               </SingleCarter>
                               
                               <SingleCarter className='row'>
                                   <div className="col-6">
                                   <ImageCart im={grid1}>

                                   </ImageCart>
                                  </div>
                                  <div className="col-6">
                                          <span className="title" style={{fontSize:'15px',fontWeight:'500'}}>Ridley high waist</span>
                                          <div className="sizes">{'S'}</div>
                                          <div className="price">{'$46.00'}</div>

                                          <SmallButton>
                                                          <Button1>-</Button1>
                                                          <Input inputMode="numeric" pattern="[0-9]*"  step="1" min="1" max="9999"  />
                                                          <Button2>{'+'}</Button2>                                                        
                                                    </SmallButton>


                                                    <div className="row iconall" style={{height:'100%'}}>
                                                        <span className="remove"><Icons.PencilSquare size={23} className="icon1"></Icons.PencilSquare><Icons.Trash size={23} className="icon2"></Icons.Trash></span>
                                                    </div>

                                </div>

                               </SingleCarter>
                               


                               <SingleCarter className='row'>
                                   <div className="col-6">
                                   <ImageCart im={grid4}>

                                   </ImageCart>
                                  </div>
                                  <div className="col-6">
                                          <span className="title" style={{fontSize:'15px',fontWeight:'500'}}>Ridley high waist</span>
                                          <div className="sizes">{'S'}</div>
                                          <div className="price">{'$46.00'}</div>

                                          <SmallButton>
                                                          <Button1>-</Button1>
                                                          <Input inputMode="numeric" pattern="[0-9]*"  step="1" min="1" max="9999"  />
                                                          <Button2>{'+'}</Button2>                                                        
                                                    </SmallButton>


                                                    <div className="row iconall" style={{height:'100%'}}>
                                                        <span className="remove"><Icons.PencilSquare size={23} className="icon1"></Icons.PencilSquare><Icons.Trash size={23} className="icon2"></Icons.Trash></span>
                                                    </div>

                                </div>

                               </SingleCarter>
                               









                              <div className="container-fluid mb-4 mt-5">
                                  <div className="row">
                                       <span className="iconholder">
                                           <span className="journal"><Icons.JournalBookmarkFill></Icons.JournalBookmarkFill></span>
                                           <span className="gift"><Icons.Gift></Icons.Gift></span>
                                           <span className="truck"><Icons.Truck></Icons.Truck></span>
                                           <span className="clip"><Icons.Clipboard></Icons.Clipboard></span>
                                           
                                           
                                           </span>
  



                                      </div>
                              </div>
                             

                                {/* start scroller  cart holder */}
                             {/* <div className="container"> */}
                                 <div className="row">
                                       <div className="card" style={{maxWidth:"85%",marginLeft:"30px"}}>
                                           <div className="card-header ">
                                                  <bold>You may also like</bold>
                                               </div>
                                            <div className="card-body d-flex ">
                                                <div className="col-12 holder1 row w-100">
                                                        <div className="col-6">
                                                             <Images src={watches} />
                                                             </div>
                                                         <div className="col-6">
                                                             <Linker>a short sleeved Hoo..</Linker>
                                                             <dem><span>$57.00</span> $23.12</dem>
                                                            <div className="disc d-flex">
                                                                      
                                                                <Discount>-34%</Discount>
                                                                <Holdingss><Icons.Eye className="eye"></Icons.Eye></Holdingss>

                                                            </div>
                                                        </div>


                                                </div>
                                            </div>
                                            <div className="card-footer">

                                               <small>See more!</small>

                                                </div>
                                      
                                        </div>
                                     </div>
                             {/* </div> */}

                             {/* end scroller cart holder */}
 



                           </CartContainer>

                             <CartSticker>
                               <div className="container-fluid">
                                 <div className="row">
                                      <div className="col-12 text-danger w-100 d-flex" style={{justifyContent:'flex-start',marginTop:'10px',fontSize:'17px'}}><Icons.Clipboard color="red"></Icons.Clipboard><small style={{marginLeft:'5px'}}>5% OFF (-13.60)</small></div>
                                       <div className="col-12 d-flex" style={{justifyContent:"flex-end",height:'30px',alignItems:'center',fontSize:'20px',marginBottom:'-15px'}}>$234.00 - $13.33</div>
                                       <div className="col-12 d-flex" style={{color:'black',height:"30px",width:"100%",justifyContent:"flex-start",fontSize:'20px',fontWeight:'bolder'}}>Subtotal</div>
                                       <div className="col-12 d-flex" style={{justifyContent:"flex-end",alignItems:'center',fontSize:'20px',fontWeight:'bolder',marginTop:'-10px'}}>$262.20</div>
                                        <Bounce left>
                                        <button className="">View Cart</button>
                                        </Bounce>
                                        <Bounce right>
                                        <buttons className="">Check Out</buttons>
                                         </Bounce>
                                     </div>
                               </div>


                             </CartSticker>



                        </Cartbody>


            </CartSidebarcontainer>
            
        
        </div>
    )
}

const SingleCarter = styled.div`
 


`;

const CartSticker = styled.div`
position:sticky;

button{
width:80%;
height:40px;
border:none;
margin:5px auto;
border-radius:20px;
font-size:17px;
font-weight:600;
color:rgba(0,0,0,0.8);
cursor:pointer;



}


buttons{
    width:80%;
    height:40px;
    border:none;
    margin:5px auto;
    border-radius:20px;
    font-size:17px;
    font-weight:600;
    color:#ffffff;
    background-color:#56cfe1;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    
    
    
    
    }

`;

const Discount = styled.div`
 width:38px;
 height:17px;
 background-color:red;
 color:#ffffff;
 display:flex;
 justify-content:center;
 align-items:center;
 font-size:13px;
 border-radius:5px;

`;
const Holdingss = styled.div`
width:38px;
height:17px;
display:flex;
justify-content:center;
align-items:center;
background-color:#56cfe1;
margin-left:10px;
color:#ffffff;
cursor:pointer;



`;



const Linker = styled.div`
width:100%;
height:100px;
text-align:left;
font-weight:bold;

&:hover{
color:#56cfe1;
cursor:pointer;


}
`;

const Images = styled.img`
height:100%;
width:70%;



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
font-size:25px;
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
font-size:20px;
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
height:35px;
display:flex;
margin-top:16px;
margin-left:-2px;


`;

















const ImageCart = styled.div`
width:100%;
height:150px;
background-image:${props=> `url(${props.im})`};
background-size:cover;
background-position:center;
margin-left:10px;
`;



const CartContainer =styled.div`
-ms-overflow-style: none; 
scrollbar-width: none; 
overflow-y:scroll;
width:100%;
height:350px;

dem{
display:flex;
justify-content:flex-start;
color:orange;
font-weight:bold;
margin-top:-20px;
margin-bottom:10px;
margin-right:10px;

span{
    
    text-decoration:line-through;
    margin-right:10px;
    color:gray;
}
}

// &::-webkit-scrollbar { 
//     display: none;  
// }

// .holder1{
//   width:25%;


// }







.iconholder{
  height:80px;
  width:90%;
  display:flex;
  align-items:center;
  justify-content:space-around;
  background-color:#f5f5f5;
  margin-left:20px;
  margin-top:-50px;

  .journal{
    height:40px;
    width:40px;
    border-radius:40px;
    justify-content:center;
    display:flex;
    align-items:center;
    box-shadow:9px 5px 10px #dfe3ea, -5px -5px 10px #faffff;
    transition : 0.25s ease-in-out;
    cursor:pointer;
  }



  .truck{
    height:40px;
    width:40px;
    border-radius:40px;
    justify-content:center;
    display:flex;
    align-items:center;
    box-shadow:9px 5px 10px #dfe3ea, -5px -5px 10px #faffff;
    transition : 0.25s ease-in-out;
    cursor:pointer;
  }
  .gift{
    height:40px;
    width:40px;
    border-radius:40px;
    justify-content:center;
    display:flex;
    align-items:center;
    box-shadow:9px 5px 10px #dfe3ea, -5px -5px 10px #faffff;
    transition : 0.25s ease-in-out;
    cursor:pointer;
  }

  .clip{
    height:40px;
    width:40px;
    border-radius:40px;
    justify-content:center;
    display:flex;
    align-items:center;
    box-shadow:9px 5px 10px #dfe3ea, -5px -5px 10px #faffff;
    transition : 0.25s ease-in-out;
    cursor:pointer;
  }

}









.sizes{
height:25px;
width:100%;
display:flex;
justify-content:flex-start;
align-items:center;


}

.iconall{
height:100%;
width:100%;
display:flex;
justify-content:flex-start;



}

.remove{
    height:50px;
    width:100%;
    display:flex;
    justify-content:flex-start;
    align-items:center;

}
.icon1{
margin-right:10px;
&:hover{
    cursor:pointer;
    color:#56cfe1;
    
    
    }

}
.icon2{
&:hover{
cursor:pointer;
color:#56cfe1;


}
}


.title{
    height:20px;
    width:100%;
    display:flex;
    justify-content:flex-start;
}

.price{
    height:20px;
    width:100%;
    display:flex;
    justify-content:flex-start;
    color:gray;
}



`;





const CartSidebarcontainer = styled.div`
width:100%;
height:100vh;
position:fixed;
left:0px;
top:0px;
background-color:rgba(0,0,0,0.4);
display:flex;
align-items:center;
justify-content:flex-end;
z-index:90;


`;

const Cartbody = styled.div`
height:100%;
width:25%;
background-color:#ffffff;

.cartholder{
  height:60px;
  width:100%;
  display:flex;
  justify-content:space-around;
  align-items:center;

.icons{
   width:100%;
   height:100%;
   display:flex;
   justify-content:flex-end;
   align-items:center;

   .icon{
        font-size:30px;
        transition:all 0.2s linear;

        &:hover{
            cursor:pointer;
            transform: rotate(90deg);


        }


   }


  }

  span{
  width:100%;
  font-weight:400px;
  font-size:20px;
  color:black;
  display:flex;
  justify-content:flex-start;
  padding-top:10px;

  }



}
@media (max-width:900px){
width:100%;
}


`;
