import React from "react";
import retailAcc from "../../assets/images/icon/retailAcc.png"
import dealerAcc from "../../assets/images/icon/dealerAcc.png";
import {useNavigate} from 'react-router-dom'

 class RegistrationStep1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isActive: true,
            isActive2: false,
            isDefault: true
        }
        this.handleAccountChange =this.handleAccountChange.bind(this);
    }
    
    handleAccountChange(e){
    e.preventDefault();
      this.setState({
        isActive: !this.state.isActive,
        isActive2: !this.state.isActive2,
        isDefault: !this.state.isDefault
      })
      
    }

   
   
    
    render(){
        var classActive = this.state.isActive ? "card-icon-active" : null;
        var classActive2 = this.state.isActive2 ? "card-icon-active" : null;
        return(
            <>
                <h1 className="header-title">Select your preferred</h1>
                <h1 className="header-title-yellow">account type</h1>
                <div className="account-type-container">
                    <div className={`card-icon ${classActive}`}  onClick={this.handleAccountChange} onChange={this.handleAccountChange}>
                        {/* card-header */}
                        <span className="card-icon-header">
                            <span>Retailer Account</span>
                            <div className="card-icon-img"><img className="card-image" src={retailAcc} alt="" srcset="" /></div>
                        </span>
                        {/* card-content */}
                        <div className="card-icon-content">
                            <p>Lorem ipsum dolor sit amet, lorem et al consectetur adipiscing elit:</p>
                            <ul>
                                <li>Package inclusions 1</li>
                                <li>Package inclusions 2</li>
                                <li>Package inclusions 3</li>
                                <li>Package inclusions 4</li>
                                <li>Package inclusions 5</li>
                                <li>Package inclusions 6</li>
                                <li>Package inclusions 7</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, lorem et al consectetur adipiscing elit. Lorem ipsum dolor sit amet, lorem et al consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className={`card-icon ${classActive2}`}  onClick={this.handleAccountChange} onChange={this.handleAccountChange}>
                        {/* card-header */}
                        <span className="card-icon-header">
                            <span>Delear Account</span>
                            <div className="card-icon-img"><img className="card-image" src={dealerAcc} alt="" srcset="" /></div>
                        </span>
                        {/* card-content */}
                        <div className="card-icon-content">
                            <p>Lorem ipsum dolor sit amet, lorem et al consectetur adipiscing elit:</p>
                            <ul>
                                <li>Package inclusions 1</li>
                                <li>Package inclusions 2</li>
                                <li>Package inclusions 3</li>
                                <li>Package inclusions 4</li>
                                <li>Package inclusions 5</li>
                                <li>Package inclusions 6</li>
                                <li>Package inclusions 7</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, lorem et al consectetur adipiscing elit. Lorem ipsum dolor sit amet, lorem et al consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
                {this.state.isDefault ? <button className="btn-create">Create Retailer Account</button> : <button className="btn-create">Create Delear Account</button>} 
            </>
        )
    }
}
export default RegistrationStep1;