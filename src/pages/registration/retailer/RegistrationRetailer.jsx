import React from "react";
import "../../../styles/register.css";
import arrowBack from "../../../assets/images/icon/arrowBack.png"
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import SpinnerScreen from "../SpinnerScreen";



export default class RegistrationRetailer extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            step: 1,
            isSuccess: 0
        }
    }

    prevStep = () =>{
       this.setState({
        step: this.state.step - 1
       })
    }

    nextStep = () =>{
        this.setState({ step: this.state.step + 1 });
    }

    resetStepDefault = () =>{
        this.setState({step: 1 })
        console.log(this.state.step)
    }
  

    
    render(){
        
        const steps = this.state.step;
        
        let StepCom;
        let back;
        let inner;
        let successc;
        let hideHeader;

        if(steps===1){
           StepCom = <Step1 nextStep={this.nextStep}/>;
           back =  <button className="btn-back"></button>;
           inner = <div className="progress-bar-inner" style={{ width: "20px" }}></div>;
         
        }
        else if(steps===2){
            StepCom = <Step2 prevStep={this.prevStep} nextStep={this.nextStep}/>;
            back =  <button className="btn-back" onClick={this.prevStep}><img src={arrowBack} alt="" srcset="" /></button>;
            inner = <div className="progress-bar-inner" style={{ width: "40px" }}></div>;
        }
        else if(steps===3){
            StepCom = <Step3 prevStep={this.prevStep} nextStep={this.nextStep}/>;
            back =  <button className="btn-back" onClick={this.prevStep}><img src={arrowBack} alt="" srcset="" /></button>;
            inner = <div className="progress-bar-inner" style={{ width: "60px" }}></div>;
        }
        else if(steps===4){
            StepCom = <Step4 prevStep={this.prevStep} nextStep={this.nextStep}/>;
            back =  <button className="btn-back" onClick={this.prevStep}><img src={arrowBack} alt="" srcset="" /></button>;
            inner = <div className="progress-bar-inner" style={{ width: "80px" }}></div>;
        } 
        else if(steps===5){
            successc = <SpinnerScreen resetStepDefault={this.resetStepDefault}/>;
            StepCom= ""
            hideHeader="none"
        }
         
        return(
          <div className="resgister-step">
                {/* Header Progress */}
                <div className="progress-step-con" style={{ display: hideHeader }}>
                    
                       {back}
                        <div className="progress-bar">{inner}</div>
                        <span className="pager">
                            <span className="pager-count">{this.state.step} </span>
                            <span className="pager-total">| 4</span>
                        </span>
                </div>
                {/* Content */}
                <div className="register-step-content"> 
                    {StepCom}
                    {successc}
                </div>
          </div>
        )
    }
}