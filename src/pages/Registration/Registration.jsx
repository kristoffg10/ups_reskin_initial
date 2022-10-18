
import React from "react";
import "../../styles/register.css";
import arrowBack from "../../assets/images/icon/arrowBack.png";
import RegistrationStep5 from "./RegistrationStep5";
// import RegistrationStep1 from".././Registration/RegistrationStep1"
// import RegistrationStep2 from ".././Registration/RegistrationStep2";
// import RegistrationStep3 from "./RegistrationStep3";
// import RegistrationStep4 from "./RegistrationStep4";

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
           {/* <RegistrationStep1/> */}
           {/* <RegistrationStep2 /> */}
           {/* <RegistrationStep3 /> */}
           {/* <RegistrationStep4/> */}
           <RegistrationStep5 />
           </div>
        </div>
    )
}
export default Registration