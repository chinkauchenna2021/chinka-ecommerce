import React , {useState} from 'react'
// import { Icons } from 'react-toastify';
import * as Icons from 'react-bootstrap-icons';
import '../App.css';
import Dropdown from './Dropdown';

export default function MainHeader() {
    
    const [hover , setHover] = useState(false);



    return (
        <div>
        <div  className="w-100 mainheader d-flex  align-items-center" style={{backgroundColor:'#fff'}}>
          <div className="container">
            <div className="row">
                  <div className="col-md-2" style={{display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
                       <bold style={{color:'241flc',fontSize:35,fontWeight:'bolder'}}>Kalles</bold>
                      

                  </div>
                  <div className="col-md-6 d-flex align-items-center justify-content-center ">
                      <div className="row pl-1 pr-1">
                    <div className="col list" onMouseEnter={()=>setHover(!hover)}   >Demo</div>
                    <div className="col list">Shop</div>
                    <div className="col list">Product</div>
                    <div className="col list">Sales</div>
                    <div className="col list">Portfolio</div>
                    <div className="col list">Lookbook</div>
                    <div className="col list">Blog</div>
                    
                </div>

                 </div>

                 <div className="col-md-4 d-flex align-items-center justify-content-center ">
                      <div className="row">
                          
                      <div className="col list"><Icons.Search className="search" size={20}></Icons.Search></div>
                    <div className="col list"><Icons.Person size={25}></Icons.Person></div>
                    <div className="col list"><Icons.Heart size={25}></Icons.Heart><span className="counter">0</span></div>
                    <div className="col list"><Icons.Cart size={25}></Icons.Cart><span className="counter">0</span></div>



                      </div>
                 

                    </div>



                
                
                
                
            
            
            </div>    
          </div>





        </div>
        {hover && <Dropdown  enter={hover}/>
    }
    
        </div>
    )
}
