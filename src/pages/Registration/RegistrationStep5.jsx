
import React from "react";
// import EyeIcon from "../../assets/images/icon/icon-eye.png";
import EyeIconSlash from "../../assets/images/icon/icon-eye-slash.png";
import EyeIcon from "../../assets/images/icon/icon-eye.png";
import iconVerified from "../../assets/images/icon/icon-verified.png";
class RegistrationStep5 extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            pin: "",
            pinConfirm: "",
            inputType: "password",
            eye: true,
            isMatched: false
        }
        this.handleChangePin = this.handleChangePin.bind(this)
        this.handleChangePinConfirm = this.handleChangePinConfirm.bind(this)
        this.validatePin = this.validatePin.bind(this)
        // this.handleEyeToggle =this.handleEyeToggle.bind(this)
    }

    handleChangePin(e){
        const re = /^[0-9\b]+$/;
        if(e.target.value === '' || re.test(e.target.value)){
            this.setState({pin: e.target.value})
        }

        // this.valiateChangePin(e.target.value)
        
    }
    handleChangePinConfirm(e){
        const re = /^[0-9\b]+$/;
        if(e.target.value === '' || re.test(e.target.value)){
            this.setState({pinConfirm: e.target.value})
        }
        // this.valiateChangePin(e.target.value)
    }

        

    validatePin(){
       
        if(this.state.pin !== this.state.pinConfirm){
            this.setState({
                isMatched: false
            })
        }
        else if(this.state.pin === this.state.pinConfirm){
            this.setState({
                isMatched: true
            })
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
             <h1 className="header-title" style={{ 
                    marginBottom: "4%"
                 }}>Set up your <span className="header-title-yellow">PIN</span></h1>
             <div className="setup-pin" >
             
                    <label className="label">Create 6-digit PIN</label>
                    <div className="input-eye">
                    <input type={this.state.inputType} name="pin" className="custom-input2" maxLength={6} value={this.state.pin} onChange={this.handleChangePin}  onKeyUp={this.validatePin} style={{ 
                        borderRadius: '10px 0px 0px 10px'
                        }}/>
                    <span className="btn-eye" onClick={() => this.handleEye()}>  {this.state.eye ? <img src={EyeIconSlash} alt="" />:<img src={EyeIcon} alt="" />}  </span>
                    {/* <span className="btn-eye"><img src={EyeIcon} alt="" /></span> */}
                    </div>
                    <label className="label">Confirm PIN</label>
                    <div className="input-eye">
                    <input type={this.state.inputType} name="pinConfirm"  className="custom-input2" maxLength={6}  value={this.state.pinConfirm} onChange={this.handleChangePinConfirm}  onKeyUp={this.validatePin} style={{ 
                        borderRadius: '10px 0px 0px 10px'
                        }}/>
                        <span className="btn-eye" onClick={() => this.handleEye()}>{this.state.isMatched ? <span className="pin-match"><img src={iconVerified} alt="verified"  /></span> : ""}  {this.state.eye ? <img src={EyeIconSlash} alt="" />:<img src={EyeIcon} alt="" />}  </span>
                    {/* <span clasName="btn-eye"><img src={EyeIcon} alt="" /></span> */}
                   
                    </div>
                    
                    <button className="btn-yellow" style={{ 
                        width: '90%',
                        margin: '50% 0% 10% 0%'
                    }}>Continue</button>
             </div>
            </>
        )
    }
}
export default RegistrationStep5;