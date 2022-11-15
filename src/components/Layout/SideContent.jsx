import React from "react";
import "../../styles/sideContent.css"
import arrowBack from "./../../assets/images/icon/arrow-left.png"
import arrowForward from "./../../assets/images/icon/arrow-right.png"
import iconMoney from "./../../assets/images/icon/icon-money-send.png"
import avatar1 from "../../assets/images/sample/avatar1-big.png"

export default class SideContent extends React.Component{
    constructor(props){
       super(props);
    }

    render(){
        return(
            <>
              <div className="side-content">
                  {/*List of Notifications */}
                  <div className="header-side-content">
                    Notifications
                    <span style={{ color:"#277DF1", fontSize:"12px", fontWeight: "500" }}>See All</span>
                  </div>
                  <div className="notif-list">
                    <div className="notif-item">
                        <div className="notif-left">
                           <div className="square"></div>
                        </div>
                        <div className="notif-right">
                          <div className="notif-header">
                            <span className="notif-label">Unified Promos </span>
                            <span style={{ fontSize:"10px",  }}>5h ago</span>
                          </div>
                            <p>Load a total amount of P100 to get a discount Voucher!</p>
                        </div>
                    </div>
                    <div className="notif-item">
                        <div className="notif-left">
                           <div className="square"></div>
                        </div>
                        <div className="notif-right">
                          <div className="notif-header">
                            <span className="notif-label">Unified Promos </span>
                            <span style={{ fontSize:"10px",  }}>5h ago</span>
                          </div>
                            <p>Load a total amount of P100 to get a discount Voucher!</p>
                        </div>
                    </div>
                    <div className="notif-item">
                        <div className="notif-left">
                           <div className="square"></div>
                        </div>
                        <div className="notif-right">
                          <div className="notif-header">
                            <span className="notif-label">Unified Promos </span>
                            <span style={{ fontSize:"10px",  }}>5h ago</span>
                          </div>
                            <p>Load a total amount of P100 to get a discount Voucher!</p>
                        </div>
                    </div>
                    <div className="notif-item">
                        <div className="notif-left">
                           <div className="square"></div>
                        </div>
                        <div className="notif-right">
                          <div className="notif-header">
                            <span className="notif-label">Unified Promos </span>
                            <span style={{ fontSize:"10px",  }}>5h ago</span>
                          </div>
                            <p>Load a total amount of P100 to get a discount Voucher!</p>
                        </div>
                    </div>
                  </div>
                  {/* List of Favorites */}
                  <div className="header-side-content" style={{ marginTop: "38px" }}>
                    Favourites
                    <div className="ups-btn-group">
                      <button className="btn-back"><img src={arrowBack} alt="" srcset="" /> </button>
                      <button className="btn-back"><img src={arrowForward} alt="" srcset="" /> </button>
                    </div>
                    <span style={{ color:"#277DF1", fontSize:"12px", fontWeight: "500" }}>See All</span>
                  </div>
                  <div className="favourites-con">
                     <div className="card-box">
                        <img src={iconMoney} alt="" srcset="" />
                        <span>Send Money</span>
                     </div>
                     <div className="card-box">
                        <img src={iconMoney} alt="" srcset="" />
                        <span>Buy Loads</span>
                     </div>
                     <div className="card-box">
                        <img src={iconMoney} alt="" srcset="" />
                        <span>Bills Payment</span>
                     </div>
                     <div className="card-box">
                        <img src={iconMoney} alt="" srcset="" />
                        <span>My Network</span>
                     </div>
                  </div>
                  {/* Online Network */}
                  <div className="header-side-content">
                    Online Network
                    <div className="ups-btn-group">
                      <button className="btn-back"><img src={arrowBack} alt="" srcset="" /> </button>
                      <button className="btn-back"><img src={arrowForward} alt="" srcset="" /> </button>
                    </div>
                    <span style={{ color:"#277DF1", fontSize:"12px", fontWeight: "500" }}>See All</span>
                  </div>
                  <div className="online-network" >
                    <div className="network-profile" >
                       <img src={avatar1} alt="" srcset=""/>
                       <span>Jenie kim</span>
                    </div>
                    <div className="network-profile" >
                       <img src={avatar1} alt="" srcset="" />
                       <span>Ichigo Cruz</span>
                    </div>
                    <div className="network-profile">
                       <img src={avatar1} alt="" srcset="" />
                       <span>Darla Reyes</span>
                    </div>
                    <div className="network-profile" >
                       <img src={avatar1} alt="" srcset="" />
                       <span>Ben Ten</span>
                    </div>
                    <div className="network-profile" >
                       <img src={avatar1} alt="" srcset="" />
                       <span>Chris White</span>
                    </div>
                  </div>
              </div>
            </>
        )
    }
}