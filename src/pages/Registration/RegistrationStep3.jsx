import React from "react";

class RegistrationStep3 extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <>
              <div className="step3-header-title">
                <h1 className="header-title" style={{ 
                    marginRight: "20px"
                 }}>Fill up your</h1>
                <h1 className="header-title-yellow"> Information</h1>
              </div>

              <div className="form-info">
                <label className="custom-label">First Name</label>
                <input className="custom-input" type="text" value="Juan" defaultValue="Juan" placeholder="first name" />
                
                <label className="custom-label">Middle Name</label>
                <input className="custom-input" type="text" value="Santos" defaultValue="Santos" placeholder="middle name" />
                
                <label className="custom-label">Last Name</label>
                <input className="custom-input" type="text" value="Dela Cruz" defaultValue="Dela Cruz" placeholder="last name" />
                
                <label className="custom-label">Birthdate</label>
                <input className="custom-input" type="date" value="" defaultValue="" placeholder="birthday" />
                
                <label className="custom-label">Address</label>
                <textarea className="custom-textarea"name="" id="" cols="30" rows="2" placeholder="Pilipinas" value="Pilipinas" defaultValue="Pilipinas"></textarea>
                
                <label className="custom-label">Email</label>
                <input className="custom-input" type="email" value="jdc@gmail.com" defaultValue="jdc@gmail.com" placeholder="mail" />

                <button className="btn-yellow" style={{ 
                    margin: "10% 0% 10% 0%"
                 }}>Continue</button>
              </div>
            </>
        )
    }
}

export default RegistrationStep3;