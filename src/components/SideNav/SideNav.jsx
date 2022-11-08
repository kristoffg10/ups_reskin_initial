import React from "react";
import menuIcon from "./../../assets/images/icon/humburger-icon.png"
import "../../styles/sideNav.css"
import avatar1 from "./../../assets/images/sample/avatar1.png"
import iconVerified from "./../../assets/images/icon/icon-verified.png"
import iconHome from "./../../assets/images/icon/icon-home.png"
import iconFeed from "./../../assets/images/icon/icon-device-message.png"
import iconMarket from "./../../assets/images/icon/icon-marketplace.png"
export default class SideNav extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="side-nav"> 
               <span className="sidenav-header-title"><span><img src={menuIcon} className="humburger-icon"/></span> Unified Products & Services</span>
               <div className="side-menu">
                  <div className="side-profile">
                    <div className="top-info">
                       <img src={avatar1} className="avatar"/>
                       <div className="profile-name">
                          <span className="u-name">Topson Batumbakal</span>
                          <span className="account-type"><img src={iconVerified} alt="" className="icon-verified"/> Verified | Hub Account</span>
                       </div>
                    </div>
                    
                    <div className="bottom-info">
                        <div className="info">
                            <span className="info-label">REGCODE</span>
                            <span className="info-value">GRM686022</span>
                        </div>
                        <div className="info">
                            <span className="info-label">TYPE</span>
                            <span className="info-value">Global</span>
                        </div>
                        <div className="info">
                            <span className="info-label">RANK</span>
                            <span className="info-value">Distributor</span>
                        </div>
                    </div>
                    <hr className="divider" />
                    <div className="menu-list-con">
                        <ul className="menu-list">
                            <li className="menu-item"><span className="icon"><img src={iconHome} alt="" srcset="" /></span>Splashboard</li>
                            <li className="menu-item-active"><span className="icon-active"><img src={iconFeed} alt="" srcset="" /></span>News Feed</li>
                            <li className="menu-item"><span className="icon"><img src={iconMarket} alt="" srcset="" /></span>Marketplace</li>
                            <li className="menu-item"><span className="icon"><img src={iconMarket} alt="" srcset="" /></span>My Network</li>
                            <li className="menu-item"><span className="icon"><img src={iconMarket} alt="" srcset="" /></span>View Profile</li>
                            <li className="menu-item"><span className="icon"><img src={iconMarket} alt="" srcset="" /></span>Account Settings</li>
                            <li className="menu-item"><span className="icon"><img src={iconMarket} alt="" srcset="" /></span>FAQ</li>
                            <li className="menu-item"><span className="icon"><img src={iconMarket} alt="" srcset="" /></span>Help</li>
                            <li className="menu-item" style={{ 
                                marginTop:"80px"
                             }}><span className="icon"><img src={iconHome} alt="" srcset="" /></span>My Profile</li>
                        </ul>
                    </div>
                    
                  </div>
               </div>
            </div>
        )
    }
}