
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
        this.handleChange = this.handleChange.bind(this)
        this.validatePin = this.validatePin.bind(this)
        // this.handleEyeToggle =this.handleEyeToggle.bind(this)
    }

    handleChange(key,value){
        let Pin = {}
        Pin[key] = value
        this.setState(Pin);

        if(this.state.pin !== "" || this.state.pinConfirm !== ""){
             
        }
        
    }
    validatePin(e){
        e.preventDefault();
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
                <form onSubmit={this.validatePin}>
                    <label className="label">Create 6-digit PIN</label>
                    <div className="input-eye">
                    <input type={this.state.inputType} name="pin" className="custom-input2" value={this.state.pin} onChange={(e)=>this.handleChange('pin', e.target.value)} style={{ 
                        borderRadius: '10px 0px 0px 10px'
                        }}/>
                    <span className="btn-eye" onClick={() => this.handleEye()}>  {this.state.eye ? <img src={EyeIconSlash} alt="" />:<img src={EyeIcon} alt="" />}  </span>
                    {/* <span className="btn-eye"><img src={EyeIcon} alt="" /></span> */}
                    </div>
                    <label className="label">Confirm PIN</label>
                    <div className="input-eye">
                    <input type={this.state.inputType} name="pinConfirm"  className="custom-input2" value={this.state.pinConfirm} onChange={(e)=>this.handleChange('pinConfirm', e.target.value)}  style={{ 
                        borderRadius: '10px 0px 0px 10px'
                        }}/>
                        <span className="btn-eye" onClick={() => this.handleEye()}>{this.state.isMatched ? <span className="pin-match"><img src={iconVerified} alt="verified"  /></span> : ""}  {this.state.eye ? <img src={EyeIconSlash} alt="" />:<img src={EyeIcon} alt="" />}  </span>
                    {/* <span clasName="btn-eye"><img src={EyeIcon} alt="" /></span> */}
                   
                    </div>
                    
                    <button type="submit"className="btn-yellow" style={{ 
                        width: '90%',
                        margin: '50% 0% 10% 0%'
                    }}>Continue</button>
                </form>
                
             </div>
            </>
        )
    }
}
export default RegistrationStep5;