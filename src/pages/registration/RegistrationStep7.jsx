import React from "react";
import iconVerified from "../../assets/images/icon/icon-verified.png";
import EyeIconSlash from "../../assets/images/icon/icon-eye-slash.png";
import EyeIcon from "../../assets/images/icon/icon-eye.png";

export class RegistrationStep7 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pin: "",
            isValid: false,
            inputType: "password",
            eye: true
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        const re = /^[0-9\b]+$/;
        if(e.target.value === '' || re.test(e.target.value)){
            this.setState({pin: e.target.value})
            if(e.target.value.length === 6){
                 this.setState({isValid: true})
            }
        }
    }
    
    handleEye(e){
        if(this.state.inputType === "password"){
              this.setState({
                inputType: "text",
                eye: false
                
              })
        }
        else{
            this.setState({
                inputType: "password",
                eye: true
             
            })
        }
    }
    
    render(){
        return(
            <>
                <h1 className="header-title">Registration Activation</h1>
                <div className="registration-activation">
                    <label className="label">Registration Code</label>
                    <input type="text" className="custom-input2" placeholder="Registation Code"/>
                    <label className="label">Pin</label>
                    <div className="input-eye">
                        <input type={this.state.inputType} maxLength={6} className="custom-input2"  value={this.state.pin} onChange={this.handleChange} style={{ 
                           borderRadius: '10px 0px 0px 10px'  
                         }}/>
                        <span className="btn-eye" onClick={() => this.handleEye()}>{this.state.isValid ? <span className="pin-match"><img src={iconVerified} alt="verified"  /></span> : ""}  {this.state.eye ? <img src={EyeIconSlash} alt="" />:<img src={EyeIcon} alt="" />}  </span>
                    </div>
                    
                    <button className="btn-yellow" style={{ 
                        width: '90%',
                        margin: '25% 0% 15% 0%'
                    }}>Continue</button>
                </div>
            </>
        )
    }

}