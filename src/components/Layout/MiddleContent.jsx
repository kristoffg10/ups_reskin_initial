import React from "react";
import "./../../styles/middleContent.css"
import iconSearch from "../../assets/images/icon/icon-search.png"
import avatar from "../../assets/images/sample/avatar1.png"
import sampleMedia from "../../assets/images/sample/media1.png"

export default class MiddleContent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
             <div className="middle-content">
                <div className="header-content">
                    <span>News Feed</span>
                    <div className="search">
                        <input type="text" placeholder="Find something cool here" className="search-input"/>
                        <button className="btn-search"><img src={iconSearch} alt="" className="icon-search"/></button>
                    </div>
                    
                </div>
                <div className="create-post">
                    <img src={avatar} alt="" className="icon-small" style={{ marginRight: "15px" }}/>
                    <input type="text" placeholder="Anything to share to your network, Topson?" id=""className="create-post-input" />
                    <button className="btn-create-post">Create Post</button>
                </div>
                <span className="header-label">Recent Updates</span>
                <div className="card-post-image">
                    <div className="card-post-header">
                       <img src={avatar} alt="" className="icon-small" style={{ marginRight: "15px" }}/>
                       <div className="header-info">
                            <div className="account">
                                    <span className="acc-name">Unified & Services</span>
                                    <div className="acc-network">
                                        <span className="post-tag1">Promoted Post</span>
                                        <span className="post-tag">Announcement</span>
                                        <span className="post-tag">Global</span>
                                    </div>
                            </div>
                            <div className="date">
                                <small>11:11 PM 06/06/2022</small>
                            </div>
                       </div>
                    </div>
                    <div className="card-post-content">
                        <div className="post-caption">
                            <p>This is my first ever post. Let’s get Unified. :)</p>
                        </div>
                        <div className="media">
                            <img src={sampleMedia} alt="" className="media-img"/>
                        </div>
                    </div>
                    <div className="card-post-toolbar">
                         <span className="like">Like</span>
                         <span className="comment">Comment</span>
                         <span className="share">Share</span>
                    </div>
                </div>
             </div>
            </>
        )
    }
}