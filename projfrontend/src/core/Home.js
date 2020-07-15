import React from "react";
import { API } from "../backend";
import Base from "./Base";
import Menu from "./Menu";
import logo from "../images/photologo.jpg"
import './Homemin.css'
export default function Home() {
  console.log("API IS", API);
  return (
      <div>
    <Menu/>
  
  <div className="row">
    <div className="col-6">
    {/* <img className="pl-5" src={logo} alt="" height="500px"  width="500px"/> */}

    </div>
     <div className="col-6">
     <div className="page-footer font-small mdb-color darken-3 pt-4">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <div className="embed-responsive embed-responsive-16by9 mb-4">
                 
            <div class="frame-container mt-5">
   <iframe width="500px" height="415px" 
                src="//www.youtube.com/embed/yFmeZRChQEw" 
                frameborder="0" 
                allowfullscreen

                ></iframe>
</div> 
              </div>
            

           
            </div>
          </div>
        
         <div>
         </div>
        </div>
      </div>
     </div>
  </div>
  <div className="row pt-5">
    <div className="col">
    <div class="card card-image" style={{background:"#2475B0"}}>
    <div class="text-black text-center d-flex align-items-center rgba-black-strong py-5 px-4">
        <div>
            <h5 class="pink-text"><i class="fas fa-chart-pie"></i> Marketing</h5>
            <h3 class="card-title pt-2"><strong>This is the card title</strong></h3>
            
        </div>
    </div>
</div>
    </div>
    <div className="col">
    <div class="card card-image" style={{background:"#2475B0"}}>
    <div class="text-black text-center d-flex align-items-center rgba-black-strong py-5 px-4">
        <div>
            <h5 class="pink-text"><i class="fas fa-chart-pie"></i> Marketing</h5>
            <h3 class="card-title pt-2"><strong>This is the card title</strong></h3>
           
        </div>
    </div>
</div>
    </div>
    <div className="col">
    <div class="card card-image" style={{background:"#2475B0"}}>
    <div class="text-black text-center d-flex align-items-center rgba-black-strong py-5 px-4">
        <div>
            <h5 class="pink-text"><i class="fas fa-chart-pie"></i> Marketing</h5>
            <h3 class="card-title pt-2"><strong>This is the card title</strong></h3>

        </div>
    </div>
</div>
    </div>
  </div>

      
      </div>
   
  );
}
