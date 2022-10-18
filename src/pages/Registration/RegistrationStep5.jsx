import React from "react";
// import EyeIcon from "../../assets/images/icon/icon-eye.png";
import EyeIconSlash from "../../assets/images/icon/icon-eye-slash.png";
class RegistrationStep5 extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            pin: "",
            pinConfirm: ""
        }
        this.handleChange = this.handleChange.bind(this)
        // this.handleEyeToggle =this.handleEyeToggle.bind(this)
    }

    handleChange(key,value){
        let Pin = {}
        Pin[key] = value
        this.setState(Pin);
    }

    

    render(){
        
        return(
            <>
             <h1 className="header-title" style={{ 
                    marginBottom: "4%"
                 }}>Set up your <span className="header-title-yellow">PIN</span></h1>
             <div className="setup-pin" onSubmit={this.ha}>
                <label className="label">Create 6-digit PIN</label>
                <div className="input-eye">
                   <input type="password" name="pin" className="custom-input2" value={this.state.pin} onChange={(e)=>this.handleChange('pin', e.target.value)} style={{ 
                    borderRadius: '10px 0px 0px 10px'
                    }}/>
                   <span className="btn-eye"><img src={EyeIconSlash} alt="" /></span>
                   {/* <span className="btn-eye"><img src={EyeIcon} alt="" /></span> */}
                </div>
                <label className="label">Confirm PIN</label>
                <div className="input-eye">
                   <input type="password" name="pinConfirm"  className="custom-input2" value={this.state.pinConfirm} onChange={(e)=>this.handleChange('pinConfirm', e.target.value)} style={{ 
                    borderRadius: '10px 0px 0px 10px'
                    }}/>
                    <span className="btn-eye"><img src={EyeIconSlash} alt="" /></span>
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