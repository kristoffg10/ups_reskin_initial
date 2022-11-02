import React from "react";
import Select from 'react-select'


const options = [
    { value: 'sq1', label: 'Security Question 1'},
    { value: 'sq2', label: 'Security Question 2' },
    { value: 'sq3', label: 'Security Question 3' }
  ]

  const selectStyles ={
    control: (styles) => ({...styles,
        backgroundColor: "#F4F4F4",
        border: "none",
        height: "56px",
        borderRadius: "10px",
        color: "black",
        fontWeight: 500,
        fontSize:"20px",
       
    }),
    option: (styles, {isFocused}) =>{
        if(isFocused){
            return{...styles, 
                backgroundColor: "#FFC914",
                color:"black",
                borderRadius: "10px",
                fontSize:"20px"
           }
        }
    },
    menu: (styles) =>({
        ...styles,
        backgroundColor: "#F4F4F4",
        padding: "13px 14px",
        borderRadius: "10px",
        fontSize:"20px"
    }),
    indicatorSeparator: (styles) => ({
        width: "0px"
    })
  }

export default class Step6 extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            currentValue: "",
            isOpen: false
        }
    }

    handleChange =(selectedOption) =>{
       console.log("handleChange", selectedOption)
    }

    continue = () =>{
        this.props.nextStep();
    }

    render(){
    
        return(
            <>
               <h1 className="header-title">Addition Information</h1>
               <div className="additional-information">
                    <label className="label">AR/OR Tracking Number</label>
                    <input type="text" className="custom-input2" />
                    <label className="label">Security Question</label>
                    <Select options={options} className="select" onChange={this.handleChange} styles={selectStyles} label="-- Security Question --"/>
                    <label className="label">Answer</label>
                    <input type="text" className="custom-input2" value="Saitama Kun"/>
                    <button className="btn-yellow" onClick={this.continue} style={{ 
                        width: '90%',
                        margin: '25% 0% 15% 0%'
                    }}>Continue</button>
               </div>
            </>
        )
    }
}