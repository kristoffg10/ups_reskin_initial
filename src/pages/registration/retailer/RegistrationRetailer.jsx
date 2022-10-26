import React from "react";
import "../../../styles/register.css";
import arrowBack from "../../../assets/images/icon/arrowBack.png"
// import Step1 from "./step1";
// import Step2 from "./Step2";
// import Step3 from "./Step3";
// import Step4 from "./Step4";
import SpinnerScreen from "./SpinnerScreen";


export default class RegistrationRetailer extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
          <div className="resgister-step">
                {/* Header Progress */}
                <div className="progress-step-con">
                        <button className="btn-back"><img src={arrowBack} alt="" srcset="" /></button>
                        <div className="progress-bar"><div className="progress-bar-inner"></div></div>
                        <span className="pager">
                            <span className="pager-count">1 </span>
                            <span className="pager-total">| 4</span>
                        </span>
                </div>
                {/* Content */}
                <div className="register-step-content"> 
                    {/* <Step1/> */}
                    {/* <Step2/> */}
                    {/* <Step3/> */}
                    {/* <Step4/> */}
                    <SpinnerScreen />
                    
                    {/* <RegistrationStep4/> */}
                    {/* <RegistrationStep5 /> */}
                    {/* <RegistrationStep6 /> */}
                    {/* <RegistrationStep7/> */}
                </div>
          </div>
        )
    }
}