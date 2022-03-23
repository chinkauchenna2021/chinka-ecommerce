import React from 'react';
import styled from 'styled-components';
import * as Icons from 'react-bootstrap-icons'; 

export default function MainSponsors() {
    return (
        <div>
            <Sponsor>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3  row mb-5">
                           <div className="col-md-3">
                                <Icons.Truck className="truck" ></Icons.Truck> 
                            </div>
                            <div className="col-md-9" style={{textAlign:'left'}}>
                                <div className="titlesponsor">FREE SHIPPING</div>
                                <div className="titledesc">Free shipping on all US order or order above $100</div>

                              </div>

                        </div>
                        <div className="col-md-3 row mb-5">
                        <div className="col-md-3 ">
                                <Icons.InfoCircle className="truck"></Icons.InfoCircle>
                            </div>
                            <div className="col-md-9" style={{textAlign:'left'}}>
                                <div className="titlesponsor">SUPPORT 24/7</div>
                                <div className="titledesc">Contact us 24 hours a day, 7 days a week</div>

                              </div>


                        </div>
                        <div className="col-md-3 row mb-5">
                        <div className="col-md-3 ">
                                <Icons.ArrowClockwise className="truck"></Icons.ArrowClockwise>
                            </div>
                            <div className="col-md-9" style={{textAlign:'left'}}>
                                <div className="titlesponsor">30 DAYS RETURN</div>
                                <div className="titledesc">Simply return it within 30 days for an exchange.</div>

                              </div>


                            </div>
                            <div className="col-md-3 row mb-5">
                            <div className="col-md-3 ">
                                <Icons.KeyFill className="truck"></Icons.KeyFill>
                            </div>
                            <div className="col-md-9" style={{textAlign:'left'}}>
                                <div className="titlesponsor">100% PAYMENT SECURE</div>
                                <div className="titledesc">We ensure secure payment with PEV</div>

                              </div>


                              </div>

                    </div>


                </div>



            </Sponsor>
            
        </div>
    )
}

const Sponsor = styled.div`
width:100%;
height:40vh;
display:flex;
align-items:center;
justify-content:center;
transition:all 0.8s linear;
@media (max-width:1000px){
 height:90vh;
 margin-top:30px;



}



.truck{
  font-size:35px;
  color:gray;
  &:hover{
   color:gold;
   transform:translateY(-20px) scale(1.5);
    cursor:pointer;

  }

}

.titlesponsor{
  font-size:18px;
  font-weight:bolder;
  color:rgba(0,0,0,0.8);
  &:hover{
     color:#cedef0;

  }


}

.titledesc{
 font-size:15px;
 color:silver;
 &:hover{
  color:gray;

 }

}
`;