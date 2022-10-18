import React from "react";
import styled from "styled-components";

const INFO = styled.div`
      &:before {
        content: '${props => props.before}'
      }
      `
class RegistrationStep4 extends React.Component{

    constructor(props){
      super(props);
      
    }

    render(){
        return(
            <>
                <h1 className="header-title" style={{ 
                    marginBottom: "4%"
                 }}>Review your <span className="header-title-yellow">details</span></h1>
                <div className="review-details">
                    <INFO className="info-field" before="Full Name">Juan Santos Dela Cruz</INFO>
                    <INFO className="info-field" before="Birthdate">MM/DD/YY</INFO>
                    <INFO className="info-field" before="Address">Pilipinas</INFO>
                    <INFO className="info-field" before="Email Address">jdc@gmail.com</INFO>
                    <INFO className="info-field" before="Mobile Number" style={{ 
                        marginBottom: '2%'
                     }}>+639123456789</INFO>
                    <hr className="divider" />
                  <h1 className="header-label">Referral Code (optional)</h1>
                  <div className="referal-code"></div>
                  <button className="btn-yellow" style={{ 
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

export default RegistrationStep4;