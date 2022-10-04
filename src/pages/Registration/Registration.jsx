
import React from "react";
import "../../styles/register.css";
import arrowBack from "../../assets/images/icon/arrowBack.png";
import RegistrationStep1 from".././Registration/RegistrationStep1"




const Registration = () =>{
    
    return(
        <div className="resgister-step">
           {/* Header Progress */}
           <div className="progress-step-con">
                <button className="btn-back"><img src={arrowBack} alt="" srcset="" /></button>
                <div className="progress-bar"><div className="progress-bar-inner"></div></div>
                
                <span className="pager">
                    <span className="pager-count">1 </span>
                    <span className="pager-total">| 8</span>
                </span>
           </div>
           {/* Content */}
           <div className="register-step-content"> 
           <RegistrationStep1/>
           </div>
        </div>
    )
}
export default Registration