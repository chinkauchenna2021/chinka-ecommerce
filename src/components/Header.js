import React from 'react';
import * as Icons from 'react-bootstrap-icons'

export default function Header() {
    return (
        <div>

<nav className="navbar navbar-light bg-light">
  <div className="container">
      <div className="row">
          <div className="col-md-12 d-flex align-items-center justify-content-center">
             
                  <div className="col-6 d-inline  ">
                        
                         <Icons.Phone size={14} color="black"></Icons.Phone>
                        <div className="navbar-brand ml-2 " style={{fontSize:13,marginLeft:10}} >+123 3445 3455</div>

                      </div>
                      <div className="col-7 d-inline ">
                         <Icons.Envelope size={14} color="black"></Icons.Envelope>
                        <div className="navbar-brand " style={{fontSize:13,marginLeft:10}}>shop@gmail.com</div>

                   

                </div>
              </div>

        </div>
     <div className="row col-md-6">
         <div className=" d-flex justify-content-center align-items-center">
  
         <div className="navbar-brand " style={{fontSize:13}}>Summer sale discount off <span className="text-danger">50%!</span> Shop Now</div>
          </div>



      </div>
    


       
    <div className="d-flex  w-auto">
          <div className="row">
                 <div className="col-6">
                     <small style={{fontSize:13}}>ENG</small>

                 </div>
                 <div className="col-6">
                     <small style={{fontSize:13}}>Dollars</small>

                 </div>
            </div>  
     
    </div>
  </div>
</nav>




            
        </div>
    )
}
