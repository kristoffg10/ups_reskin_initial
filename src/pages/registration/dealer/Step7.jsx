import React from "react";
import styled from "styled-components";




const INFO = styled.div`
      &:before {
        content: '${props => props.before}'
      }
      `


export default class Step7 extends React.Component{
    constructor(props){
        super(props)
        
    }

    confirm = () =>{
      this.props.nextStep()
    }
  
    render(){
       
            return(
                <>
                    
                     <h1 className="header-title" style={{ 
                        marginBottom: "4%"
                     }}>Review your <span className="header-title-yellow">details</span></h1>
                     <div className="review-details">
                        <INFO className="info-field" style={{ marginBottom: "15px" }} before="Account Type">Free Account</INFO>
                        <span  style={{textAlign: "center",
                                       alignSelf: "center",
                                       marginBottom: "15px"}}> 
                            User Information
                        </span>
                        <INFO className="info-field" before="Full Name">Juan Santos Dela Cruz</INFO>
                        <INFO className="info-field" before="Birthdate">MM/DD/YY</INFO>
                        <INFO className="info-field" before="Address">Pilipinas</INFO>
                        <INFO className="info-field" before="Username">jdc123</INFO>
                        <INFO className="info-field" before="Email Address">jdc@gmail.com</INFO>
                        <INFO className="info-field" before="Mobile Number" style={{ 
                            marginBottom: '2%'
                         }}>+639123456789</INFO>
                        <hr className="divider" />
                      <h1 className="header-label">Referral Code (optional)</h1>
                      <div className="referal-code"></div>
                      <button className="btn-yellow" onClick={this.confirm} style={{ 
                        width: '90%',
                        margin: '6% 0%'
                       }}>
                        Confirm
                      </button>
                    </div>
                </>
            )
        
    }
}