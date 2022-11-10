import React from "react";
import "./../../styles/middleContent.css"
import iconSearch from "../../assets/images/icon/icon-search.png"
import avatar from "../../assets/images/sample/avatar1.png"
import upsLogo from "../../assets/images/icon/ups-logo.png"
import sampleMedia from "../../assets/images/sample/media1.png"
import likeIcon from "../../assets/images/icon/icon-like.png"
import CommentIcon from "../../assets/images/icon/icon-comment.png"
import shareIconActive from "../../assets/images/icon/icon-share-active.png"
import shareIcon from "../../assets/images/icon/icon-share.png"
import crownIcon from "../../assets/images/icon/icon-crown.png"
import ellipsis from "../../assets/images/icon/icon-ellipsis.png"
import avatar2 from "../../assets/images/sample/avatar2.png"
import iconVerified from "../../assets/images/icon/icon-verified.png"
import btnArrowB from "../../assets/images/icon/btn-blue-post.png"

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
                {/* Scrollable-content */}
                <div className="container-post">
                    {/* Post with Media-Content */}
                    <div className="card-post-image">
                        <div className="card-post-header">
                        <img src={upsLogo} alt="" className="icon-small" style={{ marginRight: "15px" }}/>
                        <div className="header-info">
                                <div className="account">
                                        <span className="acc-name">Unified & Servicess<img src={crownIcon} alt="" srcset="" style={{ width: "14px", height:"14px", marginLeft:"8px", paddingBottom:"2px"}}/></span>
                                        <div className="acc-network">
                                            <span className="post-tag1">Promoted Post</span>
                                            <span className="post-tag">Announcement</span>
                                            <span className="post-tag">Global</span>
                                        </div>
                                </div>
                                <div className="date">
                                    <small>11:11 PM 06/06/2022 <img src={ellipsis} alt="" srcset="" /></small>
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
                            <div className="toolbar">
                                <button className="btn-like-active"><span className="btn-icon-active"><span style={{ marginRight:"8px" }}><img src={likeIcon} alt="" srcset="" /></span>Like</span></button>
                                <button className="btn-comment-active"><span className="btn-icon-active"><span style={{ marginRight:"8px" }}><img src={CommentIcon} alt="" srcset="" /></span>Comment</span></button>
                                <button className="btn-share-active"><span className="btn-icon-active"><span style={{ marginRight:"8px" }}><img src={shareIconActive} alt="" srcset="" /></span>Share</span></button>
                            </div>
                            <div className="toolbar-status">
                                <button className="btn-like-status"><span className="btn-icon-active"><span class="status-count">66</span>Likes</span></button>
                                <button className="btn-like-status"><span className="btn-icon-active"><span class="status-count">22</span>Comments</span></button>
                                <button className="btn-like-status"><span className="btn-icon-active"><span class="status-count">6</span>Shares</span></button>
                                <button className="btn-arrow-b"><img src={btnArrowB} alt="" /></button>
                            </div>
                        </div>
                    </div>
                    {/* Post Non-Media-Content */}
                    <div className="card-post">
                        <div className="card-post-header">
                        <img src={avatar2} alt="" className="icon-small" style={{ marginRight: "15px" }}/>
                        <div className="header-info">
                                <div className="account">
                                        <span className="acc-name">Ben Ten<img src={iconVerified} alt="" srcset="" style={{ width: "14px", height:"14px", marginLeft:"8px"}}/></span>
                                        <div className="acc-network">
                                            <span className="post-tag-nobullet">F123456789</span>
                                            <span className="post-tag">Network</span>
                                        </div>
                                </div>
                                <div className="date">
                                    <small>11:11 PM 06/06/2022 <img src={ellipsis} alt="" srcset="" /></small>
                                </div>
                        </div>
                        </div>
                        <div className="card-post-content">
                            <div className="post-caption">
                                <p>This is my first ever post. Let’s get Unified. :)</p>
                            </div>
                        </div>
                        <div className="card-post-toolbar">
                            <div className="toolbar">
                                <button className="btn-like-active"><span className="btn-icon-active"><span style={{ marginRight:"8px" }}><img src={likeIcon} alt="" srcset="" /></span>Like</span></button>
                                <button className="btn-comment-active"><span className="btn-icon-active"><span style={{ marginRight:"8px" }}><img src={CommentIcon} alt="" srcset="" /></span>Comment</span></button>
                                <button className="btn-share"><span className="btn-icon"><span style={{ marginRight:"8px" }}><img src={shareIcon} alt="" srcset="" /></span>Share</span></button>
                            </div>
                            <div className="toolbar-status">
                                <button className="btn-like-status"><span className="btn-icon-active"><span class="status-count">66</span>Likes</span></button>
                                <button className="btn-like-status"><span className="btn-icon-active"><span class="status-count">22</span>Comments</span></button>
                                <button className="btn-like-status"><span className="btn-icon"><span class="status-count">6</span>Shares</span></button>
                                <button className="btn-arrow-b"><img src={btnArrowB} alt="" /></button>
                            </div>
                        </div>
                    </div>
                    {/* Series Post */}
                    <div className="card-post-series">
                        <div className="header-series">
                            <div>
                                <span style={{ fontWeight:600, marginRight: "5px"}}>Ben Ten</span>
                                <span style={{ color:"#464B53", }}>created a series of post</span>
                            </div>
                            <button className="btn-link-blue"><span>Show this series</span></button>
                        </div>
                        {/* Post */}
                        <div className="card-post" style={{ backgroundColor:"#FFFFFF", zIndex: 1, position: "relative" }}>
                        <div className="card-post-header">
                        <img src={avatar2} alt="" className="icon-small" style={{ marginRight: "15px" }}/>
                        <div className="header-info">
                                <div className="account">
                                        <span className="acc-name">Ben Ten<img src={iconVerified} alt="" srcset="" style={{ width: "14px", height:"14px", marginLeft:"8px"}}/></span>
                                        <div className="acc-network">
                                            <span className="post-tag-nobullet">F123456789</span>
                                            <span className="post-tag">Network</span>
                                        </div>
                                </div>
                                <div className="date">
                                    <small>11:11 PM 06/06/2022 <img src={ellipsis} alt="" srcset="" /></small>
                                </div>
                        </div>
                        </div>
                        <div className="card-post-content">
                            <div className="post-caption">
                                <p>This is my first ever post. Let’s get Unified. :)</p>
                            </div>
                        </div>
                        <div className="card-post-toolbar">
                            <div className="toolbar">
                                <button className="btn-like-active"><span className="btn-icon-active"><span style={{ marginRight:"8px" }}><img src={likeIcon} alt="" srcset="" /></span>Like</span></button>
                                <button className="btn-comment-active"><span className="btn-icon-active"><span style={{ marginRight:"8px" }}><img src={CommentIcon} alt="" srcset="" /></span>Comment</span></button>
                                <button className="btn-share"><span className="btn-icon"><span style={{ marginRight:"8px" }}><img src={shareIcon} alt="" srcset="" /></span>Share</span></button>
                            </div>
                            <div className="toolbar-status">
                                <button className="btn-like-status"><span className="btn-icon-active"><span class="status-count">66</span>Likes</span></button>
                                <button className="btn-like-status"><span className="btn-icon-active"><span class="status-count">22</span>Comments</span></button>
                                <button className="btn-like-status"><span className="btn-icon"><span class="status-count">6</span>Shares</span></button>
                                <button className="btn-arrow-b"><img src={btnArrowB} alt="" /></button>
                            </div>
                        </div>
                        </div>
                        <div className="card-post" style={{ 
                            backgroundColor:"#FFFFFF", 
                            position: "relative", 
                            top: "-40px", 
                            zIndex: 0,
                            paddingTop: "40px"}}>
                        <div className="card-post-header">
                        <img src={avatar2} alt="" className="icon-small" style={{ marginRight: "15px" }}/>
                        <div className="header-info">
                                <div className="account">
                                        <span className="acc-name">Ben Ten<img src={iconVerified} alt="" srcset="" style={{ width: "14px", height:"14px", marginLeft:"8px"}}/></span>
                                        <div className="acc-network">
                                            <span className="post-tag-nobullet">F123456789</span>
                                            <span className="post-tag">Network</span>
                                        </div>
                                </div>
                                <div className="date">
                                    <small>11:11 PM 06/06/2022 <img src={ellipsis} alt="" srcset="" /></small>
                                </div>
                        </div>
                        </div>
                        <div className="card-post-content">
                            <div className="post-caption">
                                <p>First, we need to, ofcourse create an account to paypal.</p>
                            </div>
                        </div>
                        <div className="card-post-toolbar">
                            <div className="toolbar">
                                <button className="btn-like-active"><span className="btn-icon-active"><span style={{ marginRight:"8px" }}><img src={likeIcon} alt="" srcset="" /></span>Like</span></button>
                                <button className="btn-comment-active"><span className="btn-icon-active"><span style={{ marginRight:"8px" }}><img src={CommentIcon} alt="" srcset="" /></span>Comment</span></button>
                                <button className="btn-share"><span className="btn-icon"><span style={{ marginRight:"8px" }}><img src={shareIcon} alt="" srcset="" /></span>Share</span></button>
                            </div>
                            <div className="toolbar-status">
                                <button className="btn-like-status"><span className="btn-icon-active"><span class="status-count">66</span>Likes</span></button>
                                <button className="btn-like-status"><span className="btn-icon-active"><span class="status-count">22</span>Comments</span></button>
                                <button className="btn-like-status"><span className="btn-icon"><span class="status-count">6</span>Shares</span></button>
                                <button className="btn-arrow-b"><img src={btnArrowB} alt="" /></button>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Shared Post */}
                    <div className="card-shared-post">
                        <div className="header-shared-post">
                            <div>
                                <span style={{ fontWeight:600, marginRight: "5px"}}>Darla, Jenie and others</span>
                                <span style={{ color:"#464B53", }}>shared a post</span>
                            </div>
                            <button className="btn-link-yellow"><span>View all shares of this post</span></button>
                        </div>
                        {/* Post */}
                        <div className="card-post" style={{ backgroundColor:"#FFFFFF", zIndex: 1, position: "relative" }}>
                        <div className="card-post-header">
                        <img src={avatar2} alt="" className="icon-small" style={{ marginRight: "15px" }}/>
                        <div className="header-info">
                                <div className="account">
                                        <span className="acc-name">Darla Reyes<img src={iconVerified} alt="" srcset="" style={{ width: "14px", height:"14px", marginLeft:"8px"}}/></span>
                                        <div className="acc-network">
                                            <span className="post-tag-nobullet">F123456789</span>
                                            <span className="post-tag">Network</span>
                                        </div>
                                </div>
                                <div className="date">
                                    <small>11:11 PM 06/06/2022 <img src={ellipsis} alt="" srcset="" /></small>
                                </div>
                        </div>
                        </div>
                        <div className="card-post-content">
                            <div className="post-caption">
                                <p>Ka-pow! UPS #1!</p>
                            </div>
                        </div>
                        </div>
                        <div className="card-post" style={{ 
                            backgroundColor:"#FFFFFF", 
                            position: "relative", 
                            top: "-40px", 
                            zIndex: 0,
                            paddingTop: "40px"}}>
                        <div className="card-post-header">
                        <img src={avatar2} alt="" className="icon-small" style={{ marginRight: "15px" }}/>
                        <div className="header-info">
                                <div className="account">
                                        <span className="acc-name">Jenie Kim <img src={iconVerified} alt="" srcset="" style={{ width: "14px", height:"14px", marginLeft:"8px"}}/></span>
                                        <div className="acc-network">
                                            <span className="post-tag-nobullet">F123456789</span>
                                            <span className="post-tag">Network</span>
                                        </div>
                                </div>
                                <div className="date">
                                    <small>11:11 PM 06/06/2022 <img src={ellipsis} alt="" srcset="" /></small>
                                </div>
                        </div>
                        </div>
                        <div className="card-post-content">
                            <div className="post-caption">
                                <p>Grats! Skkrrrrt! Skrrrrt!</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
             </div>
            </>
        )
    }
}