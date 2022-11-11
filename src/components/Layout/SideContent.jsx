import React from "react";
import "../../styles/sideContent.css"


export default class SideContent extends React.Component{
    constructor(props){
       super(props);
    }

    render(){
        return(
            <>
              <div className="side-content">
                  <div className="header-side-content">
                    Notifications
                    <span style={{ color:"#277DF1", fontSize:"12px", fontWeight: "500" }}>See All</span>
                  </div>
                  <div className="notif-list">
                    <div className="notif-item">
                        <div className="square"></div>
                        <div className="notif-header">
                            <span className="notif-label">Unified Promos </span>
                            <span style={{ fontSize:"10px",  }}>5h ago</span>
                        </div>
                    </div>
                  </div>
              </div>
            </>
        )
    }
}