import React from "react";
import philippines from "../../assets/images/icon/philippines.png"
import arrowForward from "../../assets/images/icon/arrowForward.png";
class RegistrationStep2 extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <>
                <h1 className="header-title">Authentication via</h1>
                <h1 className="header-title-yellow">One-Time-Password</h1>

                <div className="authentication-container">   
                    <div className="telephone-container">
                        <h6>Enter your mobile number</h6>
                        <div className="input-con">
                            <div className="country-tel-code"><img src={philippines} alt="" /> <span>+63</span></div>
                            <input className="input-tel" type="text" value="912 345 6789" defaultValue="912 345 6789"  placeholder="enter your number..."/>
                        </div>
                    </div>
                    <div className="code-container">
                        <h6>Enter authentication code</h6>
                        <input type="text" className="input-auth-code" value="195084"  defaultValue="195084" placeholder=""/>
                        <h6 className="get-code">Get Code</h6>
                    </div>
                    <div className="varify-container">
                        <span className="email-instead">Use my email instead <span><img src={arrowForward} alt="" srcset="" /></span></span>
                        <button className="btn-yellow">Verify</button>
                    </div>
                </div>
                
            </>
        )
    }
}

export default RegistrationStep2;