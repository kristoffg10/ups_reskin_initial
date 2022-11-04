import React from "react";
// import styled from 'styled-components'


export default class Step3 extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            isChecked: false,
            isDisabled: false
        }
        this.handleCheckboxChange =this.handleCheckboxChange.bind(this);
    }

    handleCheckboxChange(){
        this.setState({
            isChecked: !this.state.isChecked,
            isDisabled: !this.state.isDisabled
        })

    }

    continue = () =>{
        this.props.nextStep();
      }

    


    render(){
        var classChecbox = this.state.isChecked ? "checkbox--active" : "";
        return(
            <>
                <div className="step2-header-title">
                    <h1 className="header-title" style={{ 
                        marginRight: "8px"
                    }}>Fill up your <span className="header-title-yellow">Information</span></h1>
                    
                </div>

                <div className="form-info">
                    <label className="custom-label">First Name</label>
                    <input className="custom-input" type="text" value="Juan" defaultValue="Juan" placeholder="first name" />
                    <div className="middle-name">
                        <label className="custom-label">Middle Name</label>
                        <label>
                            <input className="check-middlename" type="checkbox" onChange={this.handleCheckboxChange} />
                            <svg
                                className={`checkbox ${classChecbox}`}
                                aria-hidden="true"
                                viewBox="0 0 15 11"
                                fill="none"
                            >
                                <path
                                d="M1 4.5L5 9L14 1"
                                strokeWidth="3"
                                stroke={this.state.isChecked ? "#fff" : "none"} // only show the checkmark when `isCheck` is `true`
                                />
                            </svg>
                            <small style={{ 
                                textAlign: "right"
                             }}>don’t have middle name</small> 
                        </label>
                    </div>
                    <input className="custom-input" type="text" value="Santos" defaultValue="Santos" placeholder="middle name" onChange={this.handleCheckboxChange} disabled={this.state.isDisabled}/>
                    
                    <label className="custom-label">Last Name</label>
                    <input className="custom-input" type="text" value="Dela Cruz" defaultValue="Dela Cruz" placeholder="last name" />
                    
                    <label className="custom-label">Birthdate</label>
                    <input className="custom-input" type="date" value="" defaultValue="" placeholder="birthday" />
                    
                    <label className="custom-label">Address</label>
                    <textarea className="custom-textarea"name="" id="" cols="30" rows="2" placeholder="Pilipinas" value="Pilipinas" defaultValue="Pilipinas"></textarea>
                    
                    <label className="custom-label">Email</label>
                    <input className="custom-input" type="email" value="jdc@gmail.com" defaultValue="jdc@gmail.com" placeholder="mail" />

                    <button className="btn-yellow" onClick={this.continue}  style={{ 
                        width: "90%",
                        margin: "55px auto 50px auto"
                    }}>Continue</button>
                </div>
            </>
        )
    }
}