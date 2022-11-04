import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content:center;
  height: auto;
  width: 100%;
  padding: 0px 16px 24px 16px;
  box-sizing: border-box;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  max-width: 24;
  height: 25px;
  max-height: 25px;
  border-radius: 50%;
  background: white;
  border: 1px solid #bebebe;
`;
const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 18px;
  max-width: 18px;
  height: 18px;
  max-height: 18px;
  margin-right: 20px;
 
  ${(props) =>
    props.checked &&
    ` 
    &:checked + ${RadioButtonLabel} {
      border: 1px solid #FFC914;
      &::after {
        position: absolute;
        top: 1px;
        left: 1.1px;
        content: "";
        display: block;
        border-radius: 100%;
        width: 18px;
        max-width: 18px;
        height: 18px;
        max-height: 18px;
        
        margin: 6.2%;
        margin-top: 6.3%;
        background-color: #FFC914;
      }
    }
  `}
`;

export default class Step5 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            placement: ""
        }
        this.placementChange = this.placementChange.bind(this)
    }

    placementChange(e){
        console.log(e.target.value)
        this.setState({
            placement: e.target.value
        })
    }


    continue = () =>{
      this.props.nextStep();
  }
  

    render(){
        return(
            <>
                <h1 className="header-title">Input your <span className="header-title-yellow">network</span></h1>
                 <h1 className="header-title" style={{ marginTop: "0px"} }>details</h1>
                 <div className="network-details">
                    <label className="label">Direct Referral RC</label>
                    <input type="text" className="custom-input2" />
                    <label className="label">Placement</label>
                    <input type="text" value={this.state.placement} onChange={this.placementChange}className="custom-input2" />
                    <label className="label">Placement</label>
                    <Wrapper>
                        <Item>
                            <RadioButton
                            type="radio"
                            name="left"
                            value="left"
                            checked={this.state.placement === "left"}
                            onChange={this.placementChange}
                            />
                            <RadioButtonLabel />
                            <div style={{ 
                                marginRight: "10%",
                                fontSize: "18px",
                                fontWeight: 500
                             }}>Left</div>
                        </Item>
                        <Item>
                            <RadioButton
                            type="radio"
                            name="right"
                            value="right"
                            checked={this.state.placement === "right"}
                            onChange={this.placementChange}
                            />
                            <RadioButtonLabel />
                            <div style={{ 
                                fontSize: "18px",
                                fontWeight: 500
                             }}>Right</div>
                        </Item>
                    </Wrapper>


                    <button className="btn-yellow" onClick={this.continue} style={{ 
                        width: '90%',
                        margin: '25% 0% 15% 0%'
                    }}>Continue</button>
                 </div>
            </>
        )
    }

}